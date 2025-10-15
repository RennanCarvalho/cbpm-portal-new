import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Contribuinte from '../Models/Contribuinte'
import Policial from './Policial'

export default class Pessoa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Policial, {
    foreignKey: 'id',
  })
  public Policial: BelongsTo<typeof Policial>

  @belongsTo(() => Contribuinte, {
    foreignKey: 'id',
  })
  public Contribuinte: BelongsTo<typeof Contribuinte>

  @column()
  public id_estadocivil: number

  @column()
  public id_estado: number

  @column()
  public nome: string

  @column()
  public dtnascimento: Date

  @column()
  public sexo: number

  @column()
  public cep: string

  @column()
  public bairro: string

  @column()
  public logradouro: string

  @column()
  public tipologradouro: string

  @column()
  public complemento: string

  @column()
  public numero: string

  @column()
  public telresidencial: string

  @column()
  public telcelular: string

  @column()
  public teloutro: string

  @column()
  public email: string

  @column()
  public cpf: string

  @column()
  public rg: string

  @column()
  public rgdg: string

  @column()
  public identidade: string

  @column()
  public orgaoemissor: string

  @column()
  public ufidentidade: string

  @column()
  public cidade: string

  @column()
  public tipoidentidade: string
}
