import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema, validator } from '@ioc:Adonis/Core/Validator'

export default class PensionerValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.vanilla

  public schema = schema.create({
    cpf: schema.string({ trim: true }),
    // rg: schema.string({ trim: true }),
    matricula: schema.string({ trim: true }),
    dtnascimento: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [rules.email(), rules.confirmed('confirmaEmail')]),
    senha: schema.string({ trim: true }, [
      rules.regex(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,30}$/),
      rules.confirmed('confirmaSenha'),
    ]),
    telCelular: schema.string({ trim: true }),
  })

  public messages = {
    require: 'Preencha o campo {{ field }}!',
  }
}
