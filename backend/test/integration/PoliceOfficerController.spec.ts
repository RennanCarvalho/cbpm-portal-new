import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'
import request from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Create Police Officer Controller', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  test('Should be able to create a new Policial', async (assert) => {
    await request(BASE_URL)
      .post('/api/militar')
      .send({
        cpf: '45411131804',
        rg: '6317166',
        re: '86',
        dtnascimento: '08/01/1953',
        email: 'test@contributor.com',
        confirmaEmail: 'test@contributor.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(200)
      .then((response) => {
        assert.equal(response.body.id_pessoa, '17')
        assert.equal(response.body.id_provedor, '17'),
          assert.equal(response.body.cpf, '45411131804'),
          assert.equal(response.body.email, 'test@contributor.com'),
          assert.equal(response.body.conta_ativada, false),
          assert.equal(response.body.categoria, 'CONTRIBUINTE'),
          assert.equal(response.body.id, 1)
      })
  })

  test('Should not be able to create a new Policial with invalid CPF', async (assert) => {
    await request(BASE_URL)
      .post('/api/militar')
      .send({
        cpf: '55555555555',
        rg: '6317166',
        re: '86',
        dtnascimento: '08/01/1953',
        email: 'test@contributor.com',
        confirmaEmail: 'test@contributor.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(404)
      .then((response) => {
        assert.equal(response.body.message, 'CPF não encontrado')
      })
  })

  test('Should not be able to create a new Policial with invalid RG', async (assert) => {
    await request(BASE_URL)
      .post('/api/militar')
      .send({
        cpf: '45411131804',
        rg: '7777777',
        re: '86',
        dtnascimento: '08/01/1953',
        email: 'test@contributor.com',
        confirmaEmail: 'test@contributor.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(404)
      .then((response) => {
        assert.equal(response.body.message, 'RG inválido')
      })
  })

  test('Should not be able to create a new Policial with invalid RE', async (assert) => {
    await request(BASE_URL)
      .post('/api/militar')
      .send({
        cpf: '45411131804',
        rg: '6317166',
        re: '100',
        dtnascimento: '08/01/1953',
        email: 'test@contributor.com',
        confirmaEmail: 'test@contributor.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(400)
      .then((response) => {
        assert.equal(response.body.message, 'RE inválido')
      })
  })

  test('Should not be able to create a new Policial with invalid birthday', async (assert) => {
    await request(BASE_URL)
      .post('/api/militar')
      .send({
        cpf: '45411131804',
        rg: '6317166',
        re: '86',
        dtnascimento: '08/01/1999',
        email: 'test@contributor.com',
        confirmaEmail: 'test@contributor.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(400)
      .then((response) => {
        assert.equal(response.body.message, 'Data de nascimento incorreta')
      })
  })

  test('Should not be able to create a new Policial with invalid email', async (assert) => {
    await request(BASE_URL)
      .post('/api/militar')
      .send({
        cpf: '45411131804',
        rg: '6317166',
        re: '86',
        dtnascimento: '08/01/1953',
        email: 'test@test.com',
        confirmaEmail: 'test@test.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(400)
      .then((response) => {
        assert.equal(response.body.message, 'E-mail incorreto')
      })
  })

  test('Should not be able to create a new Policial with a registered email', async (assert) => {
    await request(BASE_URL).post('/api/militar').send({
      cpf: '45411131804',
      rg: '6317166',
      re: '86',
      dtnascimento: '08/01/1953',
      email: 'test@contributor.com',
      confirmaEmail: 'test@contributor.com',
      senha: 'Admin@12',
      confirmaSenha: 'Admin@12',
      telCelular: '11974363480',
    })

    await request(BASE_URL)
      .post('/api/militar')
      .send({
        cpf: '45411131804',
        rg: '6317166',
        re: '86',
        dtnascimento: '08/01/1953',
        email: 'test@contributor.com',
        confirmaEmail: 'test@contributor.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(400)
      .then((response) => {
        assert.equal(response.body.message, 'Usuário já cadastrado')
      })
  })

  test('Should not be able to create a new Policial with incorrect email confirmation', async () => {
    await request(BASE_URL)
      .post('/api/militar')
      .send({
        cpf: '45411131804',
        rg: '6317166',
        re: '86',
        dtnascimento: '08/01/1953',
        email: 'test@contributor.com',
        confirmaEmail: 'test@test.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(422)
  })

  test('Should not be able to create a new Policial with invalid password', async () => {
    await request(BASE_URL)
      .post('/api/militar')
      .send({
        cpf: '45411131804',
        rg: '6317166',
        re: '86',
        dtnascimento: '08/01/1953',
        email: 'test@contributor.com',
        confirmaEmail: 'test@contributor.com',
        senha: 'Admin',
        confirmaSenha: 'Admin',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(422)
  })

  test('Should not be able to create a new Policial with invalid confirmation password', async () => {
    await request(BASE_URL)
      .post('/api/militar')
      .send({
        cpf: '45411131804',
        rg: '6317166',
        re: '86',
        dtnascimento: '08/01/1953',
        email: 'test@contributor.com',
        confirmaEmail: 'test@contributor.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(422)
  })
  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })
})
