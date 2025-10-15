import * as Yup from 'yup';

const FormContactValidator = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .trim()
    .required('Campo obrigatório'),

  nome: Yup.string().trim().required('Campo obrigatório'),

  cpf: Yup.string()
    .min(10, 'O CPF deve ter 11 dígitos')
    .max(11, 'O CPF deve ter 11 dígitos')
    .trim()
    .required('Campo obrigatório'),

  re: Yup.string()
    .max(10, 'O RE ou mátricula deve ter no máximo 10 dígitos')
    .trim(),

  telCelular: Yup.string()
    .min(8, 'O Celular deve ter no mínimo 8 dígitos')
    .max(13, 'O Celular deve ter no máximo 13 dígitos')
    .trim()
    .required('Campo obrigatório'),

  telResidencial: Yup.string()
    .min(8, 'O telefone deve conter no mínimo 8 dígitos')
    .max(13, 'O telefone deve conter no máximo 13 dígitos')
    .trim(),

  motivo: Yup.string().trim().required('Campo obrigatório'),

  mensagem: Yup.string().trim().required('Campo obrigatório'),
});

export default FormContactValidator;
