import AppErrorException from '../Exceptions/AppErrorException'
import Beneficiario from '../Models/Beneficiario'
import Contribuinte from '../Models/Contribuinte'
import Pessoa from '../Models/Pessoa'
import UsuarioPortalCBPM from '../Models/UsuarioPortalCBPM'

type Success = {
  success: true
}

export default class ValidateDataService {
  public static async findByCPF(cpf: string): Promise<Pessoa> {
    const person = await Pessoa.findBy('cpf', cpf)

    if (!person) {
      throw new AppErrorException('CPF não encontrado', 404)
    }

    return person
  }

  public static async findById(id: number): Promise<Pessoa> {
    const person = await Pessoa.findBy('id', id)

    if (!person) {
      throw new AppErrorException('Id não encontrado', 404)
    }

    return person
  }

  public static async checkRegisteredUser(id: number): Promise<void> {
    if (await UsuarioPortalCBPM.findBy('id_pessoa', id)) {
      throw new AppErrorException('Usuário já cadastrado', 400)
    }
  }

  public static async isContribuinte(id: number): Promise<Success> {
    if (!(await Contribuinte.findBy('id', id))) {
      throw new AppErrorException('Usuário não é um contribuinte', 400)
    }

    return { success: true }
  }

  public static async isValidRG(RGPerson: string): Promise<Success> {
    const isValid = await Pessoa.findBy('rg', RGPerson)

    if (!isValid) {
      throw new AppErrorException('RG inválido', 404)
    }

    return { success: true }
  }

  public static async isValidEmail(emailPerson: string): Promise<Success> {
    const isValid = await Pessoa.findBy('email', emailPerson)

    if (!isValid) {
      throw new AppErrorException('E-mail incorreto', 400)
    }

    return { success: true }
  }

  public static async isUsedEmail(emailPerson: string): Promise<Success> {
    const isValid = await UsuarioPortalCBPM.findBy('email', emailPerson)

    if (isValid) {
      throw new AppErrorException('E-mail já cadastrado', 400)
    }

    return { success: true }
  }

  public static async isValidRE(REContributor: string): Promise<Success> {
    const isValid = await Pessoa.findBy('identidade', REContributor)

    if (!isValid) {
      throw new AppErrorException('RE inválido', 400)
    }

    return { success: true }
  }

  public static async findByRE(REContributor: string): Promise<Pessoa> {
    const contributor = await Pessoa.findBy('identidade', REContributor)

    if (!contributor) {
      throw new AppErrorException('RE inválido', 404)
    }

    return contributor
  }

  public static async isValidRegistration(
    idBeneficiary: number,
    personRegistration: string
  ): Promise<number> {
    const beneficiary = await Beneficiario.findBy('id_pessoa', idBeneficiary)

    if (!beneficiary || beneficiary.matricula !== personRegistration) {
      throw new AppErrorException('Matrícula inválida', 400)
    }

    return beneficiary.id_policial
  }

  public static async isActived(idBeneficiary: number): Promise<Success> {
    const beneficiary = await Beneficiario.findBy('id_pessoa', idBeneficiary)

    if (!beneficiary || beneficiary.id_status === 2) {
      throw new AppErrorException('Usuário inativo', 400)
    }

    return { success: true }
  }

  public static async isValidBirthdate(
    personBirthdate: string,
    contributorBirthdate: Date
  ): Promise<Success> {
    const formattedContributorBirthdate = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'UTC',
    }).format(contributorBirthdate)

    if (personBirthdate !== formattedContributorBirthdate) {
      throw new AppErrorException('Data de nascimento incorreta', 400)
    }

    return { success: true }
  }

  public static async isBeneficiary(
    beneficiaryId: number,
    contributorId: number
  ): Promise<Success> {
    const beneficiary = await Beneficiario.findBy('id_pessoa', beneficiaryId)

    // Verifica se o id do contribuinte é o mesmo que
    // se encontra no id_policial na tabela beneficiario
    // caso sim, a pessoa é uma dependente desse policial,
    // caso não, não é um dependente
    if (!beneficiary || beneficiary.id_policial !== contributorId) {
      throw new AppErrorException('Pessoa não tem vinculo com o contribuinte', 400)
    }

    return { success: true }
  }
}
