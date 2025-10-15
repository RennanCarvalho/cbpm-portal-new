import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class ExclusaoDeCompanheiro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_atualizacao_cadastral_portal: number

  @column()
  public id_parentesco: number

  @column({ columnName: 'local_documentos', serializeAs: 'local_documentos' })
  public local_documentos: string

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

  @column()
  public nome_testemunha: string

  @column()
  public sexo_testemunha: number

  @column()
  public dtnascimento_testemunha: Date | undefined

  @column()
  public cpf_testemunha: string

  @column()
  public rg_testemunha: string

  @column()
  public rgdg_testemunha: string

  @column()
  public logradouro_testemunha: string

  @column()
  public numero_testemunha: string

  @column()
  public complemento_testemunha: string

  @column()
  public bairro_testemunha: string

  @column()
  public cidade_testemunha: string

  @column()
  public cep_testemunha: string

  @column()
  public tel_testemunha: string

  @column.dateTime({ autoCreate: true })
  public data_criacao: DateTime
}
