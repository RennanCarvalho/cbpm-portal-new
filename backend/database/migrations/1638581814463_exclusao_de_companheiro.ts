import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ExclusaoDeCompanheiros extends BaseSchema {
  protected tableName = 'exclusao_de_companheiro'

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
      table.string('nome').notNullable()
      table.date('dtnascimento').notNullable()
      table.string('cpf').notNullable()
      table.string('rg').notNullable()
      table.string('rgdg').notNullable()

      table.string('nome_testemunha')
      table.integer('sexo_testemunha')
      table.date('dtnascimento_testemunha')
      table.string('cpf_testemunha')
      table.string('rg_testemunha')
      table.string('rgdg_testemunha')
      table.string('logradouro_testemunha')
      table.string('numero_testemunha')
      table.string('complemento_testemunha')
      table.string('bairro_testemunha')
      table.string('cidade_testemunha')
      table.string('cep_testemunha')
      table.string('tel_testemunha')

      table.timestamp('data_criacao', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
