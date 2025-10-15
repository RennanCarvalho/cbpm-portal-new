export default class FormatPolicialPosto {
  public static async execute(idPosto: number) {
    let posto: string

    switch (idPosto) {
      case 1:
        posto = 'SOLDADO PM 2ª CLASSE'
        break
      case 2:
        posto = 'SOLDADO PM 1ª CLASSE'
        break
      case 3:
        posto = 'CABO PM'
        break
      case 4:
        posto = '3º SGT PM'
        break
      case 5:
        posto = '2º SGT PM'
        break
      case 6:
        posto = '1º SGT PM'
        break
      case 7:
        posto = 'ALUNO OFICIAL'
        break
      case 8:
        posto = 'SUB TEN PM'
        break
      case 9:
        posto = 'ASPIRANTE OFICIAL PM'
        break
      case 10:
        posto = '2º TEN PM'
        break
      case 11:
        posto = '1º TEN PM'
        break
      case 12:
        posto = 'CAP PM'
        break
      case 13:
        posto = 'MAJOR PM'
        break
      case 14:
        posto = 'TEN CEL PM'
        break
      case 15:
        posto = 'CEL PM'
        break
      case 16:
        posto = '1 CFO PM'
        break
      case 17:
        posto = '2 CFO PM'
        break
      case 18:
        posto = '3 CFO PM'
        break
      case 19:
        posto = '4 CFO PM'
        break
      default:
        posto = 'SEM POSTO/GRADUACAO'
    }

    return posto
  }
}
