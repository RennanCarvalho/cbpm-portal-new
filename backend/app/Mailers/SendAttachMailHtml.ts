import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail';

type AttachHtml = {
  subject: string;
  html: string;
  path: string;
};

export default class SendAttachMailHtml extends BaseMailer {
  constructor(private attachData: AttachHtml) {
    super();
  }

  public prepare(message: MessageContract) {
    message
      .subject(this.attachData.subject) // Use subject from attachData
      .from('tiamh@cbpm.sp.gov.br', 'TI AMH')
      .to(`${process.env.EMAIL_FORMS}`)
      .to(`${process.env.EMAIL_CREDENTIAL}`)
      
      // Local Tests
      // .to('artur@cbpm.sp.gov.br')
      .html(this.attachData.html) // Use html directly from attachData
      .attach(this.attachData.path); // Use path for attachment
  }
}
