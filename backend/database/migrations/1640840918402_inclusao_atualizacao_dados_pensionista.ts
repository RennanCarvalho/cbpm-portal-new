import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class InclusaoAtualizacaoDadosPensionista extends BaseSchema {
  protected tableName = 'inclusao_atualizacao_dados_pensionista'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('id_atualizacao_cadastral_portal')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('atualizacao_cadastral_portal')
      table.string('local_documentos').notNullable()

      table.string('nome').notNullable()
      table.string('cpf').notNullable()
      table.string('rg').notNullable()
      table.string('rgdg').notNullable()
      table.date('dtnascimento').notNullable()
      table.string('nome_mae').notNullable()
      table.string('nome_pai').notNullable()

      table.string('logradouro').notNullable()
      table.string('numero').notNullable()
      table.string('complemento')
      table.string('bairro').notNullable()
      table.string('cidade').notNullable()
      table.string('uf').notNullable()
      table.string('cep').notNullable()

      table.string('tel_residencial')
      table.string('tel_celular').notNullable()
      table.string('tel_outro')
      table.string('email').notNullable()

      table.timestamp('data_criacao', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
