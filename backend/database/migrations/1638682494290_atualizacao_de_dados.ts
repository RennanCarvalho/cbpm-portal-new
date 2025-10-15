import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AtualizacaoDeDados extends BaseSchema {
  protected tableName = 'atualizacao_de_dados'

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

      table.string('logradouro').notNullable()
      table.string('numero').notNullable()
      table.string('complemento')
      table.string('bairro').notNullable()
      table.string('cidade').notNullable()
      table.string('uf').notNullable()
      table.string('cep').notNullable()
      table.string('email').notNullable()

      table.string('tel_residencial')
      table.string('tel_celular').notNullable()
      table.string('tel_outro')

      table.timestamp('data_criacao', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
