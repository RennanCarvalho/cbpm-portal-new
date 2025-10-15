import AppErrorException from 'App/Exceptions/AppErrorException'
import Database from '@ioc:Adonis/Lucid/Database'
import { ShowUserDataDTO } from '../DTO/ShowUserDataDTO'
import Pessoa from '../Models/Pessoa'
import FormatDataNascimento from '../Utils/FormatDataNascimento'
import FormatEstado from '../Utils/FormatEstado'
import FormatEstadoCivil from '../Utils/FormatEstadoCivil'
import FormatIdade from '../Utils/FormatIdade'
import FormatSexo from '../Utils/FormatSexo'

type UserData = {
  id: number
  category: string
}

export default class FormatUserDataService {
  public static async execute({ id, category }: UserData): Promise<ShowUserDataDTO> {
    const user = await Pessoa.findBy('id', id)

    if (!user) {
      throw new AppErrorException('Id não encontrado', 404)
    }

    const civilStatus = await FormatEstadoCivil.execute(user.id_estadocivil)
    const birthday = await FormatDataNascimento.execute(user.dtnascimento)
    const gender = await FormatSexo.execute(user.sexo)
    const state = await FormatEstado.execute(user.id_estado)
    const age = await FormatIdade.execute(user.dtnascimento)

    let registration = 'NÃO SE APLICA'
    let nomeSocial = 'NÃO POSSUI'

    if (category === 'PENSIONISTA') {
      registration = await Database.from('Carteirinha')
        .where('id_beneficiario', id)
        .select('codigo')
        .first()
        .then((data) => {return data.codigo})
    }

    if (category === "PENSIONISTA" || category === "DEPENDENTE") {
      nomeSocial = await Database.from('Beneficiario')
      .where('id_pessoa', id)
      .select('nome_carteirinha')
      .first()
      .then((data) => {return data.nome_carteirinha} )
    }

    return {
      nome: user.nome,
      nomeSocial: nomeSocial,
      estado: state,
      idade: age,
      dataNascimento: birthday,
      sexo: gender,
      cep: user.cep,
      bairro: user.bairro,
      logradouro: user.logradouro,
      complemento: user.complemento,
      numero: user.numero,
      telResidencial: user.telresidencial,
      telCelular: user.telcelular,
      telOutro: user.teloutro,
      email: user.email,
      cpf: user.cpf,
      orgaoEmissor: user.orgaoemissor,
      ufIdentidade: user.ufidentidade,
      cidade: user.cidade,
      tipoIdentidade: user.tipoidentidade,
      rg: user.rg,
      rgdg: user.rgdg,
      matricula: registration,
      estadoCivil: civilStatus,
    }
  }
}
