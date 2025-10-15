import Redis from '@ioc:Adonis/Addons/Redis'
import crypto from 'crypto'
import RecoveryPasswordMail from '../Mailers/RecoveryPasswordMail'
import UsuarioPortalCBPM from '../Models/UsuarioPortalCBPM'

type Success = {
  success: true
}

export default class RecoveryPasswordService {
  public static async execute(email: string): Promise<Success | void> {
    const isUser = await UsuarioPortalCBPM.findBy('email', email)

    if (isUser) {
      const token = crypto.randomBytes(48).toString('hex')

      const { id, email } = isUser

      const recoveryUrl = `http://${process.env.APPLICATION_URL}/reset/${id}/${token}`

      // Local Tests
      // const recoveryUrl = `http://${process.env.APPLICATION_URL}:${process.env.APPLICATION_PORT_FRONTEND}/reset/${id}/${token}`

      await Redis.set(id.toString(), token)

      await Redis.expire(id.toString(), 3600)

      const recoveryData = {
        recoveryUrl,
        email,
      }

      await new RecoveryPasswordMail(recoveryData).sendLater()

      return { success: true }
    }
  }
}
