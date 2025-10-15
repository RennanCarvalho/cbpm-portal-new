import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Estado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public sigla: string

  @column()
  public descricao: string
}
