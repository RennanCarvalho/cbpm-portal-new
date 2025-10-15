import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AtualizacaoCadastralPortal extends BaseSchema {
  protected tableName = 'atualizacao_cadastral_portal'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('id_usuario_portal_cbpm')
        .unsigned()
        .references('id')
        .inTable('usuario_portal_cbpm')
      table
        .integer('nome_formulario')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('formularios_portal')
      table.boolean('aprovado')
      table.string('motivo')
      table.string('observacao')
      table.timestamp('data_criacao', { useTz: true }).notNullable()
      table.timestamp('data_atualizacao', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
