import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserAccessType from '../../../contracts/Enums/UserAccessType'
import CreateUserService from '../../Services/CreateUserService'
import EmailConfirmationService from '../../Services/EmailConfirmationService'
import ValidateDataService from '../../Services/ValidateDataService'
import DependentValidator from '../../Validators/DependentValidator'

export default class TestController {
  public async create({ request, response }: HttpContextContract) {
    // // Valida os dados do request
    // await request.validate(DependentValidator)

    // const person = request.body()

    // // Busca o dependente
    // const dependent = await ValidateDataService.findByCPF(person.cpf)

    // if (!dependent) {
    //   return response.status(400).json({ message: 'CPF não encontrado' })
    // }

    // // Verifica se o usuário já está cadastrado
    // await ValidateDataService.checkRegisteredUser(dependent.id)

    // // Verifica se o RE existe
    // const contributor = await ValidateDataService.findByRE(person.reDoContribuinte)

    // // Verifica se o dependente é um beneficiario
    // await ValidateDataService.isBeneficiary(dependent.id, contributor.id)

    // // Verifica se o provedor informado é um contribuinte
    // await ValidateDataService.isContribuinte(contributor.id)

    // // Verifica se o dependente está ativo
    // await ValidateDataService.isActived(dependent.id)

    // // Verifica se o RG é valido
    // await ValidateDataService.isValidRG(person.rg)

    // // Verifica se o e-mail já está cadastrado
    // await ValidateDataService.isUsedEmail(person.email)

    // // Verifica se o e-mail é valido
    // await ValidateDataService.isValidEmail(person.email)

    // // Verifica se a data de nascimento é valida
    // await ValidateDataService.isValidBirthdate(person.dtnascimento, dependent.dtnascimento)

    // // Cria um usuário
    // const user = await CreateUserService.Create({
    //   id_pessoa: dependent.id,
    //   id_provedor: contributor.id,
    //   cpf: person.cpf,
    //   email: person.email, 
    //   senha: person.senha,
    //   categoria: UserAccessType.DEPENDENT,
    // })

    // Envia um e-mail com o link de validação da conta
    await EmailConfirmationService.execute('artur@cbpm.sp.gov.br')

    // Deletar esse arquivo antes de subir 
    // return response.json(user)
  }
}
