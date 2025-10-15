import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import FormatExtractQueryDate from '../../Utils/FormatExtractQueryDate'
import FormatPolicialPosto from '../../Utils/FormatPolicialPosto'

export default class ExtractsController {
  public async processExtract({ request, response, auth }: HttpContextContract) {
    // {{{
    const id = auth.user?.id_pessoa
    const categoria = auth.user?.categoria

    // Pega o período inicial e o período final da busca
    const searchData = request.qs()

    // Verifica se o usuário é um contribuinte
    if (id && categoria === 'CONTRIBUINTE') {
      const data = await Database.rawQuery(
        `SP_CON_APOSTILAMENTO_PORTAL "${searchData.periodoInicial}", "${searchData.periodoFinal}", ${id}`
      )

      const userData = await Database.from('Pessoa').where('id', id).select('nome', 'identidade')

      const posto = await Database.from('Policial').select('id_posto').where('id_pessoa', id)

      const postoPolicial = await FormatPolicialPosto.execute(posto[0].id_posto)

      const extractData = {
        data,
        posto: postoPolicial,
        name: userData[0].nome,
        re: userData[0].identidade,
      }

      return response.json(extractData)
    }

    if (id && categoria === 'PENSIONISTA') {
      const data = await Database.rawQuery(
        `SP_CON_APOSTILAMENTO_PORTAL "${searchData.periodoInicial}", "${searchData.periodoFinal}", ${id}`
      )

      const name = await Database.from('Pessoa').where('id', id).select('nome')

      const matricula = await Database.from('Beneficiario')
        .where('id_pessoa', id)
        .select('matricula')

      const extractData = {
        data,
        posto: 'PENSIONISTA',
        name: name[0].nome,
        matricula: matricula[0].matricula,
      }

      return response.json(extractData)
    }
    return response.status(401).json({ Error: 'NÃO AUTORIZADO' })
  } // }}}

  public async checkingAccountExtract({ request, response, auth }: HttpContextContract) {
    // {{{
    const id = auth.user?.id_pessoa
    const categoria = auth.user?.categoria

    if (id && categoria === 'CONTRIBUINTE') {
      const userData = await Database.from('Pessoa')
        .where('id', id)
        .select('cpf', 'nome', 'identidade')

      const idContribuinte = await Database.query()
        .from('SAM.dbo.Contribuintes')
        .where('CPF', userData[0].cpf)

      const searchData = request.qs()

      const { yearAndMonthInitial, yearAndMonthFinal } = FormatExtractQueryDate.execute(
        searchData.periodoInicial,
        searchData.periodoFinal
      ) 

      const data = await Database.query()
        .from('SAM.dbo.ContaCorrente')
        .where('IdContribuinte', idContribuinte[0].IdContribuinte)
        // .andWhereBetween('AnoMesRef', [yearAndMonthInitial, yearAndMonthFinal])
        .whereRaw(
          `(ContaCorrente.AnoCompetencia * 100 + ContaCorrente.MesCompetencia) BETWEEN ? AND ?`,
          [yearAndMonthInitial, yearAndMonthFinal]
        )
        // .join('SAM.dbo.Movimento', 'ContaCorrente.IdContaCorrente', '=', 'Movimento.IdContaCorrente')
        .select(
          'ContaCorrente.AnoCompetencia',
          'ContaCorrente.MesCompetencia',
          'ContaCorrente.SaldoAnterior',
          'ContaCorrente.DebitosDoMes',
          'ContaCorrente.Ajustes',
          'ContaCorrente.ValorDaContribuicaoParaCBPM',
          'ContaCorrente.Limite',
          'ContaCorrente.LimiteAtualizado',
          'ContaCorrente.ADescontar',
          'ContaCorrente.jaDescontado',
          'ContaCorrente.SaldoAtual'
        )
        .groupBy(
          'ContaCorrente.AnoCompetencia',
          'ContaCorrente.MesCompetencia',
          'ContaCorrente.SaldoAnterior',
          'ContaCorrente.DebitosDoMes',
          'ContaCorrente.Ajustes',
          'ContaCorrente.ValorDaContribuicaoParaCBPM',
          'ContaCorrente.Limite',
          'ContaCorrente.LimiteAtualizado',
          'ContaCorrente.ADescontar',
          'ContaCorrente.jaDescontado',
          'ContaCorrente.SaldoAtual'
        );

      const posto = await Database.from('Policial')
        .select('id_posto')
        .where('id_pessoa', id)

      const postoPolicial = await FormatPolicialPosto.execute(posto[0].id_posto)

      const extractData = {
        data,
        posto: postoPolicial,
        name: userData[0].nome,
        re: userData[0].identidade,
      }

      return response.json(extractData)

    }

    if (id && categoria === 'PENSIONISTA') {
      const userData = await Database.from('Pessoa')
        .where('id', id)
        .select('id', 'cpf', 'nome')

      const idBeneficiaraio = await Database.from('Beneficiario')
        .where('id', userData[0].id)
        .select('id_policial')

      const posto = await Database.from('Policial')
        .select('id_posto')
        .where('id_pessoa', idBeneficiaraio[0].id_policial)

      const postoPolicial = await FormatPolicialPosto.execute(posto[0].id_posto)

      const idContribuinte = await Database.query()
        .from('SAM.dbo.Contribuintes')
        .where('CPF', userData[0].cpf)

      const searchData = request.qs()

      const { yearAndMonthInitial, yearAndMonthFinal } = FormatExtractQueryDate.execute(
        searchData.periodoInicial,
        searchData.periodoFinal
      )

      const data = await Database.query()
        .from('SAM.dbo.ContaCorrente')
        .where('IdContribuinte', idContribuinte[0].IdContribuinte)
        // .andWhereBetween('AnoMesRef', [yearAndMonthInitial, yearAndMonthFinal])
        .whereRaw(
          `(ContaCorrente.AnoCompetencia * 100 + ContaCorrente.MesCompetencia) BETWEEN ? AND ?`,
          [yearAndMonthInitial, yearAndMonthFinal]
        )
        // .join('SAM.dbo.Movimento', 'ContaCorrente.IdContaCorrente', '=', 'Movimento.IdContaCorrente')
        .select(
          'ContaCorrente.AnoCompetencia',
          'ContaCorrente.MesCompetencia',
          'ContaCorrente.SaldoAnterior',
          'ContaCorrente.DebitosDoMes',
          'ContaCorrente.Ajustes',
          'ContaCorrente.ValorDaContribuicaoParaCBPM',
          'ContaCorrente.Limite',
          'ContaCorrente.LimiteAtualizado',
          'ContaCorrente.ADescontar',
          'ContaCorrente.jaDescontado',
          'ContaCorrente.SaldoAtual'
        )
        .groupBy(
          'ContaCorrente.AnoCompetencia',
          'ContaCorrente.MesCompetencia',
          'ContaCorrente.SaldoAnterior',
          'ContaCorrente.DebitosDoMes',
          'ContaCorrente.Ajustes',
          'ContaCorrente.ValorDaContribuicaoParaCBPM',
          'ContaCorrente.Limite',
          'ContaCorrente.LimiteAtualizado',
          'ContaCorrente.ADescontar',
          'ContaCorrente.jaDescontado',
          'ContaCorrente.SaldoAtual'
        )

      const matricula = await Database.from('Beneficiario')
        .where('id_pessoa', id)
        .select('matricula')

      const extractData = {
        data,
        posto: postoPolicial,
        name: userData[0].nome,
        matricula: matricula[0].matricula,
      }

      return response.json(extractData)

    }
    return response.status(401).json({ Error: 'NÃO AUTORIZADO' })
  } // }}}

  public async medicalExpenseStatement({ request, response, auth }: HttpContextContract) {
    // {{{
    const id = auth.user?.id_pessoa
    const categoria = auth.user?.categoria

    if (id && categoria === 'CONTRIBUINTE') {
      const userData = await Database.from('Pessoa')
        .where('id', id)
        .select('cpf', 'nome', 'identidade')

      const idContribuinte = await Database.query()
        .from('SAM.dbo.Contribuintes')
        .where('CPF', userData[0].cpf)
        .select('IdContribuinte')

      // Pega o período inicial e o período final da busca
      const searchData = request.qs()

      // Formata as datas do request
      const { yearAndMonthInitial, yearAndMonthFinal } = FormatExtractQueryDate.execute(
        searchData.periodoInicial,
        searchData.periodoFinal
      )

      // Faz a busca no banco utilizando os períodos informados
      const data = await Database.query()
        .from('SAM.dbo.ContaCorrente')
        .where('IdContribuinte', idContribuinte[0].IdContribuinte)
        // .andWhereBetween('AnoMesRef', [yearAndMonthInitial, yearAndMonthFinal])
        .whereRaw(
          `(ContaCorrente.AnoCompetencia * 100 + ContaCorrente.MesCompetencia) BETWEEN ? AND ?`,
          [yearAndMonthInitial, yearAndMonthFinal]
        )
        .join(
          'SAM.dbo.Movimento',
          'ContaCorrente.IdContaCorrente',
          '=',
          'Movimento.IdContaCorrente'
        )
        .select(
          'Movimento.DataAtendimento',
          'Movimento.Fatura',
          'Movimento.NomePaciente',
          'Movimento.Procedimento',
          'Movimento.Quantidade',
          'Movimento.Valor',
          'Movimento.PgCBPM',
          'Movimento.PgContribuinte'
        )

      const posto = await Database.from('Policial').select('id_posto').where('id_pessoa', id)

      const postoPolicial = await FormatPolicialPosto.execute(posto[0].id_posto)

      const extractData = {
        data,
        posto: postoPolicial,
        name: userData[0].nome,
        re: userData[0].identidade,
      }

      return response.json(extractData)
    }

    if (id && categoria === 'PENSIONISTA') {
      const userData = await Database.from('Pessoa')
        .where('id', id)
        .select('id', 'cpf', 'nome')

      const idBeneficiaraio = await Database.from('Beneficiario')
        .where('id', userData[0].id)
        .select('id_policial')

      const posto = await Database.from('Policial')
        .select('id_posto')
        .where('id_pessoa', idBeneficiaraio[0].id_policial)

      const postoPolicial = await FormatPolicialPosto.execute(posto[0].id_posto)

      const idContribuinte = await Database.query()
        .from('SAM.dbo.Contribuintes')
        .where('CPF', userData[0].cpf)

      // Pega o período inicial e o período final da busca
      const searchData = request.qs()

      const { yearAndMonthInitial, yearAndMonthFinal } = FormatExtractQueryDate.execute(
        searchData.periodoInicial,
        searchData.periodoFinal
      )

      // Faz a busca no banco utilizando os períodos informados
      const data = await Database.query()
        .from('SAM.dbo.ContaCorrente')
        .where('IdContribuinte', idContribuinte[0].IdContribuinte)
        // .andWhereBetween('AnoMesRef', [yearAndMonthInitial, yearAndMonthFinal])
        .whereRaw(
          `(ContaCorrente.AnoCompetencia * 100 + ContaCorrente.MesCompetencia) BETWEEN ? AND ?`,
          [yearAndMonthInitial, yearAndMonthFinal]
        )
        .join(
          'SAM.dbo.Movimento',
          'ContaCorrente.IdContaCorrente',
          '=',
          'Movimento.IdContaCorrente'
        )
        .select(
          'Movimento.DataAtendimento',
          'Movimento.Fatura',
          'Movimento.NomePaciente',
          'Movimento.Procedimento',
          'Movimento.Quantidade',
          'Movimento.Valor',
          'Movimento.PgCBPM',
          'Movimento.PgContribuinte'
        )

      const matricula = await Database.from('Beneficiario')
        .where('id_pessoa', id)
        .select('matricula')

      const extractData = {
        data,
        posto: postoPolicial,
        name: userData[0].nome,
        matricula: matricula[0].matricula,
      }

      return response.json(extractData)
    }
    return response.status(401).json({ Error: 'NÃO AUTORIZADO' })
  } // }}}

  public async medicalExpenseC800Statement({ request, response, auth }: HttpContextContract) {
    // {{{
    const id = auth.user?.id_pessoa
    const categoria = auth.user?.categoria

    if (id && categoria === 'CONTRIBUINTE') {
      const userData = await Database.from('Pessoa').where('id', id).select('identidade', 'nome')

      // Pega o RE do objeto
      let reWithZero = userData[0].identidade

      // Pega a quantidade de digítos
      let len = userData[0].identidade.length

      // Adiciona zeros a esquerda até chegar a 9 digítos
      while (len < 9) {
        reWithZero = '0' + reWithZero

        len++
      }

      // Pega o período inicial e o período final da busca
      const searchData = request.qs()

      // Formata as datas do request
      const { yearAndMonthInitial, yearAndMonthFinal } = FormatExtractQueryDate.execute(
        searchData.periodoInicial,
        searchData.periodoFinal
      )

      const data = await Database.from('SAM.C800.C800_Movimentos')
        .where('REMatricula', reWithZero)
        .andWhereBetween('Competenc', [yearAndMonthInitial, yearAndMonthFinal])
        .select(
          'DataAtendimento',
          'Fatura',
          'NomePac',
          'Procedimento',
          'Quantidade',
          'Valor',
          'Ressarcim'
        )

      const posto = await Database.from('Policial').select('id_posto').where('id_pessoa', id)

      const postoPolicial = await FormatPolicialPosto.execute(posto[0].id_posto)

      const extractData = {
        data,
        posto: postoPolicial,
        name: userData[0].nome,
        re: userData[0].identidade,
      }

      return response.json(extractData)
    }

    if (id && categoria === 'PENSIONISTA') {
      const userData = await Database.from('Pessoa').where('id', id).select('nome')

      const idProvedor = await Database.from('usuario_portal_cbpm')
        .where('id_pessoa', id)
        .select('id_provedor')

      const REProvedor = await Database.from('Pessoa')
        .where('id', idProvedor[0].id_provedor)
        .select('identidade')

      // Pega o RE do objeto
      let reWithZero = REProvedor[0].identidade

      // Pega a quantidade de digítos
      let len = REProvedor[0].identidade.length

      // Adiciona zeros a esquerda até chegar a 9 digítos
      while (len < 9) {
        reWithZero = '0' + reWithZero

        len++
      }

      // Pega o período inicial e o período final da busca
      const searchData = request.qs()

      // Formata as data do request
      const { yearAndMonthInitial, yearAndMonthFinal } = FormatExtractQueryDate.execute(
        searchData.periodoInicial,
        searchData.periodoFinal
      )

      const data = await Database.from('SAM.C800.C800_Movimentos')
        .where('REMatricula', reWithZero)
        .andWhereBetween('Competenc', [yearAndMonthInitial, yearAndMonthFinal])
        .select(
          'DataAtendimento',
          'Fatura',
          'NomePac',
          'Procedimento',
          'Quantidade',
          'Valor',
          'Ressarcim'
        )

      const matricula = await Database.from('Beneficiario')
        .where('id_pessoa', id)
        .select('matricula')

      const extractData = {
        data,
        posto: 'PENSIONISTA',
        name: userData[0].nome,
        matricula: matricula[0].matricula,
      }

      return response.json(extractData)
    }
    return response.status(401).json({ Error: 'NÃO AUTORIZADO' })
  } // }}}
}
