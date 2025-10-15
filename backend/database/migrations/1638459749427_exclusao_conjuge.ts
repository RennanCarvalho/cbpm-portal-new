import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ExclusaoConjuge extends BaseSchema {
  protected tableName = 'exclusao_conjuge'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('id_atualizacao_cadastral_portal')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('atualizacao_cadastral_portal')
      table.integer('id_parentesco').notNullable().unsigned().references('id').inTable('Parentesco')
      table.string('local_documentos').notNullable()
      table.string('tipo_documento').notNullable()
      table.string('nome').notNullable()
      table.date('dtnascimento').notNullable()
      table.string('cpf').notNullable()
      table.string('rg').notNullable()
      table.string('rgdg').notNullable()

      table.timestamp('data_criacao', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
