import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Policial extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_posto: number

  @column()
  public id_status: number

  @column({ columnName: 'NumeroSPPrev', serializeAs: 'NumeroSPPrev' })
  public NumeroSPPrev: bigint
}
