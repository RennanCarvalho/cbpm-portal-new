export default class FormatSexo {
  public static async execute(gender: number) {
    let sexo: string

    if (gender === 2) {
      sexo = 'MASCULINO'
    } else {
      sexo = 'FEMININO'
    }

    return sexo
  }
}
