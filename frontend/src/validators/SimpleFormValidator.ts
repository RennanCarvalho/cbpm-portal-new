import * as Yup from 'yup';

const SimpleFormValidator = Yup.object().shape({
  nome: Yup.string().trim().required('Campo obrigatório'),

  dataNascimento: Yup.string()
    .max(10, 'Data de nascimento incorreta')
    .matches(
      /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d{2}/,
      'Formato correto 00/00/0000'
    )
    .trim()
    .required('Campo obrigatório'),

  cpf: Yup.string()
    .min(10, 'O CPF deve conter 11 dígitos')
    .max(11, 'O CPF deve conter 11 dígitos')
    .trim()
    .required('Campo obrigatório'),

  rg: Yup.string()
    .min(6, 'O RG deve ter no mínimo 6 dígitos')
    .max(12, 'O RG deve ter no máximo 12 dígitos')
    .trim()
    .required('Campo obrigatório'),

  rgdg: Yup.string()
    .max(1, 'Deve ter somente um dígito')
    .trim()
    .required('Campo obrigatório'),

  nomeMae: Yup.string().trim().required('Campo obrigatório'),

  nomePai: Yup.string().trim().required('Campo obrigatório'),

  /*telResidencial: Yup.string()
    .min(8, 'O telefone deve conter no mínimo 8 dígitos')
    .max(13, 'O telefone deve conter no máximo 13 dígitos')
    .trim()
    .optional(),*/

  telCelular: Yup.string()
    .min(8, 'O telefone deve conter no mínimo 8 dígitos')
    .max(13, 'O telefone deve conter no máximo 13 dígitos')
    .trim()
    .required('Campo obrigatório'),

  /*telOutro: Yup.string()
    .min(8, 'O telefone deve conter no mínimo 8 dígitos')
    .max(13, 'O telefone deve conter no máximo 13 dígitos')
    .trim()
    .optional(),*/

  email: Yup.string()
    .email('E-mail inválido')
    .trim()
    .required('Campo obrigatório'),
});

export default SimpleFormValidator;
