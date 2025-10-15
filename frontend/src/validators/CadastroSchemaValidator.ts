import * as Yup from 'yup';

const CadastroSchema = Yup.object().shape({
  cpf: Yup.string()
    .min(10, 'CPF incorreto')
    .max(11, 'CPF incorreto')
    .trim()
    .required('Campo obrigatório'),

  re: Yup.string().max(10, 'RE incorreto').trim(),

  matricula: Yup.string().max(10, 'Matrícula incorreta').trim(),

  email: Yup.string()
    .email('E-mail inválido')
    .trim()
    .required('Campo obrigatório'),

  confirmaEmail: Yup.string()
    .oneOf([Yup.ref('email'), null], 'E-mail de confirmação incorreto')
    .trim()
    .required('Campo obrigatório'),

  telCelular: Yup.string()
    .min(8, 'Celular incorreto')
    .max(13, 'Celular incorreto')
    .trim()
    .required('Campo obrigatório'),

  rg: Yup.string()
    .min(6, 'RG incorreto')
    .max(12, 'RG incorreto')
    .trim()
    .required('Campo obrigatório'),

  dtnascimento: Yup.string()
    .max(10, 'Data de nascimento incorreta')
    .matches(
      /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d{2}/,
      'Formato correto 00/00/0000'
    )
    .trim()
    .required('Campo obrigatório'),

  senha: Yup.string().trim().required('Campo obrigatório'),
  /*.matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      'A senha deve conter letras maiúsculas e minúsculas, números e símbolos'
    ),*/

  confirmaSenha: Yup.string()
    .oneOf([Yup.ref('senha'), null], 'Senha de confirmação incorreta')
    .trim()
    .required('Campo obrigatório'),
});

export default CadastroSchema;
