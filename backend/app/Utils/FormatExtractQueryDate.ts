type Response = {
  yearAndMonthInitial: string
  yearAndMonthFinal: string
}

export default class FormatExtractQueryDate {
  public static execute(periodoInicial: string, periodoFinal: string): Response {
    // Separa o mês inicial da busca
    let monthInitialPeriod = periodoInicial.split('/')[0]

    // Separa o ano inicial da busca
    let yearInitialPeriod = periodoInicial.split('/')[1]

    if ((parseInt(monthInitialPeriod) - 1) == 0) {
      monthInitialPeriod = '12'
      let intYear = parseInt(yearInitialPeriod)
      yearInitialPeriod = (intYear - 1).toString()
    }

    // Junta o ano e o mês inicial para realizar a busca no banco
    let yearAndMonthInitial = yearInitialPeriod + monthInitialPeriod

    // Separa o mês final da busca
    let monthFinalPeriod = periodoFinal.split('/')[0]

    // Separa o ano final da busca
    let yearFinalPeriod = periodoFinal.split('/')[1]

    // Junta o ano e o mês final para realizar a busca no banco
    let yearAndMonthFinal = yearFinalPeriod + monthFinalPeriod

    return { yearAndMonthInitial, yearAndMonthFinal }
  }
}
