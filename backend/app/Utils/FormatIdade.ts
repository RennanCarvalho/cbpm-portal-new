export default class FormatIdade {
  public static async execute(birthdate: Date) {
    let dateNow = new Date()

    var age = dateNow.getFullYear() - birthdate.getFullYear()
    var month = dateNow.getMonth() - birthdate.getMonth()
    if (month < 0 || (month === 0 && dateNow.getDate() < birthdate.getDate())) {
      age--
    }
    return age
  }
}
