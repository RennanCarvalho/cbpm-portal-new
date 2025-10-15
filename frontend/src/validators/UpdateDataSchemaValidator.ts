import * as Yup from 'yup';

const UpdateDataSchema = Yup.object().shape({
  cep: Yup.string().max(8).trim().required(),
  numero: Yup.string().when(['cep'], {
    is: (cep: string) => !!cep,
    then: Yup.string().max(10).required('Digite o número'),
  }),
  complemento: Yup.string().max(15).trim(),
  files: Yup.mixed()
    .required()
    .required('prenchar o CEP')
    .test('filesize', 'tamanho máximo 1mb', value => {
      return value && value[0].size <= 1000000;
    }),
});

export default UpdateDataSchema;
