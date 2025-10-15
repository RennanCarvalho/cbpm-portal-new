import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EstadoCivil extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string
}
