import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeSave, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import AtualizacaoCadastralPortal from './AtualizacaoCadastralPortal'

export default class UsuarioPortalCBPM extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => AtualizacaoCadastralPortal, {})
  public atualizacaoCadastralPortal: HasOne<typeof AtualizacaoCadastralPortal>

  @column()
  public id_pessoa: number

  @column()
  public id_provedor: number

  @column()
  public cpf: string

  @column()
  public email: string

  @column()
  public categoria: string

  @column({ serializeAs: null })
  public senha: string

  @column()
  public conta_ativada: boolean

  @column.dateTime({ autoCreate: true })
  public data_criacao: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public data_atualizacao: DateTime

  @beforeSave()
  public static async hashPassword(usuario: UsuarioPortalCBPM) {
    if (usuario.$dirty.senha) {
      usuario.senha = await Hash.make(usuario.senha)
    }
  }
}
