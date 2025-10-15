import Route from '@ioc:Adonis/Core/Route'

Route.post('/api/contact-us/', 'UserController.contactUsMail')
Route.post('/api/resendEmail/:email', 'UserController.resendEmail')
Route.post('/api/login', 'UserController.login')
Route.post('/api/hide', 'UserController.userHide');

Route.group(() => {
  Route.post('/request-credential/', 'UserController.requestCredential')
  Route.get('/category', 'UserController.validateUserCategory')

  Route.get('/show', 'UserController.showData')
  Route.get('/show-credentials', 'UserController.showCredentials')
  Route.get('/show-shortages', 'UserController.showShortages')
})
  .prefix('/api/user')
  .middleware('auth:api')
