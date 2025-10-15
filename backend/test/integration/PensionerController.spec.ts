import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'
import request from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Create Pensioner Controller', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  test('Should be able to create a new pensioner', async (assert) => {
    await request(BASE_URL)
      .post('/api/pensionista')
      .send({
        cpf: '31891811878',
        rg: '46941814X',
        matricula: '5028365803',
        dtnascimento: '06/06/1990',
        email: 'test@pensioner.com',
        confirmaEmail: 'test@pensioner.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(200)
      .then((response) => {
        assert.equal(response.body.id_pessoa, '143779')
        assert.equal(response.body.id_provedor, '413848'),
          assert.equal(response.body.cpf, '31891811878'),
          assert.equal(response.body.email, 'test@pensioner.com'),
          assert.equal(response.body.conta_ativada, false),
          assert.equal(response.body.categoria, 'PENSIONISTA'),
          assert.equal(response.body.id, 1)
      })
  })

  test('Should not be able to create a new pensioner with invalid CPF', async (assert) => {
    await request(BASE_URL)
      .post('/api/pensionista')
      .send({
        cpf: '55555555555',
        rg: '46941814X',
        matricula: '5028365803',
        dtnascimento: '06/06/1990',
        email: 'test@pensioner.com',
        confirmaEmail: 'test@pensioner.com',
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

  test('Should not be able to create a new pensioner with invalid RG', async (assert) => {
    await request(BASE_URL)
      .post('/api/pensionista')
      .send({
        cpf: '31891811878',
        rg: '7777777',
        matricula: '5028365803',
        dtnascimento: '06/06/1990',
        email: 'test@pensioner.com',
        confirmaEmail: 'test@pensioner.com',
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

  test('Should not be able to create a new pensioner with invalid registration', async (assert) => {
    await request(BASE_URL)
      .post('/api/pensionista')
      .send({
        cpf: '31891811878',
        rg: '46941814X',
        matricula: '100',
        dtnascimento: '06/06/1990',
        email: 'test@pensioner.com',
        confirmaEmail: 'test@pensioner.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(400)
      .then((response) => {
        assert.equal(response.body.message, 'Matrícula inválida')
      })
  })

  test('Should not be able to create a new pensioner with invalid birthday', async (assert) => {
    await request(BASE_URL)
      .post('/api/pensionista')
      .send({
        cpf: '31891811878',
        rg: '46941814X',
        matricula: '5028365803',
        dtnascimento: '08/01/1999',
        email: 'test@pensioner.com',
        confirmaEmail: 'test@pensioner.com',
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

  test('Should not be able to create a new pensioner with invalid email', async (assert) => {
    await request(BASE_URL)
      .post('/api/pensionista')
      .send({
        cpf: '31891811878',
        rg: '46941814X',
        matricula: '5028365803',
        dtnascimento: '06/06/1990',
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

  test('Should not be able to create a new pensioner with a registered email', async (assert) => {
    await request(BASE_URL).post('/api/pensionista').send({
      cpf: '31891811878',
      rg: '46941814X',
      matricula: '5028365803',
      dtnascimento: '06/06/1990',
      email: 'test@pensioner.com',
      confirmaEmail: 'test@pensioner.com',
      senha: 'Admin@12',
      confirmaSenha: 'Admin@12',
      telCelular: '11974363480',
    })

    await request(BASE_URL)
      .post('/api/pensionista')
      .send({
        cpf: '31891811878',
        rg: '46941814X',
        matricula: '5028365803',
        dtnascimento: '06/06/1990',
        email: 'test@pensioner.com',
        confirmaEmail: 'test@pensioner.com',
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

  test('Should not be able to create a new pensioner with incorrect email confirmation', async () => {
    await request(BASE_URL)
      .post('/api/pensionista')
      .send({
        cpf: '31891811878',
        rg: '46941814X',
        matricula: '5028365803',
        dtnascimento: '06/06/1990',
        email: 'test@pensioner.com',
        confirmaEmail: 'test@test.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(422)
  })

  test('Should not be able to create a new pensioner with invalid password', async () => {
    await request(BASE_URL)
      .post('/api/pensionista')
      .send({
        cpf: '31891811878',
        rg: '46941814X',
        matricula: '5028365803',
        dtnascimento: '06/06/1990',
        email: 'test@pensioner.com',
        confirmaEmail: 'test@pensioner.com',
        senha: 'Admin',
        confirmaSenha: 'Admin',
        telCelular: '11974363480',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(422)
  })

  test('Should not be able to create a new pensioner with invalid confirmation password', async () => {
    await request(BASE_URL)
      .post('/api/pensionista')
      .send({
        cpf: '31891811878',
        rg: '46941814X',
        matricula: '5028365803',
        dtnascimento: '06/06/1990',
        email: 'test@pensioner.com',
        confirmaEmail: 'test@pensioner.com',
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
