import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class SolicitacaoGeral extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_atualizacao_cadastral_portal: number

  @column({ columnName: 'local_documentos', serializeAs: 'local_documentos' })
  public local_documentos: string

  @column()
  public nome: string

  @column()
  public re_ou_matricula: string

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
  public tipo_usuario: string

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

  @column()
  public solicitacao: string

  @column.dateTime({ autoCreate: true })
  public data_criacao: DateTime
}
