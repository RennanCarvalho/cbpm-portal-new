import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserAccessType from '../../../contracts/Enums/UserAccessType'
import CreateUserService from '../../Services/CreateUserService'
import EmailConfirmationService from '../../Services/EmailConfirmationService'
import ValidateDataService from '../../Services/ValidateDataService'
import PoliceOfficerValidator from '../../Validators/PoliceOfficerValidator'

export default class PolicialController {
  public async create({ request, response }: HttpContextContract) {
    // Valida os dados do request
    request;
    await request.validate(PoliceOfficerValidator)

    const policeOfficer = request.body()

    // Busca o policial
    const contributor = await ValidateDataService.findByCPF(policeOfficer.cpf)

    // Verifica se o usuário já está cadastrado
    await ValidateDataService.checkRegisteredUser(contributor.id)

    // Verifica se o provedor informado é um contribuinte
    await ValidateDataService.isContribuinte(contributor.id)

    // Verifica se o RG é valido
    // await ValidateDataService.isValidRG(policeOfficer.rg)

    // Verifica se o e-mail é valido
    await ValidateDataService.isValidEmail(policeOfficer.email)

    // Verifica se o e-mail já está cadastrado
    await ValidateDataService.isUsedEmail(policeOfficer.email)

    // Verifica se o RE é valido
    await ValidateDataService.isValidRE(policeOfficer.re)

    // Verifica se a data de nascimento é valida
    await ValidateDataService.isValidBirthdate(policeOfficer.dtnascimento, contributor.dtnascimento);
    

    // Cria um usuário
    const user = await CreateUserService.Create({
      id_pessoa: contributor.id,
      id_provedor: contributor.id,
      cpf: policeOfficer.cpf,
      email: policeOfficer.email,
      senha: policeOfficer.senha,
      categoria: UserAccessType.CONTRIBUTOR,
    })

    await EmailConfirmationService.execute(policeOfficer.email)

    return response.json(user)
  }
}
