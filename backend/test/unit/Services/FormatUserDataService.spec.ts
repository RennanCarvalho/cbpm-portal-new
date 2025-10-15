import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'
import FormatUserDataService from '../../../app/Services/FormatUserDataService'

type UserData = {
  id: number
  category: string
}

test.group('Format user data service', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  test('Should be able to return formatted user data', async (assert) => {
    const pensionerData: UserData = {
      id: 143779,
      category: 'PENSIONISTA',
    }

    const depedentData: UserData = {
      id: 581638,
      category: 'DEPENDENTE',
    }

    const pensioner = await FormatUserDataService.execute(pensionerData)
    const depedent = await FormatUserDataService.execute(depedentData)

    assert.isOk(pensioner)
    assert.isOk(depedent)
  })

  test('Should not be able to return formatted user data with incorrect id', async (assert) => {
    try {
      const userData: UserData = {
        id: 999999,
        category: 'PENSIONISTA',
      }

      await FormatUserDataService.execute(userData)
    } catch (error) {
      assert.equal(error, 'AppErrorException: Id não encontrado')
    }

    group.afterEach(async () => {
      await Database.rollbackGlobalTransaction()
    })
  })
})
