import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class DeclaracaoDeSaude extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_atualizacao_cadastral_portal: number

  @column()
  public id_parentesco: number

  @column()
  public id_posto_contribuinte: number

  @column({ columnName: 'local_documentos', serializeAs: 'local_documentos' })
  public local_documentos: string

  @column()
  public nome: string

  @column()
  public dtnascimento: Date

  @column()
  public cpf: string

  @column()
  public altura: string

  @column()
  public peso: string

  @column()
  public nome_contribuinte: string

  @column()
  public re_contribuinte: string

  @column()
  public pergunta_01: string

  @column()
  public pergunta_02: string

  @column()
  public pergunta_03: string

  @column()
  public pergunta_04: string

  @column()
  public pergunta_05: string

  @column()
  public pergunta_06: string

  @column()
  public pergunta_07: string

  @column()
  public pergunta_08: string

  @column()
  public pergunta_09: string

  @column()
  public pergunta_10: string

  @column()
  public pergunta_11: string

  @column()
  public pergunta_12: string

  @column()
  public pergunta_13: string

  @column()
  public pergunta_14: string

  @column()
  public pergunta_15: string

  @column()
  public pergunta_16: string

  @column()
  public pergunta_17: string

  @column()
  public pergunta_18: string

  @column()
  public pergunta_19: string

  @column()
  public pergunta_20: string

  @column()
  public pergunta_21: string

  @column()
  public pergunta_22: string

  @column()
  public pergunta_23: string

  @column.dateTime({ autoCreate: true })
  public data_criacao: DateTime
}
