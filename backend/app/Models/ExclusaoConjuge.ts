import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class ExclusaoConjuge extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_atualizacao_cadastral_portal: number

  @column()
  public id_parentesco: number

  @column({ columnName: 'local_documentos', serializeAs: 'local_documentos' })
  public local_documentos: string

  @column()
  public tipo_documento: string

  @column()
  public nome: string

  @column()
  public dtnascimento: Date

  @column()
  public cpf: string

  @column()
  public rg: string

  @column()
  public rgdg: string

  @column.dateTime({ autoCreate: true })
  public data_criacao: DateTime
}
