export default class FormatParentesco {
  public static async execute(idParentesco: number) {
    let parentesco: string

    switch (idParentesco) {
      case 1:
        parentesco = 'COMPANHEIRO'
        break
      case 2:
        parentesco = 'CÔNJUGE'
        break
      case 3:
        parentesco = 'FILHO'
        break
      case 4:
        parentesco = 'MÃE'
        break
      case 5:
        parentesco = 'PAI'
        break
      case 6:
        parentesco = 'T. G. COM ADOÇÃO'
        break
      case 7:
        parentesco = 'ENTEADO'
        break
      default:
        parentesco = 'OUTROS'
    }

    return parentesco
  }
}
