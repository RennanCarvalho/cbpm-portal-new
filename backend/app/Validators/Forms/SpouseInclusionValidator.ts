
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class SpouseInclusionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.vanilla

  public schema = schema.create({
    nome: schema.string(),
    sexo: schema.number(),
    dataNascimento: schema.string(),
    cpf: schema.string(),
    rg: schema.string(),
    rgdg: schema.string(),
    nomeMae: schema.string(),
    nomePai: schema.string(),
    telResidencial: schema.string.optional(),
    telCelular: schema.string(),
    telOutro: schema.string.optional(),
    email: schema.string(),
  })

  public messages = {
    require: 'Preencha o campo {{ field }}!',
  }
}
