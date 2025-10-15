import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class InclusaoCompanheiro extends BaseSchema {
  protected tableName = 'inclusao_companheiro'

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

      table.string('nome_testemunha').notNullable()
      table.integer('sexo_testemunha').notNullable()
      table.date('dtnascimento_testemunha').notNullable()
      table.string('cpf_testemunha').notNullable()
      table.string('rg_testemunha').notNullable()
      table.string('rgdg_testemunha').notNullable()
      table.string('logradouro_testemunha').notNullable()
      table.string('numero_testemunha').notNullable()
      table.string('complemento_testemunha')
      table.string('bairro_testemunha').notNullable()
      table.string('cidade_testemunha').notNullable()
      table.string('cep_testemunha').notNullable()
      table.string('tel_testemunha').notNullable()

      table.timestamp('data_criacao', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
