import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class PresencialController {
  public async create({ request, response }: HttpContextContract) {
    const person = request.body()
    const user = ''// TODO await Database.rawQuery(`sdxfsdfsdf ${}`)
    return response.json(user)
  }
}
