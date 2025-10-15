import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'

type Attach = {
  name: string
  cpf: string
  form: string
  path: string
}

export default class SendAttachMail extends BaseMailer {
  constructor(private attachData: Attach) {
    super()
  }

  public prepare(message: MessageContract) {
    message
      .subject(`Formulário Portal CBPM - ${this.attachData.form}`)
      .from('tiamh@cbpm.sp.gov.br', 'TI AMH')
      .to(`${process.env.EMAIL_FORMS}`)
      .to(`${process.env.EMAIL_CREDENTIAL}`)
      
      // Local Tests
      // .to('artur@cbpm.sp.gov.br')
      .htmlView('emails/attach-data', {
        message: this.attachData,
      })
      .attach(this.attachData.path)
  }
}
