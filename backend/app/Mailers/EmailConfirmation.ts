import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'
import View from '@ioc:Adonis/Core/View'
import mjml from 'mjml'

type ConfirmationData = {
  confirmationUrl: string
  email: string
}

export default class EmailConfirmation extends BaseMailer {
  constructor(private data: ConfirmationData) {
    super()
  }

  public html = mjml(
    View.renderSync('emails/email-confirmation', { url: this.data.confirmationUrl })
  ).html

  public prepare(message: MessageContract) {
    message
      .subject('Confirmação da conta Portal CBPM')
      .from('tiamh@cbpm.sp.gov.br', 'TI AMH')
      .to(`${this.data.email}`)
      // Local Tests
      // .to('artur@cbpm.sp.gov.br')
      .html(this.html)
  }
}
