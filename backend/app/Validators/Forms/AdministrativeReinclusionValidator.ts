import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class AdministrativeReinclusionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.vanilla

  public schema = schema.create({
    nome: schema.string(),
    reOuMatricula: schema.string(),
    cpf: schema.string(),
    tipoContribuinte: schema.string(),
    postoContribuinte: schema.number(),

    logradouro: schema.string(),
    numero: schema.string(),
    complemento: schema.string.optional(),
    bairro: schema.string(),
    cidade: schema.string(),
    uf: schema.string(),
    cep: schema.string(),
    telResidencial: schema.string.optional(),
    telCelular: schema.string(),
    telOutro: schema.string.optional(),
    email: schema.string(),
  })

  public messages = {
    require: 'Preencha o campo {{ field }}!',
  }
}
