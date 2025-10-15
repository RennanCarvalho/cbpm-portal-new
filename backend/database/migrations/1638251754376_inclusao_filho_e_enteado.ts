import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class InclusaoFilhoEEnteado extends BaseSchema {
  protected tableName = 'inclusao_filho_e_enteado'

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
      table
        .integer('id_estado_civil')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('EstadoCivil')
      table.string('local_documentos').notNullable()
      table.string('nome').notNullable()
      table.integer('sexo').notNullable()
      table.date('dtnascimento').notNullable()
      table.string('cpf').notNullable()
      table.string('rg').notNullable()
      table.string('rgdg').notNullable()
      table.string('nome_mae').notNullable()
      table.string('nome_pai').notNullable()
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
