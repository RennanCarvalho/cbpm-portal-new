import CreateUserServiceDTO from '../DTO/CreateUserServiceDTO'
import UsuarioPortalCBPM from '../Models/UsuarioPortalCBPM'

export default class CreateUserService {
  public static async Create({
    id_pessoa,
    id_provedor,
    cpf,
    email,
    senha,
    categoria,
  }: CreateUserServiceDTO): Promise<UsuarioPortalCBPM> {
    const usuario = await UsuarioPortalCBPM.create({
      id_pessoa,
      id_provedor,
      cpf,
      email,
      senha,
      conta_ativada: false,
      categoria,
    })

    return usuario
  }
}
