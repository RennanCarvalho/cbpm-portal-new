import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FormulariosPortal extends BaseSchema {
  protected tableName = 'formularios_portal'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome_formulario').notNullable()
      table.timestamp('data_criacao', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
