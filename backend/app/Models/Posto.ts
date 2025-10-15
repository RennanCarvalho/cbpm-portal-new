import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Posto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @column()
  public Infojud: string

  @column()
  public ArquivoCBPM: string

  @column()
  public Categoria: string
}
