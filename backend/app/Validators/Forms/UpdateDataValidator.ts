import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class UpdateDataValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.vanilla

  public schema = schema.create({
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
    'require': 'Preencha o campo {{ field }}!',
    'logradouro.required': 'Logradouro não informado!',
    'numero.required': 'Numero da residência não informado!',
    'bairro.required': 'Bairro não informado!',
    'cidade.required': 'Cidade não informada!',
    'uf.required': 'UF não informado!',
    'cep.required': 'CEP não informado!',
    'telCelular.required': 'Telefone celular não informado!',
    'email.required': 'E-mail não informado!',
  }
}
