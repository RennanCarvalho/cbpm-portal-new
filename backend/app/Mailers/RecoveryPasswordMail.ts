import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'
import View from '@ioc:Adonis/Core/View'
import mjml from 'mjml'

type RecoveryData = {
  recoveryUrl: string
  email: string
}

export default class RecoveryPasswordMail extends BaseMailer {
  constructor(private data: RecoveryData) {
    super()
  }

  public html = mjml(View.renderSync('emails/recovery-password', { url: this.data.recoveryUrl }))
    .html

  public async prepare(message: MessageContract) {
    message
      .subject('Recuperação da Senha Portal CBPM')
      .from('tiamh@cbpm.sp.gov.br', 'TI AMH')
      .to(this.data.email)
      // Local Tests
      // .to('artur@cbpm.sp.gov.br')
      .html(this.html)
  }
}
