import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DeclaracaoDeSaude extends BaseSchema {
  protected tableName = 'declaracao_de_saude'

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
        .integer('id_posto_contribuinte')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('Posto')
      table.string('local_documentos').notNullable()

      table.string('nome').notNullable()
      table.date('dtnascimento').notNullable()
      table.string('cpf').notNullable()
      table.string('altura').notNullable()
      table.string('peso').notNullable()

      table.string('nome_contribuinte').notNullable()
      table.string('re_contribuinte').notNullable()

      table.string('pergunta_01').notNullable()
      table.string('pergunta_02').notNullable()
      table.string('pergunta_03').notNullable()
      table.string('pergunta_04').notNullable()
      table.string('pergunta_05').notNullable()
      table.string('pergunta_06').notNullable()
      table.string('pergunta_07').notNullable()
      table.string('pergunta_08').notNullable()
      table.string('pergunta_09').notNullable()
      table.string('pergunta_10').notNullable()
      table.string('pergunta_11').notNullable()
      table.string('pergunta_12').notNullable()
      table.string('pergunta_13').notNullable()
      table.string('pergunta_14').notNullable()
      table.string('pergunta_15').notNullable()
      table.string('pergunta_16').notNullable()
      table.string('pergunta_17').notNullable()
      table.string('pergunta_18').notNullable()
      table.string('pergunta_19').notNullable()
      table.string('pergunta_20').notNullable()
      table.string('pergunta_21').notNullable()
      table.string('pergunta_22').notNullable()
      table.string('pergunta_23')

      table.timestamp('data_criacao', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
