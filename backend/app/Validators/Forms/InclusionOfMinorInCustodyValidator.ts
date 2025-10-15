import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class InclusionOfMinorInCustodyValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.vanilla

  public schema = schema.create({
    nome: schema.string(),
    sexo: schema.number(),
    dataNascimento: schema.string(),
    cpf: schema.string(),
    rg: schema.string(),
    rgdg: schema.string.optional(),
    parentesco: schema.number(),
    estadoCivil: schema.number(),
    nomeMae: schema.string(),
    nomePai: schema.string(),
    telResidencial: schema.string.optional(),
    telCelular: schema.string(),
    telOutro: schema.string.optional(),
    email: schema.string(),
    tipoDocumento: schema.string(),
  })

  public messages = {
    'require': 'Preencha o campo {{ field }}!',
    'nome.required': 'Nome não informado!',
    'sexo.required': 'Sexo não informado!',
    'dtnascimento.required': 'Data de nascimento não informada!',
    'cpf.required': 'CPF não informado!',
    'rg.required': 'RG não informado!',
    'parentesco.required': 'Parentesco não informado!',
    'estadoCivil.required': 'Estado civil não informado!',
    'nomeMae.required': 'Nome da mãe não informado!',
    'nomePai.required': 'Nome do pai não informado!',
    'telCelular.required': 'Telefone celular não informado!',
    'email.required': 'E-mail não informado!',
    'tipoDocumento.required': 'Tipo de documentação juntada não informada!',
  }
}
