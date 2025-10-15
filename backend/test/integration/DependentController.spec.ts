import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'
import request from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Create Dependent Controller', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  test('Should be able to create a new dependent', async (assert) => {
    await request(BASE_URL)
      .post('/api/dependente')
      .send({
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
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(200)
      .then((response) => {
        assert.equal(response.body.id_pessoa, '581638')
        assert.equal(response.body.id_provedor, '468812'),
          assert.equal(response.body.cpf, '34731888832'),
          assert.equal(response.body.email, 'test@dependent.com'),
          assert.equal(response.body.conta_ativada, false),
          assert.equal(response.body.categoria, 'DEPENDENTE'),
          assert.equal(response.body.id, 1)
      })
  })

  test('Should not be able to create a new dependent with invalid CPF', async (assert) => {
    await request(BASE_URL)
      .post('/api/dependente')
      .send({
        cpf: '55555555555',
        rg: '442572220',
        reDoContribuinte: '1344706',
        dtnascimento: '13/12/1983',
        email: 'test@dependent.com',
        confirmaEmail: 'test@dependent.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11933334444',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(404)
      .then((response) => {
        assert.equal(response.body.message, 'CPF não encontrado')
      })
  })

  test('Should not be able to create a new dependent with invalid RG', async (assert) => {
    await request(BASE_URL)
      .post('/api/dependente')
      .send({
        cpf: '34731888832',
        rg: '333333',
        reDoContribuinte: '1344706',
        dtnascimento: '13/12/1983',
        email: 'test@dependent.com',
        confirmaEmail: 'test@dependent.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11933334444',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(404)
      .then((response) => {
        assert.equal(response.body.message, 'RG inválido')
      })
  })

  test('Should not be able to create a new dependent with invalid RE', async (assert) => {
    await request(BASE_URL)
      .post('/api/dependente')
      .send({
        cpf: '34731888832',
        rg: '442572220',
        reDoContribuinte: '1111111',
        dtnascimento: '13/12/1983',
        email: 'test@dependent.com',
        confirmaEmail: 'test@dependent.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11933334444',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(404)
      .then((response) => {
        assert.equal(response.body.message, 'RE inválido')
      })
  })

  test('Should not be able to create a new dependent without relation with contributor', async (assert) => {
    await request(BASE_URL)
      .post('/api/dependente')
      .send({
        cpf: '34731888832',
        rg: '442572220',
        reDoContribuinte: '86',
        dtnascimento: '13/12/1983',
        email: 'test@dependent.com',
        confirmaEmail: 'test@dependent.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11933334444',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(400)
      .then((response) => {
        assert.equal(response.body.message, 'Pessoa não tem vinculo com o contribuinte')
      })
  })

  test('Should not be able to create a new dependent with inactive status', async (assert) => {
    await Database.from('Beneficiario').where('id_pessoa', 581638).update({ id_status: 2 })

    await request(BASE_URL)
      .post('/api/dependente')
      .send({
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
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(400)
      .then((response) => {
        assert.equal(response.body.message, 'Usuário inativo')
      })
  })

  test('Should not be able to create a new dependent with invalid birthday', async (assert) => {
    await request(BASE_URL)
      .post('/api/dependente')
      .send({
        cpf: '34731888832',
        rg: '442572220',
        reDoContribuinte: '1344706',
        dtnascimento: '13/12/1980',
        email: 'test@dependent.com',
        confirmaEmail: 'test@dependent.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11933334444',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(400)
      .then((response) => {
        assert.equal(response.body.message, 'Data de nascimento incorreta')
      })
  })

  test('Should not be able to create a new dependent with invalid email', async (assert) => {
    await request(BASE_URL)
      .post('/api/dependente')
      .send({
        cpf: '34731888832',
        rg: '442572220',
        reDoContribuinte: '1344706',
        dtnascimento: '13/12/1983',
        email: 'test@test.com',
        confirmaEmail: 'test@test.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11933334444',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(400)
      .then((response) => {
        assert.equal(response.body.message, 'E-mail incorreto')
      })
  })

  test('Should not be able to create a new dependent with a registered email', async (assert) => {
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
      .post('/api/dependente')
      .send({
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
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(400)
      .then((response) => {
        assert.equal(response.body.message, 'Usuário já cadastrado')
      })
  })

  test('Should not be able to create a new dependent with incorrect email confirmation', async () => {
    await request(BASE_URL)
      .post('/api/dependente')
      .send({
        cpf: '34731888832',
        rg: '442572220',
        reDoContribuinte: '1344706',
        dtnascimento: '13/12/1983',
        email: 'test@dependent.com',
        confirmaEmail: 'psalmeida@cbpm.sp.gov',
        senha: 'Admin@12',
        confirmaSenha: 'Admin@12',
        telCelular: '11933334444',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(422)
  })

  test('Should not be able to create a new dependent with invalid password', async () => {
    await request(BASE_URL)
      .post('/api/dependente')
      .send({
        cpf: '34731888832',
        rg: '442572220',
        reDoContribuinte: '1344706',
        dtnascimento: '13/12/1983',
        email: 'test@dependent.com',
        confirmaEmail: 'test@dependent.com',
        senha: 'Admin',
        confirmaSenha: 'Admin',
        telCelular: '11933334444',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(422)
  })

  test('Should not be able to create a new dependent with invalid confirmation password', async () => {
    await request(BASE_URL)
      .post('/api/dependente')
      .send({
        cpf: '34731888832',
        rg: '442572220',
        reDoContribuinte: '1344706',
        dtnascimento: '13/12/1983',
        email: 'test@dependent.com',
        confirmaEmail: 'test@dependent.com',
        senha: 'Admin@12',
        confirmaSenha: 'Admin',
        telCelular: '11933334444',
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(422)
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })
})
