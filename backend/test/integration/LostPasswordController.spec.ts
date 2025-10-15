import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'
import request from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Lost Password Controller', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  test('Should be able to receive an url to recovery password', async () => {
    await request(BASE_URL).post('/api/dependente').send({
      cpf: '34731888832',
      rg: '442572220',
      reDoContribuinte: '1344706',
      dtnascimento: '13/12/1983',
      email: 'test@dependent.com',
      confirmaEmail: 'test@dependent.com',
      senha: 'Admin@12',
      confirmaSenha: 'Admin@12',
      telCelular: '11933334444',
    })

    await request(BASE_URL)
      .post('/api/forgot')
      .send({
        email: 'test@dependent.com',
      })
      .expect('content-type', 'text/plain; charset=utf-8')
      .expect(200)
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })
})
