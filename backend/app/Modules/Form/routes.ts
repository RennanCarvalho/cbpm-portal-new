import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/spouse-inclusion', 'FormsController.SpouseInclusion')
  Route.post('/companion-inclusion', 'FormsController.companionInclusion')
  Route.post(
    '/inclusion-children-and-stepchildren',
    'FormsController.inclusionChildrenAndStepchildren'
  )
  Route.post('/parent-inclusion', 'FormsController.parentInclusion')
  Route.post('/inclusion-of-minor', 'FormsController.inclusionOfMinorInCustody')
  Route.post('/inclusion-of-disabled-beneficiary', 'FormsController.inclusionOfDisabledBeneficiary')
  
  Route.post('/registration-update', 'FormsController.registrationUpdate')

  Route.post('/spouse-exclusion', 'FormsController.spouseExclusion')
  Route.post('/companion-exclusion', 'FormsController.companionExclusion')
  Route.post('/general-request', 'FormsController.generalRequest')
  Route.post('/update-data', 'FormsController.updateData')
  Route.post('/health-declaration', 'FormsController.healthDeclaration')
  Route.post('/administrative-reinclusion', 'FormsController.administrativeReinclusion')
  Route.post('/update-pensionista-data', 'FormsController.updatePensionistaData')
  Route.post('/medical-expenses-refund', 'FormsController.medicalExpensesRefund')
  Route.post('/refund-of-coparticipation', 'FormsController.refundOfCoparticipation')
})
  .prefix('/api/user/forms')
  .middleware('auth:api')
