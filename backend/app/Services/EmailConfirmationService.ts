import Route from '@ioc:Adonis/Core/Route'
import EmailConfirmation from '../Mailers/EmailConfirmation'

type Success = {
  success: true
}

export default class EmailConfirmationService {
  public static async execute(email: string): Promise<Success> {
    const url = Route.makeSignedUrl('verifyEmail', { params: { email: email }, expiresIn: '1days' })

    const confirmationUrl = `https://${process.env.APPLICATION_URL}${url}`

    // Local Tests
    // const confirmationUrl = `http://${process.env.APPLICATION_URL}:${process.env.APPLICATION_PORT_BACKEND}${url}`

    const confirmationData = { confirmationUrl, email }

    await new EmailConfirmation(confirmationData).sendLater()
    .then(() => {
      console.log('Email sent successfully: ', confirmationUrl," ", confirmationData)
    })
    .catch((error) => {
      console.error('Error sending email:', error)
    })
    return { success: true }
  }
}
