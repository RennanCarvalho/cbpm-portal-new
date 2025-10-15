import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema, validator } from '@ioc:Adonis/Core/Validator'

export default class ContactUsMailValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.vanilla

  public schema = schema.create({
    email: schema.string({ trim: true }, [rules.email()]),
    nome: schema.string({ trim: true }),
    cpf: schema.string({ trim: true }),
    telResidencial: schema.string.optional({ trim: true }),
    reOuMatricula: schema.string.optional({ trim: true }),
    telCelular: schema.string({ trim: true }),
    motivo: schema.string({ trim: true }),
    mensagem: schema.string({ trim: true }),
  })

  public messages = {
    require: 'Preencha o campo {{ field }}!',
  }
}
