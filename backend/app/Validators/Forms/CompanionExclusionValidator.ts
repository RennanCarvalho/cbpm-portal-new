import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class CompanionExclusionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.vanilla

  public schema = schema.create({
    nome: schema.string(),
    dataNascimento: schema.string(),
    cpf: schema.string(),
    rg: schema.string(),
    rgdg: schema.string(),
    parentesco: schema.number(),

    nomeTestemunha: schema.string.optional(),
    sexoTestemunha: schema.number.optional(),
    dataNascimentoTestemunha: schema.string.optional(),
    cpfTestemunha: schema.string.optional(),
    rgTestemunha: schema.string.optional(),
    rgdgTestemunha: schema.string.optional(),
    logradouroTestemunha: schema.string.optional(),
    numeroTestemunha: schema.string.optional(),
    complementoTestemunha: schema.string.optional(),
    bairroTestemunha: schema.string.optional(),
    cidadeTestemunha: schema.string.optional(),
    cepTestemunha: schema.string.optional(),
    telTestemunha: schema.string.optional(),
  })

  public messages = {
    'require': 'Preencha o campo {{ field }}!',
    'nome.required': 'Nome não informado!',
    'dataNascimento.required': 'Data de nascimento não informada!',
    'cpf.required': 'CPF não informado!',
    'rg.required': 'RG não informado!',
    'rgdg.required': 'Dígito do RG não informado!',
    'parentesco.required': 'Parentesco não informado!',
  }
}
