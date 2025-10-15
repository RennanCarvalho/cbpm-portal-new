import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class GeneralRequestValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.vanilla

  public schema = schema.create({
    nome: schema.string(),
    reOuMatricula: schema.string(),
    cpf: schema.string(),
    rg: schema.string(),
    rgdg: schema.string.optional(),
    nomeMae: schema.string(),
    nomePai: schema.string(),
    tipoUsuario: schema.string(),
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
    solicitacao: schema.string(),
  })

  public messages = {
    'require': 'Preencha o campo {{ field }}!',
    'nome.required': 'Nome não informado!',
    'reOuMatricula.required': 'RE ou Matrícula não informado!',
    'cpf.required': 'CPF não informado!',
    'rg.required': 'RG não informado!',
    'rgdg.required': 'Dígito do RG não informado!',
    'nomeMae.required': 'Nome da mãe não informado!',
    'nomePai.required': 'Nome do pai não informado!',
    'tipoUsuario.required': 'Tipo do usuário não informado!',
    'logradouro.required': 'Logradouro não informado!',
    'numero.required': 'Numero da residência não informado!',
    'bairro.required': 'Bairro não informado!',
    'cidade.required': 'Cidade não informada!',
    'uf.required': 'UF não informado!',
    'cep.required': 'CEP não informado!',
    'telCelular.required': 'Telefone celular não informado!',
    'email.required': 'E-mail não informado!',
    'solicitacao.required': 'Solicitação não informada!',
  }
}
