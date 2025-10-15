import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'
import CreateDirectoryService from '../../../app/Services/CreateDirectoryService'

type DirectoryData = {
  id: number
  formName: string
}

test.group('Create directory service', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  test('Should be able to create directories', async (assert) => {
    const data: DirectoryData = { id: 17, formName: 'inclusao_de_conjuge' }

    const paths = await CreateDirectoryService.execute(data)

    assert.isObject(paths)
    assert.isString(paths.absolutePath)
    assert.isString(paths.relativePath)

    group.afterEach(async () => {
      await Database.rollbackGlobalTransaction()
    })
  })

  //TODO criar tests para casos de falha
})
