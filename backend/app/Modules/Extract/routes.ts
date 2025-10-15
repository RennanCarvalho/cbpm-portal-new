import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/process-extract', 'ExtractsController.processExtract')
  Route.get('/checkingAccount-extract', 'ExtractsController.checkingAccountExtract')
  Route.get('/medical-expense-extract', 'ExtractsController.medicalExpenseStatement')
  Route.get('/medical-expensec800-extract', 'ExtractsController.medicalExpenseC800Statement')
})
  .prefix('/api/user')
  .middleware('auth:api')
