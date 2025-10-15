export default class FormatEstadoCivil {
  public static async execute(EstadoCivil: number) {
    let estadoCivil: string

    switch (EstadoCivil) {
      case 1:
        estadoCivil = 'SOLTEIRO'
        break
      case 2:
        estadoCivil = 'VIÚVO'
        break
      case 3:
        estadoCivil = 'CASADO'
        break
      case 4:
        estadoCivil = 'DIVORCIADO'
        break
      case 5:
        estadoCivil = 'SEPARADO'
        break
      case 6:
        estadoCivil = 'UNIÃO ESTÁVEL'
        break
      default:
        estadoCivil = 'NÃO INFORMADO'
    }

    return estadoCivil
  }
}
