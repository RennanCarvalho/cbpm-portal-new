import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class FormulariosPortal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome_formulario: string

  @column.dateTime({ autoCreate: true })
  public data_criacao: DateTime
}
