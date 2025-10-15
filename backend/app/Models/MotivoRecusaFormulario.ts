import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class MotivoRecusaFormulario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public motivo: string

  @column.dateTime({ autoCreate: true })
  public data_criacao: DateTime
}
