import Database from '@ioc:Adonis/Lucid/Database'
import AppErrorException from 'App/Exceptions/AppErrorException'
import FormatInvalidez from 'App/Utils/FormatInvalidez'
import FormatStatus from 'App/Utils/FormatStatus'
import { ShowShortagesDataDTO } from '../DTO/ShowShortagesDataDTO'
import Beneficiario from '../Models/Beneficiario'
import Contribuinte from '../Models/Contribuinte'
import Pessoa from '../Models/Pessoa'
import Policial from '../Models/Policial'
import FormatDataNascimento from '../Utils/FormatDataNascimento'
import FormatIdade from '../Utils/FormatIdade'
import FormatParentesco from '../Utils/FormatParentesco'
import FormatPolicialPosto from '../Utils/FormatPolicialPosto'
import FormatSexo from '../Utils/FormatSexo'

export default class FormatShortagesDataService {
  public static async execute(id: number): Promise<ShowShortagesDataDTO> {
    // Busca os dados do dependente ou pensionista
    const user = await Pessoa.findBy('id', id)

    if (!user) {
      throw new AppErrorException('Usuário não encontrado', 404)
    }

    // Formata o sexo, data de nascimento e idade
    const gender = await FormatSexo.execute(user.sexo)
    const birthday = await FormatDataNascimento.execute(user.dtnascimento)
    const age = await FormatIdade.execute(user.dtnascimento)

    // Busca os dados do beneficiário
    const beneficiary = await Beneficiario.findBy('id', id)

    if (!beneficiary) {
      throw new AppErrorException('Beneficiario não encontrado', 404)
    }

    // Formata o parentesco, invalidez e status do cadastro
    const kinship = await FormatParentesco.execute(beneficiary.id_parentesco)
    const invalid = await FormatInvalidez.execute(beneficiary.invalido)
    const status = await FormatStatus.execute(beneficiary.id_status)

    // Busca o código da credencial
    const findRegistration = await Database.from('Carteirinha')
      .select('codigo')
      .where('id_beneficiario', id)

    // Pega sempre o último resultado, pois pode haver
    // mais de um código da credencial
    const registration = findRegistration[findRegistration.length - 1]

    // Busca os dados do contribuinte
    const contributor = await Pessoa.findBy('id', beneficiary.id_policial)

    if (!contributor) {
      throw new AppErrorException('Contribuinte não encontrado', 404)
    }

    // Busca os dados policiais do contribuinte
    const contributorPoliceData = await Policial.findBy('id', beneficiary.id_policial)

    if (!contributorPoliceData) {
      throw new AppErrorException('Policial não encontrado', 404)
    }

    // Formata o posto do polícial
    const policeRank = await FormatPolicialPosto.execute(contributorPoliceData.id_posto)

    // Verifica se o polícial é um contribuinte,
    // ele somente é um contribuinte caso retorne o id
    const isContributor = await Contribuinte.findBy('id', beneficiary.id_policial)

    return {
      nome: user.nome,
      cpf: user.cpf,
      status,
      nomeSocial: user.nome,
      sexo: gender,
      dataNascimento: birthday,
      idade: age,
      parentesco: kinship,
      invalido: invalid,
      credencial: registration.codigo.trim(),
      nomeContribuinte: contributor.nome,
      re: contributor.identidade,
      posto: policeRank,
      contribuinte: isContributor,
    }
  }
}
