import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ReinclusaoAdministrativa extends BaseSchema {
  protected tableName = 'reinclusao_administrativa'

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
      table.string('re_ou_matricula').notNullable()
      table.string('cpf').notNullable()
      table.string('tipo_contribuinte').notNullable()
      table
        .integer('id_posto_contribuinte')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('Posto')
        .notNullable()

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
