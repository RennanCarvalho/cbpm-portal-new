export default class FormatPolicialEstado {
  public static async execute(idEstado: number) {
    let estado: string

    switch (idEstado) {
      case 1:
        estado = 'AC'
        break
      case 2:
        estado = 'AL'
        break
      case 3:
        estado = 'AP'
        break
      case 4:
        estado = 'AM'
        break
      case 5:
        estado = 'BA'
        break
      case 6:
        estado = 'CE'
        break
      case 7:
        estado = 'DF'
        break
      case 8:
        estado = 'ES'
        break
      case 9:
        estado = 'GO'
        break
      case 10:
        estado = 'MA'
        break
      case 11:
        estado = 'MT'
        break
      case 12:
        estado = 'MS'
        break
      case 13:
        estado = 'MG'
        break
      case 14:
        estado = 'PA'
        break
      case 15:
        estado = 'PB'
        break
      case 16:
        estado = 'PR'
        break
      case 17:
        estado = 'PE'
        break
      case 18:
        estado = 'PI'
        break
      case 19:
        estado = 'RN'
        break
      case 20:
        estado = 'RS'
        break
      case 21:
        estado = 'RJ'
        break
      case 22:
        estado = 'RO'
        break
      case 23:
        estado = 'RR'
        break
      case 24:
        estado = 'SC'
        break
      case 25:
        estado = 'SP'
        break
      case 26:
        estado = 'SE'
        break
      case 27:
        estado = 'TO'
        break

      default:
        estado = 'Não informado'
    }

    return estado
  }
}
