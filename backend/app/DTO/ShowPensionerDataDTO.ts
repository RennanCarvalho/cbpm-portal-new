export interface ShowPensionerDataDTO {
  nome: string
  estadoCivil: string
  idade: number
  dataNascimento: string
  sexo: string
  estado: string
  cidade: string
  bairro: string
  cep: string
  logradouro: string
  complemento: string
  numero: string
  telResidencial: string | null
  telCelular: string | null
  telOutro: string | null
  email: string
  cpf: string
  rg: string
  rgdg: string | null
  matricula: string | null
  orgaoEmissor: string
  ufIdentidade: string
  tipoIdentidade: string
}
