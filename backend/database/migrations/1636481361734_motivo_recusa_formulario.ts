import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MotivoRecusaFormulario extends BaseSchema {
  protected tableName = 'motivo_recusa_formulario'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('motivo')
      table.timestamp('data_criacao', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
