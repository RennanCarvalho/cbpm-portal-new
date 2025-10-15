import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SolicitacaoGeral extends BaseSchema {
  protected tableName = 'solicitacao_geral'

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
      table.string('rg').notNullable()
      table.string('rgdg').notNullable()
      table.string('nome_mae').notNullable()
      table.string('nome_pai').notNullable()
      table.string('tipo_usuario').notNullable()

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
      table.string('solicitacao').notNullable()

      table.timestamp('data_criacao', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
