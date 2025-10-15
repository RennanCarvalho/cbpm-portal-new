import AppErrorException from 'App/Exceptions/AppErrorException'
import { ShowPoliceOfficerDataDTO } from '../DTO/ShowPoliceOfficerDataDTO'
import Contribuinte from '../Models/Contribuinte'
import Pessoa from '../Models/Pessoa'
import Policial from '../Models/Policial'
import FormatContribuinteStatus from '../Utils/FormatContribuinteStatus'
import FormatDataNascimento from '../Utils/FormatDataNascimento'
import FormatEstado from '../Utils/FormatEstado'
import FormatEstadoCivil from '../Utils/FormatEstadoCivil'
import FormatIdade from '../Utils/FormatIdade'
import FormatPolicialPosto from '../Utils/FormatPolicialPosto'
import FormatSexo from '../Utils/FormatSexo'

export default class FormatPoliceOfficerDataService {
  public static async execute(id: number): Promise<ShowPoliceOfficerDataDTO> {
    const policeOfficer = await Pessoa.findBy('id', id)

    if (!policeOfficer) {
      throw new AppErrorException('Id não encontrado', 404)
    }

    const isContribuinte = await Contribuinte.findBy('id', id)

    if (!isContribuinte) {
      throw new AppErrorException('Id não encontrado', 404)
    }

    const policeOfficerData = await Policial.findBy('id', id)

    if (!policeOfficerData) {
      throw new AppErrorException('Id não encontrado', 404)
    }

    const civilStatus = await FormatEstadoCivil.execute(policeOfficer.id_estadocivil)
    const birthday = await FormatDataNascimento.execute(policeOfficer.dtnascimento)
    const gender = await FormatSexo.execute(policeOfficer.sexo)
    const state = await FormatEstado.execute(policeOfficer.id_estado)
    const contributor = await FormatContribuinteStatus.execute(isContribuinte.id)
    const policeStation = await FormatPolicialPosto.execute(policeOfficerData.id_posto)
    const age = await FormatIdade.execute(policeOfficer.dtnascimento)

    return {
      nome: policeOfficer.nome,
      estado: state,
      idade: age,
      dataNascimento: birthday,
      sexo: gender,
      cep: policeOfficer.cep,
      bairro: policeOfficer.bairro,
      logradouro: policeOfficer.logradouro,
      complemento: policeOfficer.complemento,
      numero: policeOfficer.numero,
      telResidencial: policeOfficer.telresidencial,
      telCelular: policeOfficer.telcelular,
      telOutro: policeOfficer.teloutro,
      email: policeOfficer.email,
      cpf: policeOfficer.cpf,
      identidade: policeOfficer.identidade,
      orgaoEmissor: policeOfficer.orgaoemissor,
      ufIdentidade: policeOfficer.ufidentidade,
      cidade: policeOfficer.cidade,
      tipoIdentidade: policeOfficer.tipoidentidade,
      rg: policeOfficer.rg,
      rgdg: policeOfficer.rgdg,
      contribuinte: contributor,
      NumeroSPPrev: policeOfficerData.NumeroSPPrev,
      estadoCivil: civilStatus,
      postoPolicial: policeStation,
    }
  }
}
