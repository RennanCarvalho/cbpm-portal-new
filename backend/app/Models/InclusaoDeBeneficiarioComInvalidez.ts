import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class InclusaoDeBeneficiarioComInvalidez extends BaseModel {
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
  public invalidez: string

  @column()
  public invalidez_definitiva: string

  @column()
  public cid: string

  @column()
  public logradouro: string

  @column()
  public numero: string

  @column()
  public complemento: string

  @column()
  public bairro: string

  @column()
  public cidade: string

  @column()
  public uf: string

  @column()
  public cep: string

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
