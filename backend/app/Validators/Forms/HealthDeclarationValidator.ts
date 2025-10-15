import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class HealthDeclarationValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.vanilla

  public schema = schema.create({
    nome: schema.string(),
    parentesco: schema.number(),
    dataNascimento: schema.string(),
    cpf: schema.string(),
    altura: schema.string(),
    peso: schema.string(),

    nomeContribuinte: schema.string(),
    reContribuinte: schema.string(),
    postoContribuinte: schema.number(),

    pergunta_01: schema.string(),
    pergunta_02: schema.string(),
    pergunta_03: schema.string(),
    pergunta_04: schema.string(),
    pergunta_05: schema.string(),
    pergunta_06: schema.string(),
    pergunta_07: schema.string(),
    pergunta_08: schema.string(),
    pergunta_09: schema.string(),
    pergunta_10: schema.string(),
    pergunta_11: schema.string(),
    pergunta_12: schema.string(),
    pergunta_13: schema.string(),
    pergunta_14: schema.string(),
    pergunta_15: schema.string(),
    pergunta_16: schema.string(),
    pergunta_17: schema.string(),
    pergunta_18: schema.string(),
    pergunta_19: schema.string(),
    pergunta_20: schema.string(),
    pergunta_21: schema.string(),
    pergunta_22: schema.string(),
    pergunta_23: schema.string.optional(),
  })

  public messages = {
    'require': 'Preencha o campo {{ field }}!',
    'nome.required': 'Nome não informado!',
    'parentesco.required': 'Telefone celular não informado!',
    'dataNascimento.required': 'Data de nascimento não informada!',
    'cpf.required': 'CPF não informado!',
    'altura.required': 'Altura não informada!',
    'peso.required': 'Peso não informado!',

    'nomeContribuinte.required': 'Nome do contribuinte não informado!',
    'reContribuinte.required': 'Re do contribuinte informado!',
    'postoContribuinte.required': 'Posto do contribuinte informado!',
  }
}
