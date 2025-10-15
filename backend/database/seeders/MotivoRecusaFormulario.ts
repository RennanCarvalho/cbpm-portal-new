import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import MotivoRecusaFormulario from '../../app/Models/MotivoRecusaFormulario'

export default class MotivoRecusaFormularioSeeder extends BaseSeeder {
  public async run() {
    await MotivoRecusaFormulario.createMany([
      {
        motivo: 'FALTA DE DOCUMENTOS',
      },
      {
        motivo: 'DOCUMENTOS INCORRETOS',
      },
    ])
  }
}
