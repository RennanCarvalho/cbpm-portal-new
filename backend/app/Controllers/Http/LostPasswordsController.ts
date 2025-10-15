import Redis from '@ioc:Adonis/Addons/Redis'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import AppErrorException from 'App/Exceptions/AppErrorException'
import UsuarioPortalCBPM from '../../Models/UsuarioPortalCBPM'
import RecoveryPasswordService from '../../Services/RecoveryPasswordService'

export default class LostPasswordsController {
  public async recoveryPassword({ request, response }: HttpContextContract) {
    await RecoveryPasswordService.execute(request.body().email) // {{{

    return response.send(
      'Caso o e-mail esteja cadastrado no nosso banco de dados, um e-mail de recuperação de senha será enviado'
    ) // }}}
  }

  public async resetPassword({ request }: HttpContextContract) {
    const { id, token, senha } = request.body() // {{{

    const confirmPassword = schema.create({
      senha: schema.string({}, [rules.confirmed('confirmaSenha')]),
    })

    await request.validate({ schema: confirmPassword })

    const tokenRedis = await Redis.get(id)

    if (tokenRedis !== token) {
      throw new AppErrorException('Token de redefinição de senha inválido.')
    }

    const usuario = await UsuarioPortalCBPM.findByOrFail('id', id)
    usuario.senha = senha

    await usuario.save()

    await Redis.del(id)
  } // }}}

  public async confirm({ request, response, params }: HttpContextContract) { 
    if (request.hasValidSignature()) {
      console.log("hasconfirm: ", request.hasValidSignature())
      await UsuarioPortalCBPM.query().where('email', params.email).update({ conta_ativada: true })
      return response.redirect(`http://${process.env.APPLICATION_URL}/login`)
      // return response.redirect(`http://${process.env.APPLICATION_URL}:${process.env.APPLICATION_PORT_FRONTEND}/login`)
    }
    console.log("hasntconfirm: ", request.hasValidSignature())
    await UsuarioPortalCBPM.query().where('email', params.email).delete()
    return response.status(400).json({ Erro: 'O token de acesso está inválido ou expirado. Por favor, faça o recadastro.' })
  }

  public async changePassword({ request, auth }: HttpContextContract) {
  const { senha } = request.body()

  const confirmPassword = schema.create({
    senha: schema.string({}, [rules.confirmed('confirmaSenha')]),
  })
  await request.validate({ schema: confirmPassword })

  await auth.use('api').authenticate()
  const usuario = auth.use('api').user!

  usuario.senha = senha
  await usuario.save()
}
}
