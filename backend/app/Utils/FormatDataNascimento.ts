export default class FormatBirthdate {
  public static async execute(birthdate: Date) {
    const FormattedBirthdate = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(
      birthdate
    )

    return FormattedBirthdate
  }
}
