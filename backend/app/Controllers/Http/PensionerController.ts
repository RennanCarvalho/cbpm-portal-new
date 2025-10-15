import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserService from 'App/Services/CreateUserService'
import UserAccessType from '../../../contracts/Enums/UserAccessType'
import EmailConfirmationService from '../../Services/EmailConfirmationService'
import ValidateDataService from '../../Services/ValidateDataService'
import PensionerValidator from '../../Validators/PensionerValidator'

export default class PensionerController {
  public async create({ request, response }: HttpContextContract) {
    // Valida os dados do request
    await request.validate(PensionerValidator)

    const person = request.body()
    // Busca o pensionista
    const pensioner = await ValidateDataService.findByCPF(person.cpf)

    // Verifica se o usuário já está cadastrado
    await ValidateDataService.checkRegisteredUser(pensioner.id)

    // Verifica se o RG é valido
    // await ValidateDataService.isValidRG(person.rg)

    // Verifica se o e-mail já está cadastrado
    await ValidateDataService.isUsedEmail(person.email)

    // Verifica se o e-mail é valido
    await ValidateDataService.isValidEmail(person.email)

    // Verifica se a matrícula é valida
    const policeOfficerId = await ValidateDataService.isValidRegistration(
      pensioner.id,
      person.matricula
    )

    // Verifica se o beneficio do pensionista está ativo
    await ValidateDataService.isActived(pensioner.id)

    // Verifica se a data de nascimento é valida
    await ValidateDataService.isValidBirthdate(person.dtnascimento, pensioner.dtnascimento)

    // Cria um usuário
    const user = await CreateUserService.Create({
      id_pessoa: pensioner.id,
      id_provedor: policeOfficerId,
      cpf: person.cpf,
      email: person.email,
      senha: person.senha,
      categoria: UserAccessType.PENSIONER,
    })

    // Envio um e-mail com o link de validação da conta
    await EmailConfirmationService.execute(person.email)

    return response.json(user)
  }
}
