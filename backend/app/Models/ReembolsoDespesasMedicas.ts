import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ReembolsoDespesasMedicas extends BaseModel {

  @column({ columnName: 'local_documentos', serializeAs: 'local_documentos' })
  public local_documentos: string
  
  @column()
  public banco: number
  
  @column()
  public agencia: number

  @column()
  public conta: number

  @column()
  public valor_reembolso: number

  @column()
  public nome_paciente: string
  
  @column()
  public cpf_paciente: string

  @column()
  public razao_estabelecimento: string
  
  @column()
  public cnpj_estabelecimento: string

  @column()
  public endereco_estabelecimento: string

  @column()
  public numero_estabelecimento: number

  @column()
  public complemento_estabelecimento: number

  @column()
  public cnes_estabelecimento: string

  @column()
  public cidade: string

  @column()
  public uf_estabelecimento: string
  @column()
  public cep_estabelecimento: string
}
