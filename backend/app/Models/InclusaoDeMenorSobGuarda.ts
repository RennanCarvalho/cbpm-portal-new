import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class InclusaoDeMenorSobGuarda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_atualizacao_cadastral_portal: number

  @column()
  public id_parentesco: number

  @column()
  public id_estado_civil: number

  @column({ columnName: 'local_documentos', serializeAs: 'local_documentos' })
  public local_documentos: string

  @column()
  public tipo_documento: string

  @column()
  public nome: string

  @column()
  public sexo: number

  @column()
  public dtnascimento: Date

  @column()
  public cpf: string

  @column()
  public rg: string

  @column()
  public rgdg: string

  @column()
  public nome_mae: string

  @column()
  public nome_pai: string

  @column()
  public tel_residencial: string

  @column()
  public tel_celular: string

  @column()
  public tel_outro: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public data_criacao: DateTime
}
