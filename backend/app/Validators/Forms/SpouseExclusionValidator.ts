import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class SpouseExclusionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.vanilla

  public schema = schema.create({
    nome: schema.string(),
    dataNascimento: schema.string(),
    cpf: schema.string(),
    rg: schema.string(),
    rgdg: schema.string(),
    parentesco: schema.number(),
    tipoDocumento: schema.string(),
  })

  public messages = {
    'require': 'Preencha o campo {{ field }}!',
    'nome.required': 'Nome não informado!',
    'dataNascimento.required': 'Data de nascimento não informada!',
    'cpf.required': 'cpf não informado!',
    'rg.required': 'RG não informado!',
    'rgdg.required': 'Dígito do RG não informado!',
    'parentesco.required': 'Telefone celular não informado!',
    'tipoDocumento.required': 'Tipo de documento não informado!',
  }
}
