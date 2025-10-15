export default interface CreateUserServiceDTO {
  id_pessoa: number
  id_provedor: number
  cpf: string
  email: string
  senha: string
  conta_ativada?: boolean
  categoria: string
}
