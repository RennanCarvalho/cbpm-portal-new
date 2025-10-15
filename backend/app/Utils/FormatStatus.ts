export default class FormatStatus {
  public static async execute(idStatus: number) {
    let status: string

    if (idStatus === 1) {
      status = 'NORMAL'
    } else {
      status = 'INATIVO'
    }

    return status
  }
}
