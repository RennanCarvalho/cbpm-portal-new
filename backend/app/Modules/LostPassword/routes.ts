import Route from '@ioc:Adonis/Core/Route'

Route.get('/api/verifyEmail/:email', 'LostPasswordsController.confirm').as('verifyEmail')
Route.post('/api/forgot', 'LostPasswordsController.recoveryPassword')
Route.post('/api/reset', 'LostPasswordsController.resetPassword')
Route.put('/api/user/change-password', 'LostPasswordsController.changePassword').middleware('auth:api')
