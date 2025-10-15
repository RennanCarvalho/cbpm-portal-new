import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FormulariosPortal from '../../app/Models/FormulariosPortal'

export default class FormulariosPortalSeeder extends BaseSeeder {
  public async run() {
    await FormulariosPortal.createMany([
      { nome_formulario: 'INCLUSÃO DE CÔNJUGE' },
      { nome_formulario: 'INCLUSÃO DE COMPANHEIRO' },
      { nome_formulario: 'INCLUSÃO DE FILHOS E ENTEADOS' },
      { nome_formulario: 'INCLUSÃO DE GENITORES' },
      { nome_formulario: 'INCLUSÃO DE MENOR SOB GUARDA - TUTELA - CURATELA' },
      { nome_formulario: 'BENEFICIARIO COM INVALIDEZ' },
      { nome_formulario: 'EXCLUSÃO DE CONJUGE/ENTEADO' },
      { nome_formulario: 'EXCLUSÃO DE COMPANHEIRA/ENTEADO' },
      { nome_formulario: 'INCLUSÃO E ATUALIZAÇÃO DE DADOS DE PENSIONISTA' },
      { nome_formulario: 'REQUERIMENTO DE SOLICITACÃO GERAL' },
      { nome_formulario: 'REQUERIMENTO PARA REINCLUSÃO ADMINISTRATIVA' },
      { nome_formulario: 'FORMULARIO DE DECLARACAO SAÚDE' },
      { nome_formulario: 'ATUALIZAÇÃO DE DADOS' },
    ])
  }
}
