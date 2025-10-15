import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'

type Message = {
  email: string
  nome: string
  cpf: string
  telResidencial?: string
  reOuMatricula?: string
  telCelular: string
  motivo: string
  mensagem: string
}

export default class ContactUsMail extends BaseMailer {
  constructor(private formData: Message) {
    super()
  }

  public prepare(message: MessageContract) {
    message
      .subject('Fale Conosco - Portal CBPM')
      .from('tiamh@cbpm.sp.gov.br', 'TI AMH')
      .to(`${this.formData.email}`)
      .to(`${process.env.EMAIL_FORMS}`)
      .htmlView('emails/contact-us', {
        message: this.formData,
      })
  }
}
