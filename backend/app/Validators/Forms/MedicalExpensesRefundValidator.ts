import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class MedicalExpensesRefundValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.vanilla

  public schema = schema.create({
    nome: schema.string(),
    // sexo: schema.number(),
    // dataNascimento: schema.string(),
    cpf: schema.string(),
    // rg: schema.string(),
    // rgdg: schema.string.optional(),
    // parentesco: schema.number(),
    // estadoCivil: schema.number(),
    // nomeMae: schema.string(),
    // nomePai: schema.string(),
    // logradouro: schema.string(),
    // numero: schema.string(),
    // complemento: schema.string.optional(),
    // bairro: schema.string(),
    // cidade: schema.string(),
    // uf: schema.string(),
    // cep: schema.string(),
    // telResidencial: schema.string.optional(),
    // telCelular: schema.string(),
    // telOutro: schema.string.optional(),
    // email: schema.string(),
  })

  public messages = {
    // 'require': 'Preencha o campo {{ field }}!',
    'nome.required': 'Nome não informado!',
    // 'sexo.required': 'Sexo não informado!',
    // 'dataNascimento.required': 'Data de nascimento não informada!',
    'cpf.required': 'CPF não informado!',
    // 'rg.required': 'RG não informado!',
    // 'rgdg.required': 'Dígito do RG não informado!',
    // 'parentesco.required': 'Parentesco não informado!',
    // 'estadoCivil.required': 'Estado civil não informado!',
    // 'nomeMae.required': 'Nome não informado!',
    // 'nomePai.required': 'Nome não informado!',
    // 'logradouro.required': 'Logradouro não informado!',
    // 'numero.required': 'Numero da residência não informado!',
    // 'bairro.required': 'Bairro não informado!',
    // 'cidade.required': 'Cidade não informada!',
    // 'uf.required': 'UF não informado!',
    // 'cep.required': 'CEP não informado!',
    // 'tel_celular.required': 'Telefone celular não informado!',
    // 'email.required': 'E-mail não informado!',
  }
}
