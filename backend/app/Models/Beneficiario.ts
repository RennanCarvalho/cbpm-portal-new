import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Beneficiario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_pessoa: number

  @column()
  public id_parentesco: number

  @column()
  public id_policial: number

  @column()
  public id_status: number

  @column()
  public matricula: string

  @column()
  public nome_carteirinha: string

  @column()
  public invalido: number

  @column()
  public pensionista: number

  @column()
  public universitario: string

  @column()
  public certidao_nasc: string

  @column()
  public invalidezDefinitiva: boolean

  @column()
  public img_QrCode: number
}
