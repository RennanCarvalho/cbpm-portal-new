import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsuarioPortalCBPM extends BaseSchema {
  protected tableName = 'usuario_portal_cbpm'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unsigned().primary()
      table.integer('id_pessoa').unique().unsigned().references('id').inTable('Pessoa')
      table.integer('id_provedor').notNullable().unsigned().references('id').inTable('Pessoa')
      table.string('categoria').notNullable()
      table.string('cpf').notNullable()
      table.string('email').notNullable()
      table.string('senha').notNullable()
      table.boolean('conta_ativada').defaultTo(false)

      table.timestamp('data_criacao', { useTz: true }).notNullable()
      table.timestamp('data_atualizacao', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
