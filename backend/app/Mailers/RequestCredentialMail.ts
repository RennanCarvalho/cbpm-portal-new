import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'

type Message = {
  nome: string
  estado: string
  idade: string
  dataNascimento: string
  sexo: string
  cep: string
  bairro: string
  logradouro: string
  complemento: string
  numero: string
  telResidencial: string
  telCelular: string
  telOutro: string
  email: string
  cpf: string
  orgaoEmissor: string
  ufIdentidade: string
  cidade: string
  tipoIdentidade: string
  rg: string
  rgdg: string
  estadoCivil: string
}

export default class RequestCredentialMail extends BaseMailer {
  constructor(private formData: Message) {
    super()
  }

  public prepare(message: MessageContract) {
    message
      .subject('Solicitação de Credencial - Portal CBPM')
      .from('tiamh@cbpm.sp.gov.br', 'TI AMH')
      .to(`${process.env.EMAIL_FORMS}`)
      .to(`${process.env.EMAIL_CREDENTIAL}`)
      .htmlView('emails/request-credential', {
        message: this.formData,
      })
  }
}
