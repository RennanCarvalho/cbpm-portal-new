import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'
import request from 'supertest'
import EmailConfirmationService from '../../../app/Services/EmailConfirmationService'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Validate email confirmation service', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  test('Should be able to receive an url to confirme account', async (assert) => {
    await request(BASE_URL).post('/api/dependente').send({
      cpf: '34731888832',
      rg: '442572220',
      reDoContribuinte: '1344706',
      dtnascimento: '13/12/1983',
      email: 'giovanni@cbpm.sp.gov.br',
      confirmaEmail: 'giovanni@cbpm.sp.gov.br',
      senha: 'Admin@12',
      confirmaSenha: 'Admin@12',
      telCelular: '11933334444',
    })

    const sendMail = await EmailConfirmationService.execute('giovanni@cbpm.sp.gov.br')

    assert.isOk(sendMail)

    group.afterEach(async () => {
      await Database.rollbackGlobalTransaction()
    })
  })
})
