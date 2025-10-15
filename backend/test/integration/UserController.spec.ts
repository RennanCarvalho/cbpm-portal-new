import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'
import request from 'supertest'
import UsuarioPortalCBPM from '../../app/Models/UsuarioPortalCBPM'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('User Controller', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  test('Should be able to login', async (assert) => {
    await request(BASE_URL).post('/api/militar').send({
      cpf: '45411131804',
      rg: '6317166',
      re: '86',
      dtnascimento: '08/01/1953',
      email: 'test@contributor.com',
      confirmaEmail: 'test@contributor.com',
      senha: 'Admin@12',
      confirmaSenha: 'Admin@12',
      telCelular: '11999999999',
    })

    await UsuarioPortalCBPM.query().where('id_pessoa', 17).update({ conta_ativada: 1 })

    await request(BASE_URL)
      .post('/api/login')
      .send({
        cpf: '45411131804',
        senha: 'Admin@12',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(200)
      .then((response) => {
        assert.isString(response.body.token),
          assert.equal(response.body.nome, 'ELSON RONEY SERVILHA'),
          assert.equal(response.body.id_pessoa, '17')
        assert.equal(response.body.categoria, 'CONTRIBUINTE')
      })
  })

  test('Should not be able to login without confirme account', async (assert) => {
    await request(BASE_URL).post('/api/militar').send({
      cpf: '45411131804',
      rg: '6317166',
      re: '86',
      dtnascimento: '08/01/1953',
      email: 'test@contributor.com',
      confirmaEmail: 'test@contributor.com',
      senha: 'Admin@12',
      confirmaSenha: 'Admin@12',
      telCelular: '11999999999',
    })

    await request(BASE_URL)
      .post('/api/login')
      .send({
        cpf: '45411131804',
        senha: 'Admin@12',
      })
      .expect('content-type', 'text/plain; charset=utf-8')
      .expect(401)
      .then((response) => {
        assert.equal(response.text, 'Favor confirmar sua conta')
      })
  })

  test('Should not be able to login with incorrect CPF', async (assert) => {
    await request(BASE_URL).post('/api/militar').send({
      cpf: '45411131804',
      rg: '6317166',
      re: '86',
      dtnascimento: '08/01/1953',
      email: 'test@contributor.com',
      confirmaEmail: 'test@contributor.com',
      senha: 'Admin@12',
      confirmaSenha: 'Admin@12',
      telCelular: '11999999999',
    })

    await UsuarioPortalCBPM.query().where('id_pessoa', 17).update({ conta_ativada: 1 })

    await request(BASE_URL)
      .post('/api/login')
      .send({
        cpf: '45411131800',
        senha: 'Admin@12',
      })
      .expect('content-type', 'text/plain; charset=utf-8')
      .expect(400)
      .then((response) => {
        assert.equal(response.text, 'Credenciais inválidas')
      })
  })

  test('Should not be able to login with incorrect password', async (assert) => {
    await request(BASE_URL).post('/api/militar').send({
      cpf: '45411131804',
      rg: '6317166',
      re: '86',
      dtnascimento: '08/01/1953',
      email: 'test@contributor.com',
      confirmaEmail: 'test@contributor.com',
      senha: 'Admin@12',
      confirmaSenha: 'Admin@12',
      telCelular: '11999999999',
    })

    await UsuarioPortalCBPM.query().where('id_pessoa', 17).update({ conta_ativada: 1 })

    await request(BASE_URL)
      .post('/api/login')
      .send({
        cpf: '45411131804',
        senha: 'Admin@99',
      })
      .expect('content-type', 'text/plain; charset=utf-8')
      .expect(400)
      .then((response) => {
        assert.equal(response.text, 'Credenciais inválidas')
      })
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })
})
