import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import UsuarioPortalCBPM from './UsuarioPortalCBPM'

export default class AtualizacaoCadastralPortal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => UsuarioPortalCBPM)
  public usuarioPortalCBPM: BelongsTo<typeof UsuarioPortalCBPM>

  @column()
  public id_usuario_portal_cbpm: number

  @column()
  public nome_formulario: number

  @column()
  public aprovado: boolean

  @column()
  public motivo: string

  @column()
  public observacao: string

  @column.dateTime({ autoCreate: true })
  public data_criacao: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public data_atualizacao: DateTime
}
