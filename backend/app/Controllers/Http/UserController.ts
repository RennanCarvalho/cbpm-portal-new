import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import ContributorRequestCredentialMail from 'App/Mailers/ContributorRequestCredentialMail'
import RequestCredentialMail from 'App/Mailers/RequestCredentialMail'
import ValidateDataService from 'App/Services/ValidateDataService'
import ContactUsMailValidator from 'App/Validators/ContactUsMailValidator'
import ContactUsMail from '../../Mailers/ContactUsMail'
import Beneficiario from '../../Models/Beneficiario'
import UsuarioPortalCBPM from '../../Models/UsuarioPortalCBPM'
import EmailConfirmationService from '../../Services/EmailConfirmationService'
import FormatPoliceOfficerDataService from '../../Services/FormatPoliceOfficerDataService'
import FormatShortagesDataService from '../../Services/FormatShortagesDataService'
import FormatUserDataService from '../../Services/FormatUserDataService'
import Pessoa from 'App/Models/Pessoa'

export default class UserController {
  public async login({ request, response, auth }: HttpContextContract) {
    const cpf = request.input('cpf')
    const senha = request.input('senha')

    const usuario = await UsuarioPortalCBPM.findBy('cpf', cpf)

    if (!usuario || !(await Hash.verify(usuario.senha, senha))) {
      return response.badRequest('Credenciais inválidas')
    }

    if (!usuario.conta_ativada) {
      await EmailConfirmationService.execute(usuario.email)

      return response.status(401).json('Favor confirmar sua conta')
    }

    const userToken = await auth.use('api').generate(usuario, {
      expiresIn: '1days',
    })

    const nome = await Database.from('Pessoa').where('cpf', cpf).select('nome')

    const { token } = userToken

    const data = {
      token,
      nome: nome[0].nome,
      id_pessoa: usuario.id_pessoa,
      categoria: usuario.categoria,
    }

    return response.json(data)
  }

  public async userHide({ request, response }: HttpContextContract) {
    function hideEmailStart(email: string): string {
      const atIndex = email.indexOf('@');
      if (atIndex !== -1) {
        const initialPart = email.substring(0, 3);
        const hiddenPart = email.substring(3, atIndex).replace(/./g, '*');
        const domainPart = email.substring(atIndex);
        return `${initialPart}${hiddenPart}${domainPart}`;
      }
      return email;
    }

    function hidePhoneNumberEnd(phoneNumber: string): string {
      const visibleDigits = 4;

      if (phoneNumber.length >= visibleDigits) {
        const hiddenPart = phoneNumber.slice(0, -visibleDigits).replace(/./g, '*');
        const visiblePart = phoneNumber.slice(-visibleDigits);
        return `${hiddenPart}${visiblePart}`;
      }

      return phoneNumber;
    }

    function convertDate(inputDate: string): string {
      const parts = inputDate.split('/');
      if (parts.length !== 3) {
          throw new Error("A data deve estar no formato dd/mm/yyyy");
      }
  
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];
  
      return `${year}-${month}-${day}`;
  }

    const dataRecive = request.body();
    try {
    const usuario =
      await Pessoa
        .query()
        .where('cpf', dataRecive.cpf)
        // .where('rg', dataRecive.rg)
        .where('dtnascimento', convertDate(dataRecive.nascimento))
        .firstOrFail();

      const dataReturn = {
        email: hideEmailStart(usuario?.$attributes.email),
        telefone: usuario?.$attributes.telcelular != null ? hidePhoneNumberEnd(usuario?.$attributes.telcelular) : hidePhoneNumberEnd(usuario?.$attributes.telresidencial)
      };

      return response.json(dataReturn);
    } catch (e) {
      console.error(e);
      return response.notFound();
    }

  }

  public async showData({ response, auth }: HttpContextContract) {
    const id = auth.user?.id_pessoa
    const category = auth.user?.categoria

    // Verifica se o usuário é um contribuinte
    if (id && category === 'CONTRIBUINTE') {
      // Formata os dados do contribuinte
      const data = await FormatPoliceOfficerDataService.execute(id)

      return response.json(data)
    }

    // Verifica se o usuário é um beneficiario
    if (id && category) {
      // Formata os dados do beneficiario
      const data = await FormatUserDataService.execute({ id, category })

      return response.json(data)
    }
  }

  public async resendEmail({ request }: HttpContextContract) {
    const email = request.param('email')

    await EmailConfirmationService.execute(email)
  }

  public async contactUsMail({ request }: HttpContextContract) {
    const formData = await request.validate(ContactUsMailValidator)

    await new ContactUsMail(formData).sendLater()
  }

  public async requestCredential({ request, response, auth }: HttpContextContract) {
    const id = auth.user?.id_pessoa
    const category = auth.user?.categoria

    // Verifica se o usuário é um contribuinte
    if (id && category === 'CONTRIBUINTE') {
      // Busca os dados do contribuinte
      const contributor = await ValidateDataService.findById(id)

      // Pega o id do beneficiario que vai receber a credencial
      const dependentId = request.body()

      const dependentCredencialData = {
        id: dependentId.id,
        category,
      }

      // Formata os dados do dependente
      const dependentData: any = await FormatUserDataService.execute(dependentCredencialData)

      const contributorData = {
        cpf: contributor.cpf,
        nome: contributor.nome,
      }

      // Cria um objeto com os dados do contribuinte e do dependente
      const credentialData: any = { contributorData, dependentData }

      // Envia os dados via e-mail
      await new ContributorRequestCredentialMail(credentialData).sendLater()

      return response.json({ Sucess: true })
    }

    // Verifica se o usuário é um beneficiario
    if (id && category) {
      // Formata os dados do beneficiario
      const formData: any = await FormatUserDataService.execute({ id, category })

      // Envia os dados via e-mail
      await new RequestCredentialMail(formData).sendLater()

      return response.json({ Sucess: true })
    }
  }

  public async validateUserCategory({ response, auth }: HttpContextContract) {
    const id = auth.user?.id_pessoa
    const categoria = auth.user?.categoria

    if ((id && categoria === 'CONTRIBUINTE') || (id && categoria === 'PENSIONISTA')) {
      return response.json(true)
    }
    return response.json(false)
  }

  public async showCredentials({ response, auth }: HttpContextContract) {
    const id = auth.user?.id_pessoa

    if (id) {
      // Busca a categoria do usuário
      const category = await Database.from('usuario_portal_cbpm')
        .where('id_pessoa', id)
        .select('Categoria')

      // Caso o usuário seja um contribuinte
      // executa essa lógica para mostrar as credenciais
      // dos dependentes dele
      if (category[0].Categoria === 'CONTRIBUINTE') {
        // Busca os beneficiários válidos do contribuinte
        const isBeneficiaries = await Beneficiario.query()
          .where('id_policial', id)
          .andWhere('id_status', 1)
          .select('id_pessoa')

        // Busca os dados da credencial de cada dependente
        let credential: Array<any> = isBeneficiaries.map(async (item) => {
          let data = await Database.rawQuery(`SP_CON_IDENTIFICACAO_BENEFICIARIO ${item.id_pessoa}`)

          return data
        })

        // Resolve as promises das credenciais
        const credentialData = await Promise.all(credential)

        // Filtra as credenciais eliminando resultados vazios
        const filteredCredentials = credentialData.filter((item) => {
          if (item?.length) {
            return item
          }
        })

        return response.json({ filteredCredentials, category })
      }

      // Busca os dados da credencial do dependente ou pensionista
      let credential = await Database.rawQuery(`SP_CON_IDENTIFICACAO_BENEFICIARIO ${id}`)

      // Resolve a promise da credencial
      const credentialData = await Promise.all(credential)

      return response.json({ credentialData, category })
    }
  }

  public async showShortages({ response, auth }: HttpContextContract) {
    const id = auth.user?.id_pessoa

    if (id) {
      // Busca a categoria do usuário
      const categoria = await Database.from('usuario_portal_cbpm')
        .where('id_pessoa', id)
        .select('Categoria')

      // Caso o usuário seja um contribuinte
      // executa essa lógica para mostrar as carências caso houver
      if (categoria[0].Categoria === 'CONTRIBUINTE') {
        // Formata os dados do policial
        const data = await FormatPoliceOfficerDataService.execute(id)

        // Busca as carências do policial
        const carencias = await Database.rawQuery(`SP_CON_CARENCIA_PM ${id}`)

        return response.json({ data, carencias, categoria })
      }

      // Formata os dados cadastrais do dependente ou pensionista
      // para serem exibidos na tela de carências
      const data = await FormatShortagesDataService.execute(id)

      // Busca as carências do dependente ou pensionista
      const carencias = await Database.rawQuery(`SP_CON_CARENCIA ${id}`)

      return response.json({ data, carencias, categoria })
    }
  }
}
