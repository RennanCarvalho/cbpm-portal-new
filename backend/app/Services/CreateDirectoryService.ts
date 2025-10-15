import fs from 'fs'

type DirectoryData = {
  id: number
  formName: string
}

type Paths = {
  absolutePath: string
  relativePath: string
}

export default class CreateDirectoryService {
  public static async execute({ id, formName }: DirectoryData): Promise<Paths> {
    // Formata a data e hora
    const newDate = Intl.DateTimeFormat('pt-br', {
      dateStyle: 'short',
      timeStyle: 'medium',
    }).format(Date.now())

    // Troca as barras transversais e espaços em branco
    // por underline
    const formattedDate = newDate.replace(/\//g, '_').replace(' ', '_')

    const userId = id.toString()

    const rootPath = process.env.PWD

    // Caminho absoluto da pasta de upload
    const absolutePath = `${rootPath}/uploads/${userId}/${formName}/${formattedDate}/`

    // Caminho relativo da pasta de upload
    const relativePath = 'uploads/' + absolutePath.split('/').slice(5).join('/')

    // Verifica se o diretório informado já existe,
    // caso não, realiza a criação
    if (!fs.existsSync(relativePath)) {
      fs.mkdir(relativePath, { recursive: true }, (err) => {
        if (err) {
          console.log('Erro ao criar diretório', err)
        }
      })
      return { absolutePath, relativePath }
    }
    return { absolutePath, relativePath }
  }
}
