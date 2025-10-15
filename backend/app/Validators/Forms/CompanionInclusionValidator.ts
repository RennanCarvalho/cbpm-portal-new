import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class ConjugalInclusionValidator {
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

    nomeTestemunha: schema.string(),
    sexoTestemunha: schema.number(),
    dataNascimentoTestemunha: schema.string(),
    cpfTestemunha: schema.string(),
    rgTestemunha: schema.string(),
    rgdgTestemunha: schema.string(),
    logradouroTestemunha: schema.string(),
    numeroTestemunha: schema.string(),
    complementoTestemunha: schema.string.optional(),
    bairroTestemunha: schema.string(),
    cidadeTestemunha: schema.string(),
    cepTestemunha: schema.string(),
    telTestemunha: schema.string(),
  })

  public messages = {
    require: 'Preencha o campo {{ field }}!',
  }
}
