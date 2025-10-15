import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema, validator } from '@ioc:Adonis/Core/Validator'

export default class InputValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.vanilla

  public schema = schema.create({
    cpf: schema.string({ trim: true }),
    rg: schema.string({ trim: true }),
    re: schema.string.optional({ trim: true }, [rules.requiredIfNotExists('matricula')]),
    dtnascimento: schema.string({ trim: true }),
    senha: schema.string({ trim: true }, [rules.confirmed('confirmaSenha')]),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.confirmed('confirmaEmail'),
      //rules.unique({ table: 'usuario_portal_cbpm', column: 'email' }),
    ]),
    telCelular: schema.string({ trim: true }),
  })

  public messages = {
    'require': 'Preencha o campo {{ field }}!',
    'cpf.required': 'CPF não informado!',
    'rg.required': 'RG não informado!',
    'dtnascimento.required': 'Data de nascimento não informada!',
    'senha.required': 'Senha não informada!',
    'confirmaSenha.confirmed': 'Confirme a sua senha!',
    'email.required': 'E-mail não informado!',
    'confirmaEmail.confirmed': 'Confirme seu e-mail',
    //  'email.unique': 'E-mail já cadastrado',
    'telCelular.required': 'Telefone celular não informado!',
  }
}
