import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class InclusionChildrenAndStepchildrenValidator {
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
  })

  public messages = {
    'require': 'Preencha o campo {{ field }}!',
    'nome.required': 'Nome não informado!',
    'sexo.required': 'Sexo não informado!',
    'dtnascimento.required': 'Data de nascimento não informada!',
    'cpf.required': 'cpf não informado!',
    'rg.required': 'RG não informado!',
    'parentesco.required': 'Parentesco não informado!',
    'estadoCivil.required': 'Estado civil não informado!',
    'nome_mae.required': 'Nome da mãe não informado!',
    'nome_pai.required': 'Nome do pai não informado!',
    'tel_celular.required': 'Telefone celular não informado!',
    'email.required': 'E-mail não informado!',
  }
}
