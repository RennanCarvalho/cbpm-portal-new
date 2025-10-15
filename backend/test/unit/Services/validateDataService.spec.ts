import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'
import request from 'supertest'
import Beneficiario from '../../../app/Models/Beneficiario'
import Contribuinte from '../../../app/Models/Contribuinte'
import Pessoa from '../../../app/Models/Pessoa'
import ValidateDataService from '../../../app/Services/ValidateDataService'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Validate Validation Service', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  test('Should be find a person using a CPF', async (assert) => {
    const person = await ValidateDataService.findByCPF('45411131804')

    assert.equal(person.cpf, '45411131804')
  })

  test('Should not be able to find a person using an incorrect CPF', async (assert) => {
    try {
      await ValidateDataService.findByCPF('22222222222')
    } catch (error) {
      assert.equal(error.message, 'CPF não encontrado')
    }
  })

  test.only('Should be a already registered user', async (assert) => {
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
      .expect(200)

    try {
      await ValidateDataService.checkRegisteredUser(17)
    } catch (error) {
      assert.equal(error.message, 'Usuário já cadastrado')
    }
  })

  test('Should be a contributor', async (assert) => {
    const isContributor = await ValidateDataService.isContribuinte(17)
    assert.isOk(isContributor)
  })

  test('Should not be a contributor', async (assert) => {
    await Contribuinte.query().where('id', 17).delete()

    try {
      await ValidateDataService.isContribuinte(17)
    } catch (error) {
      assert.equal(error.message, 'Usuário não é um contribuinte')
    }
  })

  test('Should be a valid RG', async (assert) => {
    const isValid = await ValidateDataService.isValidRG('6317166')
    assert.isOk(isValid)
  })

  test('Should not be a valid RG', async (assert) => {
    try {
      await ValidateDataService.isValidRG('77777')
    } catch (error) {
      assert.equal(error.message, 'RG inválido')
    }
  })

  test('Should be a valid email', async (assert) => {
    const isValid = await ValidateDataService.isValidEmail('test@contributor.com')
    assert.isOk(isValid)
  })

  test('Should not be a valid email', async (assert) => {
    try {
      await ValidateDataService.isValidEmail('test@test.com')
    } catch (error) {
      assert.equal(error.message, 'E-mail incorreto')
    }
  })

  test('Should not be a registered email', async (assert) => {
    const isValid = await ValidateDataService.isUsedEmail('pauloalmeida@cbpm.sp.gov.br')
    assert.isOk(isValid)
  })

  test('Should be a registered email', async (assert) => {
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

    try {
      await ValidateDataService.isUsedEmail('test@contributor.com')
    } catch (error) {
      assert.equal(error.message, 'E-mail já cadastrado')
    }
  })

  test('Should be a valid RE', async (assert) => {
    const isValid = await ValidateDataService.isValidRE('86')
    assert.isOk(isValid)
  })

  test('Should not be a valid RE', async (assert) => {
    try {
      await ValidateDataService.isValidRE('86')
    } catch (error) {
      assert.equal(error.message, 'RE inválido')
    }
  })

  test('Should be find a contributor with RE', async (assert) => {
    const contributor = await ValidateDataService.findByRE('86')
    assert.equal(contributor.identidade, '86')
  })

  test('Should not be find a contributor with invalid RE', async (assert) => {
    try {
      await ValidateDataService.findByRE('80')
    } catch (error) {
      assert.equal(error.message, 'RE inválido')
    }
  })

  test('Should be a valid registration', async (assert) => {
    const isValid = await ValidateDataService.isValidRegistration(143779, '5028365803')
    assert.isNumber(isValid)
  })

  test('Should not be a valid registration', async (assert) => {
    try {
      await ValidateDataService.isValidRegistration(17, '32434')
    } catch (error) {
      assert.equal(error.message, 'Matrícula inválida')
    }
  })

  test('Should be a active pensioner', async (assert) => {
    const isValid = await ValidateDataService.isActived(143779)
    assert.isOk(isValid)
  })

  test('Should be a inactive pensioner', async (assert) => {
    await Beneficiario.query().update('id_status', 2).where('id_pessoa', 143779)

    try {
      await ValidateDataService.isActived(143779)
    } catch (error) {
      assert.equal(error.message, 'Usuário inativo')
    }
  })

  test('Should be a valid birthdate', async (assert) => {
    const person = await Pessoa.findOrFail(17)
    const isValid = await ValidateDataService.isValidBirthdate('08/01/1953', person.dtnascimento)

    assert.isOk(isValid)
  })

  test('Should not be a valid birthdate', async (assert) => {
    const person = await Pessoa.findOrFail(17)
    try {
      await ValidateDataService.isValidBirthdate('08/01/1950', person.dtnascimento)
    } catch (error) {
      assert.equal(error.message, 'Data de nascimento incorreta')
    }
  })

  test('Should be a beneficiary', async (assert) => {
    const isValid = await ValidateDataService.isBeneficiary(581638, 468812)
    assert.isOk(isValid)
  })

  test('Should not be a beneficiary', async (assert) => {
    try {
      await ValidateDataService.isBeneficiary(581638, 46881)
    } catch (error) {
      assert.equal(error.message, 'Pessoa não tem vinculo com o contribuinte')
    }
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })
})
