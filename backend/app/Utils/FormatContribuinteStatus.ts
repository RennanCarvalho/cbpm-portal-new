export default class FormatContribuinteStatus {
  public static async execute(idContribuinte: number) {
    let contribuinte: string

    if (idContribuinte) {
      contribuinte = 'SIM'
    } else {
      contribuinte = 'NÃO'
    }

    return contribuinte
  }
}
