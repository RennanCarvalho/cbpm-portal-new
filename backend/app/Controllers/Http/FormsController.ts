import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import FileException from 'App/Exceptions/FileException'
import AtualizacaoDeDados from 'App/Models/AtualizacaoDeDados'
import DeclaracaoDeSaude from 'App/Models/DeclaracaoDeSaude'
import ExclusaoConjuge from 'App/Models/ExclusaoConjuge'
import ExclusaoDeCompanheiro from 'App/Models/ExclusaoDeCompanheiro'
import InclusaoDeGenitores from 'App/Models/InclusaoDeGenitores'
import InclusaoDeMenorSobGuarda from 'App/Models/InclusaoDeMenorSobGuarda'
import ReinclusaoAdministrativa from 'App/Models/ReinclusaoAdministrativa'
import SolicitacaoGeral from 'App/Models/SolicitacaoGeral'
import AdministrativeReinclusionValidator from 'App/Validators/Forms/AdministrativeReinclusionValidator'
import GeneralRequestValidator from 'App/Validators/Forms/GeneralRequestValidator'
import HealthDeclarationValidator from 'App/Validators/Forms/HealthDeclarationValidator'
import UpdateDataValidator from 'App/Validators/Forms/UpdateDataValidator'
import child_process from 'child_process'
import CivilStatus from '../../../contracts/Enums/CivilStatus'
import Forms from '../../../contracts/Enums/Forms'
import Kinship from '../../../contracts/Enums/Kinship'
import SendAttachMail from '../../Mailers/SendAttachMail'
import AtualizacaoCadastralPortal from '../../Models/AtualizacaoCadastralPortal'
import InclusaoAtualizacaoDadosPensionista from '../../Models/InclusaoAtualizacaoDadosPensionista'
import InclusaoCompanheiro from '../../Models/InclusaoCompanheiro'
import InclusaoConjuge from '../../Models/InclusaoConjuge'
import InclusaoDeBeneficiarioComInvalidez from '../../Models/InclusaoDeBeneficiarioComInvalidez'
import InclusaoFilhoEEnteado from '../../Models/InclusaoFilhoEEnteado'
import ReembolsoDespesasMedicas from '../../Models/ReembolsoDespesasMedicas'

import CreateDirectoryService from '../../Services/CreateDirectoryService'
import CompanionExclusionValidator from '../../Validators/Forms/CompanionExclusionValidator'
import CompanionInclusionValidator from '../../Validators/Forms/CompanionInclusionValidator'
import InclusionChildrenAndStepchildrenValidator from '../../Validators/Forms/InclusionChildrenAndStepchildrenValidator'
import InclusionOfDisabledBeneficiaryValidator from '../../Validators/Forms/InclusionOfDisabledBeneficiaryValidator'
import InclusionOfMinorInCustodyValidator from '../../Validators/Forms/InclusionOfMinorInCustodyValidator'
import ParentInclusionValidator from '../../Validators/Forms/ParentInclusionValidator'
import SpouseExclusionValidator from '../../Validators/Forms/SpouseExclusionValidator'
import SpouseInclusionValidator from '../../Validators/Forms/SpouseInclusionValidator'
import UpdatePensionistaDataValidator from '../../Validators/Forms/UpdatePensionistaDataValidator'
import MedicalExpensesRefundValidator from '../../Validators/Forms/MedicalExpensesRefundValidator'
import RegistrationUpdate from '../../Validators/Forms/RegistrationUpdateValidator'
import SendAttachMailHtml from 'App/Mailers/SendAttachMailHtml'


export default class FormsController {
  public async SpouseInclusion({ request, response, auth }: HttpContextContract): Promise<void> {
    const formData = await request.validate(SpouseInclusionValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'inclusao_de_conjuge'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Inclusão de Cônjuge',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.INCLUSAO_CONJUGE,
      })

      //Formata a data de nascimento para o formato yyyy/mm/dd
      const splitedDate = formData.dataNascimento.split('/')
      const formattedDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0]

      // Cria o registro dos dados recebidos
      const spouse = await InclusaoConjuge.create({
        id_atualizacao_cadastral_portal: data.id,
        id_parentesco: Kinship.CÔNJUGE,
        id_estado_civil: CivilStatus.CASADO,
        local_documentos: path.absolutePath,
        nome: formData.nome,
        sexo: formData.sexo,
        dtnascimento: new Date(formattedDate),
        cpf: formData.cpf,
        rg: formData.rg,
        rgdg: formData.rgdg,
        nome_mae: formData.nomeMae,
        nome_pai: formData.nomePai,
        tel_residencial: formData.telResidencial,
        tel_celular: formData.telCelular,
        tel_outro: formData.telOutro,
        email: formData.email,
      })

      return response.json(spouse)
    }
  }

  public async registrationUpdate({ request, response, auth }: HttpContextContract): Promise<void> {

    const id = auth.user?.id
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      const formName = 'atualizacao_cadastral'

      const payload = request.files('file', {
        size: '80mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      const path = await CreateDirectoryService.execute({ id, formName })

      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'
	  
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })
      
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

        const formData = request.all(); // Extracts all form data fields

    // Format the form data as a string to include in the email body
    let emailBody = 'Formulário de Atualização Cadastral<br/><br/>';
    for (const [key, value] of Object.entries(formData)) {
      emailBody += `${key} ${value}`;
    }

    const attachDataHtml = {
      subject: 'Formulário Portal CBPM - Atualização Cadastral',
      html: emailBody,
      path: zippedAttachPath,
    };

      new SendAttachMailHtml(attachDataHtml).sendLater()

    }
  }








  public async companionInclusion({ request, response, auth }: HttpContextContract): Promise<void> {
    const formData = await request.validate(CompanionInclusionValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'inclusao_de_companheiro'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Inclusão de Companheiro',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.INCLUSAO_COMPANHEIRO,
      })

      //Formata a data de nascimento para o formato yyyy/mm/dd
      const splitedDate = formData.dataNascimento.split('/')
      const formattedDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0]

      //Formata a data de nascimento para o formato yyyy/mm/dd
      const splitedDateTestemunha = formData.dataNascimentoTestemunha?.split('/')
      const formattedDateTestemunha =
        splitedDateTestemunha?.[2] +
        '/' +
        splitedDateTestemunha?.[1] +
        '/' +
        splitedDateTestemunha?.[0]

      // Cria o registro dos dados recebidos
      const companion = await InclusaoCompanheiro.create({
        id_atualizacao_cadastral_portal: data.id,
        id_parentesco: Kinship.COMPANHEIRO,
        id_estado_civil: CivilStatus.UNIÃO_ESTÁVEL,
        local_documentos: path.absolutePath,
        nome: formData.nome,
        sexo: formData.sexo,
        dtnascimento: new Date(formattedDate),
        cpf: formData.cpf,
        rg: formData.rg,
        rgdg: formData.rgdg,
        nome_mae: formData.nomeMae,
        nome_pai: formData.nomePai,
        tel_residencial: formData.telResidencial,
        tel_celular: formData.telCelular,
        tel_outro: formData.telOutro,
        email: formData.email,

        nome_testemunha: formData.nomeTestemunha,
        sexo_testemunha: formData.sexoTestemunha,
        dtnascimento_testemunha: new Date(formattedDateTestemunha),
        cpf_testemunha: formData.cpfTestemunha,
        rg_testemunha: formData.rgTestemunha,
        rgdg_testemunha: formData.rgdgTestemunha,
        logradouro_testemunha: formData.logradouroTestemunha,
        numero_testemunha: formData.numeroTestemunha,
        complemento_testemunha: formData.complementoTestemunha,
        bairro_testemunha: formData.bairroTestemunha,
        cidade_testemunha: formData.cidadeTestemunha,
        cep_testemunha: formData.cepTestemunha,
        tel_testemunha: formData.telTestemunha,
      })

      return response.json(companion)
    }
  }

  public async inclusionChildrenAndStepchildren({
    request,
    response,
    auth,
  }: HttpContextContract): Promise<void> {
    const formData = await request.validate(InclusionChildrenAndStepchildrenValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'inclusao_filho_e_enteado'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Inclusão de Filho e Enteado',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.INCLUSAO_FILHOS_E_ENTEADOS,
      })

      //Formata a data de nascimento para o formato yyyy/mm/dd
      const splitedDate = formData.dataNascimento.split('/')
      const formattedDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0]

      // Cria o registro dos dados recebidos
      const childrenOrStepchildren = await InclusaoFilhoEEnteado.create({
        id_atualizacao_cadastral_portal: data.id,
        id_parentesco: formData.parentesco,
        id_estado_civil: formData.estadoCivil,
        local_documentos: path.absolutePath,
        nome: formData.nome,
        sexo: formData.sexo,
        dtnascimento: new Date(formattedDate),
        cpf: formData.cpf,
        rg: formData.rg,
        rgdg: formData.rgdg,
        nome_mae: formData.nomeMae,
        nome_pai: formData.nomePai,
        tel_residencial: formData.telResidencial,
        tel_celular: formData.telCelular,
        tel_outro: formData.telOutro,
        email: formData.email,
      })

      return response.json(childrenOrStepchildren)
    }
  }

  public async parentInclusion({ request, response, auth }: HttpContextContract): Promise<void> {
    const formData = await request.validate(ParentInclusionValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'inclusao_de_genitores'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Inclusão de Genitores',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.INCLUSAO_GENITORES,
      })

      //Formata a data de nascimento para o formato yyyy/mm/dd
      const splitedDate = formData.dataNascimento.split('/')
      const formattedDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0]

      // Cria o registro dos dados recebidos
      const parent = await InclusaoDeGenitores.create({
        id_atualizacao_cadastral_portal: data.id,
        id_parentesco: formData.parentesco,
        id_estado_civil: formData.estadoCivil,
        local_documentos: path.absolutePath,
        nome: formData.nome,
        sexo: formData.sexo,
        dtnascimento: new Date(formattedDate),
        cpf: formData.cpf,
        rg: formData.rg,
        rgdg: formData.rgdg,
        nome_mae: formData.nomeMae,
        nome_pai: formData.nomePai,
        logradouro: formData.logradouro,
        numero: formData.numero,
        complemento: formData.complemento,
        bairro: formData.bairro,
        cidade: formData.cidade,
        uf: formData.uf,
        cep: formData.cep,
        tel_residencial: formData.telResidencial,
        tel_celular: formData.telCelular,
        tel_outro: formData.telOutro,
        email: formData.email,
      })

      return response.json(parent)
    }
  }
  public async medicalExpensesRefund({ request, response, auth }: HttpContextContract): Promise<void> {
    const formData = await request.validate(MedicalExpensesRefundValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'reembolso_despesas_medicas'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Reembolso despesas médicas',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      // const data = await AtualizacaoCadastralPortal.create({
      //   id_usuario_portal_cbpm: id,
      //   nome_formulario: Forms.REEMBOLSO_DESPESAS_MEDICAS,
      // })

      //Formata a data de nascimento para o formato yyyy/mm/dd
      // const splitedDate = formData.dataNascimento.split('/')
      // const formattedDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0]

      // Cria o registro dos dados recebidos
      //const despesas = await ReembolsoDespesasMedicas.create({
       // local_documentos: path.absolutePath,
       // nome: formData.nome,
       // cpf: formData.cpf,
      //})

 //     return response.json(despesas)
    }
  }
  public async refundOfCoparticipation({ request, response, auth }: HttpContextContract): Promise<void> {

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'devolucao_de_coparticipacao'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Devolução de coparticipação',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      // const data = await AtualizacaoCadastralPortal.create({
      //   id_usuario_portal_cbpm: id,
      //   nome_formulario: Forms.DEVOLUCAO_DE_COPARTICIPACAO,
      // })

      //Formata a data de nascimento para o formato yyyy/mm/dd
      // const splitedDate = formData.dataNascimento.split('/')
      // const formattedDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0]

      // Cria o registro dos dados recebidos
      // const parent = await InclusaoDeGenitores.create({
      //   id_atualizacao_cadastral_portal: data.id,
      //   id_parentesco: formData.parentesco,
      //   id_estado_civil: formData.estadoCivil,
      //   local_documentos: path.absolutePath,
      //   nome: formData.nome,
      //   sexo: formData.sexo,
      //   dtnascimento: new Date(formattedDate),
      //   cpf: formData.cpf,
      //   rg: formData.rg,
      //   rgdg: formData.rgdg,
      //   nome_mae: formData.nomeMae,
      //   nome_pai: formData.nomePai,
      //   logradouro: formData.logradouro,
      //   numero: formData.numero,
      //   complemento: formData.complemento,
      //   bairro: formData.bairro,
      //   cidade: formData.cidade,
      //   uf: formData.uf,
      //   cep: formData.cep,
      //   tel_residencial: formData.telResidencial,
      //   tel_celular: formData.telCelular,
      //   tel_outro: formData.telOutro,
      //   email: formData.email,
      // })

      // return response.json()
    }
  }

















  public async inclusionOfMinorInCustody({
    request,
    response,
    auth,
  }: HttpContextContract): Promise<void> {
    const formData = await request.validate(InclusionOfMinorInCustodyValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'inclusao_de_menor_sob_guarda'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Inclusão de Menor Sob Guarda',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.INCLUSAO_MENOR_SOB_GUARDA,
      })

      //Formata a data de nascimento para o formato yyyy/mm/dd
      const splitedDate = formData.dataNascimento.split('/')
      const formattedDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0]

      // Cria o registro dos dados recebidos
      const minor = await InclusaoDeMenorSobGuarda.create({
        id_atualizacao_cadastral_portal: data.id,
        id_parentesco: formData.parentesco,
        id_estado_civil: formData.estadoCivil,
        local_documentos: path.absolutePath,
        nome: formData.nome,
        sexo: formData.sexo,
        dtnascimento: new Date(formattedDate),
        cpf: formData.cpf,
        rg: formData.rg,
        rgdg: formData.rgdg,
        nome_mae: formData.nomeMae,
        nome_pai: formData.nomePai,
        tel_residencial: formData.telResidencial,
        tel_celular: formData.telCelular,
        tel_outro: formData.telOutro,
        email: formData.email,
        tipo_documento: formData.tipoDocumento,
      })

      return response.json(minor)
    }
  }

  public async inclusionOfDisabledBeneficiary({
    request,
    response,
    auth,
  }: HttpContextContract): Promise<void> {
    const formData = await request.validate(InclusionOfDisabledBeneficiaryValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'inclusao_de_beneficiario_com_invalidez'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Inclusão de Beneficiário com Invalidez',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.BENEFICIARIO_INVALIDEZ,
      })

      //Formata a data de nascimento para o formato yyyy/mm/dd
      const splitedDate = formData.dataNascimento.split('/')
      const formattedDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0]

      // Cria o registro dos dados recebidos
      const beneficiary = await InclusaoDeBeneficiarioComInvalidez.create({
        id_atualizacao_cadastral_portal: data.id,
        id_parentesco: formData.parentesco,
        id_estado_civil: formData.estadoCivil,
        local_documentos: path.absolutePath,
        nome: formData.nome,
        sexo: formData.sexo,
        dtnascimento: new Date(formattedDate),
        cpf: formData.cpf,
        rg: formData.rg,
        rgdg: formData.rgdg,
        nome_mae: formData.nomeMae,
        nome_pai: formData.nomePai,
        invalidez: formData.invalidez,
        invalidez_definitiva: formData.invalidezDefinitiva,
        cid: formData.cid,
        logradouro: formData.logradouro,
        numero: formData.numero,
        complemento: formData.complemento,
        bairro: formData.bairro,
        cidade: formData.cidade,
        uf: formData.uf,
        cep: formData.cep,
        tel_residencial: formData.telResidencial,
        tel_celular: formData.telCelular,
        tel_outro: formData.telOutro,
        email: formData.email,
      })

      return response.json(beneficiary)
    }
  }

  public async spouseExclusion({ request, response, auth }: HttpContextContract): Promise<void> {
    const formData = await request.validate(SpouseExclusionValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'exclusao_conjuge'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Exclusão de Cônjuge/Enteado',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.EXCLUSAO_CONJUGE_ENTEADO,
      })

      //Formata a data de nascimento para o formato yyyy/mm/dd
      const splitedDate = formData.dataNascimento.split('/')
      const formattedDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0]

      // Cria o registro dos dados recebidos
      const beneficiary = await ExclusaoConjuge.create({
        id_atualizacao_cadastral_portal: data.id,
        id_parentesco: formData.parentesco,
        local_documentos: path.absolutePath,
        tipo_documento: formData.tipoDocumento,
        nome: formData.nome,
        dtnascimento: new Date(formattedDate),
        cpf: formData.cpf,
        rg: formData.rg,
        rgdg: formData.rgdg,
      })

      return response.json(beneficiary)
    }
  }

  public async companionExclusion({ request, response, auth }: HttpContextContract): Promise<void> {
    const formData = await request.validate(CompanionExclusionValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'exclusao_de_companheiro'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Exclusão de Companheiro(a)/Enteado',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.EXCLUSAO_COMPANHEIRA_ENTEADO,
      })

      //Formata a data de nascimento para o formato yyyy/mm/dd
      const splitedDate = formData.dataNascimento.split('/')
      const formattedDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0]

      //Formata a data de nascimento para o formato yyyy/mm/dd
      const splitedDateTestemunha = formData.dataNascimentoTestemunha?.split('/')
      const formattedDateTestemunha =
        splitedDateTestemunha?.[2] +
        '/' +
        splitedDateTestemunha?.[1] +
        '/' +
        splitedDateTestemunha?.[0]

      // Cria o registro dos dados recebidos
      const companion = await ExclusaoDeCompanheiro.create({
        id_atualizacao_cadastral_portal: data.id,
        id_parentesco: formData.parentesco,
        local_documentos: path.absolutePath,
        nome: formData.nome,
        dtnascimento: new Date(formattedDate),
        cpf: formData.cpf,
        rg: formData.rg,
        rgdg: formData.rgdg,

        nome_testemunha: formData.nomeTestemunha,
        sexo_testemunha: formData.sexoTestemunha,
        dtnascimento_testemunha: formData.dataNascimentoTestemunha
          ? new Date(formattedDateTestemunha)
          : undefined,
        cpf_testemunha: formData.cpfTestemunha,
        rg_testemunha: formData.rgTestemunha,
        rgdg_testemunha: formData.rgdgTestemunha,
        logradouro_testemunha: formData.logradouroTestemunha,
        numero_testemunha: formData.numeroTestemunha,
        complemento_testemunha: formData.complementoTestemunha,
        bairro_testemunha: formData.bairroTestemunha,
        cidade_testemunha: formData.cidadeTestemunha,
        cep_testemunha: formData.cepTestemunha,
        tel_testemunha: formData.telTestemunha,
      })

      return response.json(companion)
    }
  }

  public async updateData({ request, response, auth }: HttpContextContract): Promise<void> {
    const formData = await request.validate(UpdateDataValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    if (id) {
      // Nome do diretório do formulário
      const formName = 'atualizacao_de_dados'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      console.log(payload)
      // Valida se vieram arquivos na requisição
      if (payload.length === 0) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }
      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Atualização de Dados',
        logradouro: formData.logradouro,
        numero: formData.numero,
        complemento: formData.complemento,
        bairro: formData.bairro,
        cidade: formData.cidade,
        uf: formData.uf,
        cep: formData.cep,
        email: formData.email,

        tel_residencial: formData.telResidencial,
        tel_celular: formData.telCelular,
        tel_outro: formData.telOutro,
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.ATUALIZACAO_DE_DADOS,
      })

      // Cria o registro dos dados recebidos
      const updatedData = await AtualizacaoDeDados.create({
        id_atualizacao_cadastral_portal: data.id,
        local_documentos: path.absolutePath,

        logradouro: formData.logradouro,
        numero: formData.numero,
        complemento: formData.complemento,
        bairro: formData.bairro,
        cidade: formData.cidade,
        uf: formData.uf,
        cep: formData.cep,
        email: formData.email,

        tel_residencial: formData.telResidencial,
        tel_celular: formData.telCelular,
        tel_outro: formData.telOutro,
      })

      return response.json(updatedData)
    }
  }

  public async updatePensionistaData({
    request,
    response,
    auth,
  }: HttpContextContract): Promise<void> {
    const formData = await request.validate(UpdatePensionistaDataValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'inclusao_ou_atualizacao_dados_pensionista'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }
      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Inclusão ou Atualização de Dados Pensionista',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.INCLUSAO_ATUALIZAÇAO_DADOS_PENSIONISTA,
      })

      //Formata a data de nascimento para o formato yyyy/mm/dd
      const splitedDate = formData.dataNascimento.split('/')
      const formattedDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0]

      // Cria o registro dos dados recebidos
      const updatedPensionistaData = await InclusaoAtualizacaoDadosPensionista.create({
        id_atualizacao_cadastral_portal: data.id,
        local_documentos: path.absolutePath,

        nome: formData.nome,
        cpf: formData.cpf,
        rg: formData.rg,
        rgdg: formData.rgdg,
        dtnascimento: new Date(formattedDate),
        nome_mae: formData.nomeMae,
        nome_pai: formData.nomePai,
        logradouro: formData.logradouro,
        numero: formData.numero,
        complemento: formData.complemento,
        bairro: formData.bairro,
        cidade: formData.cidade,
        uf: formData.uf,
        cep: formData.cep,
        tel_residencial: formData.telResidencial,
        tel_celular: formData.telCelular,
        tel_outro: formData.telOutro,
        email: formData.email,
      })

      return response.json(updatedPensionistaData)
    }
  }

  public async generalRequest({ request, response, auth }: HttpContextContract): Promise<void> {
    const formData = await request.validate(GeneralRequestValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'solicitacao_geral'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Solicitação Geral',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.REQUERIMENTO_SOLICITACAO_GERAL,
      })

      // Cria o registro dos dados recebidos
      const generalreq = await SolicitacaoGeral.create({
        id_atualizacao_cadastral_portal: data.id,
        local_documentos: path.absolutePath,
        nome: formData.nome,
        re_ou_matricula: formData.reOuMatricula,
        cpf: formData.cpf,
        rg: formData.rg,
        rgdg: formData.rgdg,
        nome_mae: formData.nomeMae,
        nome_pai: formData.nomePai,
        tipo_usuario: formData.tipoUsuario,
        logradouro: formData.logradouro,
        numero: formData.numero,
        complemento: formData.complemento,
        bairro: formData.bairro,
        cidade: formData.cidade,
        uf: formData.uf,
        cep: formData.cep,
        tel_residencial: formData.telResidencial,
        tel_celular: formData.telCelular,
        tel_outro: formData.telOutro,
        email: formData.email,
        solicitacao: formData.solicitacao,
      })

      return response.json(generalreq)
    }
  }

  public async administrativeReinclusion({
    request,
    response,
    auth,
  }: HttpContextContract): Promise<void> {
    const formData = await request.validate(AdministrativeReinclusionValidator)

    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'reinclusao_administrativa'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Reinclusão Administrativa',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.REQUERIMENTO_REINCLUSAO_ADMINISTRATIVA,
      })

      // Cria o registro dos dados recebidos
      const reinclusion = await ReinclusaoAdministrativa.create({
        id_atualizacao_cadastral_portal: data.id,
        local_documentos: path.absolutePath,

        nome: formData.nome,
        re_ou_matricula: formData.reOuMatricula,
        cpf: formData.cpf,
        tipo_contribuinte: formData.tipoContribuinte,
        id_posto_contribuinte: formData.postoContribuinte,

        logradouro: formData.logradouro,
        numero: formData.numero,
        complemento: formData.complemento,
        bairro: formData.bairro,
        cidade: formData.cidade,
        uf: formData.uf,
        cep: formData.cep,
        tel_residencial: formData.telResidencial,
        tel_celular: formData.telCelular,
        tel_outro: formData.telOutro,
        email: formData.email,
      })

      return response.json(reinclusion)
    }
  }

  public async healthDeclaration({ request, response, auth }: HttpContextContract): Promise<void> {
    const formData = await request.validate(HealthDeclarationValidator)
    debugger;
    // Verifica se o usuário pussui id e faz a validação do token
    const id = auth.user?.id

    // Verifica a categoria do usuário
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      // Nome do diretório do formulário
      const formName = 'declaracao_de_saude'

      // Recebe os arquivos da requisição
      const payload = request.files('file', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg', 'pdf'],
      })
      console.warn(payload)

      // Valida se vieram arquivos na requisição
      if (payload.length === 0 || payload.length < 2) {
        return response.status(422).json({ document: 'Favor anexar os documentos solicitados.' })
      }

      // Verifica se o arquivos são validos
      payload.map((item) => {
        if (!item.isValid) {
          const error = JSON.stringify(item.errors)
          throw new FileException(error, 422)
        }
      })

      // Cria o diretório caso o mesmo não exista
      const path = await CreateDirectoryService.execute({ id, formName })

      // Move os arquivos para o diretório informado
      for (let item of payload) {
        await item.move(`${path.relativePath}`),
          {
            name: `${item.clientName}`,
          }
      }

      // Cria o caminho para o arquivo zipado
      const zippedAttachPath = path.relativePath + '/' + 'documentos_comprobatorios.zip'

      // Zipa todo o diretório informado
      child_process.execSync(`zip -r documentos_comprobatorios.zip *`, {
        cwd: path.relativePath,
      })

      // Busca o id da tabela Pessoa do contribuinte ou pensionista
      const idPessoa = await Database.from('usuario_portal_cbpm')
        .where('id', id)
        .select('id_pessoa')

      // Busca o nome e o CPF do contribuinte ou pensionista
      const nameAndCPF = await Database.from('Pessoa')
        .where('id', idPessoa[0].id_pessoa)
        .select('nome', 'cpf')

      // Cria o objeto com os dados para o envio dos anexos
      const attachData = {
        name: nameAndCPF[0].nome,
        cpf: nameAndCPF[0].cpf,
        form: 'Declaração de Saúde',
        path: zippedAttachPath,
      }

      // Envia um e-mail com os arquivos enviados em anexo
      new SendAttachMail(attachData).sendLater()

      //Formata a data de nascimento para o formato yyyy/mm/dd
      const splitedDate = formData.dataNascimento.split('/')
      const formattedDate = splitedDate[2] + '/' + splitedDate[1] + '/' + splitedDate[0]

      // Cria o registro da solicitação
      const data = await AtualizacaoCadastralPortal.create({
        id_usuario_portal_cbpm: id,
        nome_formulario: Forms.FORMULARIO_DECLARACAO_SAUDE,
      })

      // Cria o registro dos dados recebidos
      const declaration = await DeclaracaoDeSaude.create({
        id_atualizacao_cadastral_portal: data.id,
        id_parentesco: formData.parentesco,
        id_posto_contribuinte: formData.postoContribuinte,
        local_documentos: path.absolutePath,

        nome: formData.nome,
        dtnascimento: new Date(formattedDate),
        cpf: formData.cpf,
        altura: formData.altura,
        peso: formData.peso,

        nome_contribuinte: formData.nomeContribuinte,
        re_contribuinte: formData.reContribuinte,

        pergunta_01: formData.pergunta_01,
        pergunta_02: formData.pergunta_02,
        pergunta_03: formData.pergunta_03,
        pergunta_04: formData.pergunta_04,
        pergunta_05: formData.pergunta_05,
        pergunta_06: formData.pergunta_06,
        pergunta_07: formData.pergunta_07,
        pergunta_08: formData.pergunta_08,
        pergunta_09: formData.pergunta_09,
        pergunta_10: formData.pergunta_10,
        pergunta_11: formData.pergunta_11,
        pergunta_12: formData.pergunta_12,
        pergunta_13: formData.pergunta_13,
        pergunta_14: formData.pergunta_14,
        pergunta_15: formData.pergunta_15,
        pergunta_16: formData.pergunta_16,
        pergunta_17: formData.pergunta_17,
        pergunta_18: formData.pergunta_18,
        pergunta_19: formData.pergunta_19,
        pergunta_20: formData.pergunta_20,
        pergunta_21: formData.pergunta_21,
        pergunta_22: formData.pergunta_22,
        pergunta_23: formData.pergunta_23,
      })

      return response.json(declaration)
    }
  }
}
