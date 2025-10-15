import Route from '@ioc:Adonis/Core/Route'

Route.post('/api/militar', 'PoliceOfficerController.create')
Route.post('/api/dependente', 'DependentController.create')
Route.post('/api/pensionista', 'PensionerController.create')
Route.post('/api/presencial', 'PresencialController.create')

//Local Tests
Route.post('/api/testemailsender', 'TestController.create')