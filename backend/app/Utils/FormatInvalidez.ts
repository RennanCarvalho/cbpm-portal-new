export default class FormatInvalidez {
  public static async execute(invalid: number) {
    let isInvalid: string

    if (invalid === 0) {
      isInvalid = 'NÃO'
    } else {
      isInvalid = 'SIM'
    }

    return isInvalid
  }
}
