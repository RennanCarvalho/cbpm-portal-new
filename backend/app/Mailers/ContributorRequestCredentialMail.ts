import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'

type ContributorData = {
  cpf: string
  nome: string
}

type DependentData = {
  nome: string
  estadoCivil: string | null
  idade: number
  dataNascimento: string | null
  sexo: string | null
  estado: string | null
  cidade: string | null
  bairro: string | null
  cep: string | null
  logradouro: string | null
  complemento: string | null
  numero: string | null
  telResidencial: string | null
  telCelular: string | null
  telOutro: string | null
  email: string | null
  cpf: string
  rg: string
  rgdg: string | null
  matricula: string | null
  orgaoEmissor: string | null
  ufIdentidade: string | null
  tipoIdentidade: string | null
}

type ContributorRequestCredential = {
  contributorData: ContributorData
  dependentData: DependentData
}

export default class ContributorRequestCredentialMail extends BaseMailer {
  constructor(private credentialData: ContributorRequestCredential) {
    super()
  }

  public prepare(message: MessageContract) {
    message
      .subject('Solicitação de Credencial - Portal CBPM')
      .from('tiamh@cbpm.sp.gov.br', 'TI AMH')
      .to(`${process.env.EMAIL_FORMS}`)
      .to(`${process.env.EMAIL_CREDENTIAL}`)
      .htmlView('emails/contributorRequest-credential', {
        message: this.credentialData,
      })
  }
}
