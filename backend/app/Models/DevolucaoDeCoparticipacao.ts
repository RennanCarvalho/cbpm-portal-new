import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DevolucaoDeCoparticipacao extends BaseModel {

  @column({ columnName: 'local_documentos', serializeAs: 'local_documentos' })
  public local_documentos: string
  
  @column()
  public nome_paciente: string
  
  @column()
  public cpf_paciente: string

  @column()
  public data: string
  @column()
  public atendimento: string
  @column()
  public mes_desconto: string
  @column()
  public valor: string
}
