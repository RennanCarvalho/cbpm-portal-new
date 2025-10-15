import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
  useToast,
  VStack,
  UnorderedList,
  ListItem,
  Heading,
  Grid
} from '@chakra-ui/react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserProps } from '../../DTO/UserDTO';
import { setupAPIClient } from '../../services/setupAPIClient';
import { downloadDocument } from '../../utils/downloadDocument';
import { generateTodayDate } from '../../utils/generateTodayDate';
import { printDocument } from '../../utils/printDocument';
import FormHeader from './FormHeader';
import cep from 'cep-promise';
import InputMask from 'react-input-mask'
import { FormTable } from './Table/FormTable';

type CEP = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
};

const InclusionOrUpdatePensionerData = (props: UserProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      nome: props.nome,
      nomeSocial: props.nomeSocial,
      sexo: props.sexo,
      dataNascimento: props.dataNascimento,
      cpf: props.cpf,
      rg: props.rg + (props.rgdg ? '-' + props.rgdg : ''),
      // rgdg: props.rgdg,
      nomeMae: props.nomeMae,
      nomePai: props.nomePai,
      telResidencial: props.telResidencial,
      telCelular: props.telCelular,
      telOutro: props.telOutro,
      email: props.email,
      logradouro: props.logradouro,
      numero: props.numero,
      complemento: props.complemento,
      bairro: props.bairro,
      cidade: props.cidade,
      uf: props.estado,
      cep: props.cep,
      matricula: props.matricula,
      file: [],
    },
  });

  const [address, setAddress] = useState<CEP>();
  const [CEP, setCEP] = useState('');

  const api = setupAPIClient();

  const fetchCallBack = useCallback(async () => {
    try {
      if (CEP.length === 8) {
        const response = await cep(CEP);

        setValue('logradouro', response.street);
        setValue('numero', response.number);
        setValue('bairro', response.neighborhood);
        setValue('cidade', response.city);
        setValue('uf', response.state);
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }, [CEP, setValue]);

  useEffect(() => {
    fetchCallBack().then(response => setAddress(response));
  }, [fetchCallBack]);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setCEP(e.currentTarget.value);
  };

  const toast = useToast();

  const [file, setFile] = useState([]);

  const [displayFileName, setDisplayFileName] = useState([]);

  const handleFile = (e: any) => {
    const fileEvent = e.target.files[0];
    //@ts-ignore
    file.push(fileEvent);
    //@ts-ignore
    setDisplayFileName([...displayFileName, file[file.length - 1].name])
    console.log(file)
    console.log(displayFileName)
    toast({
      title: 'Arquivo anexado com sucesso!',
      description:
        `Arquivo: ${fileEvent.name}`,
      status: 'success',
      duration: 3500,
      isClosable: true,
      position: 'top-right',
    });
  }
  async function onSubmit(data: any): Promise<void> {
    const formData = new FormData();
    const splitRg = data.rg.split("-", 2)
    formData.append('nome', data.nome);
    formData.append('nomeSocial', data.nomeSocial);
    formData.append('cpf', data.cpf);
    formData.append('rg', splitRg[0]);
    formData.append('rgdg', splitRg[1] ? splitRg[1] : ' ');
    formData.append('dataNascimento', data.dataNascimento);
    formData.append('nomeMae', data.nomeMae);
    formData.append('nomePai', data.nomePai);
    formData.append('logradouro', data.logradouro);
    formData.append('numero', data.numero);
    formData.append('complemento', data.complemento);
    formData.append('bairro', data.bairro);
    formData.append('cidade', data.cidade);
    formData.append('uf', data.uf);
    formData.append('cep', data.cep);
    formData.append('telResidencial', data.telResidencial);
    formData.append('telCelular', data.telCelular);
    formData.append('telOutro', data.telOutro);
    formData.append('email', data.email);

    for (let i = 0; i < file.length; i++) {
      formData.append('file[]', file[i]);
    }

    try {
      await api({
        method: 'post',
        url: '/user/forms/update-pensionista-data',
        data: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
      });

      toast({
        title: 'Confirmação de Envio',
        description:
          'Confirmamos o envio de mensagens através do Portal "Formulários".',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });

      reset();
    } catch (error: any) {
      const err = JSON.parse(error.request.response);

      if (err.document) {
        toast({
          description: `${err.document}`,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      } else if (err[0].type === 'extname') {
        toast({
          description:
            'Formato de arquivo inválido, formatos permitidos .png, .jpg, .jpeg, .pdf',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      } else if (err[0].type === 'size') {
        toast({
          description: 'O tamanho de cada arquivo deve ser no máximo 2MB',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      } else {
        toast({
          description: 'Ocorreu um erro inesperado. Tente novamente mais tarde',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
        console.log(err.message);
      }
    }
  }

  return (
    <Container
      centerContent
      maxW="1280px"
      mb={10}
      fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader
          title={
            ' INCLUSÃO E/OU ATUALIZAÇÃO DE DADOS DE PENSIONISTA BENEFICIÁRIO(A)'
          }
          attachment={'I'}
        />

        <Box mb="4rem" flexWrap="wrap" w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
          ORIENTAÇÕES E DOCUMENTOS COMPROBATÓRIOS - PENSIONISTA

          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
              1. O inciso VIII, do Artigo 34, da Lei Estadual Nº 452/74, inclui os pensionistas de militares estaduais como beneficiários obrigatórios do regime
de Assistência Médico–Hospitalar (AMH) da CBPM. Em razão disso, podem e devem ter seus dados incluídos e atualizados no Cadastro de
Beneficiários da AMH/CBPM, por meio do presente formulário, devidamente assinado.
            </Text>
          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
              2. Todos os documentos ora solicitados, quando necessários, devem ser entregues conjuntamente, pois resguardam direitos e garantias do
beneficiário(a), preservando a legalidade e integralidade dos registros.
            </Text>
          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
              3. Cópia simples do documento legal que contenham   o n º do RG, do CPF ou do CIN (Carteira de Identidade Nacional) do(a) pensionista. 
            </Text>
          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>4. Cópia do comprovante de endereço.</Text>
          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
              5. Cópia do demonstrativo de pagamento pensionista e cópia da certidão de óbito.
            </Text>
          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
              6. Documentos de procuração ou de interdição quando for o caso.
            </Text>
          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
              7. Inscrição provisória de 60 (sessenta) dias: Para dependente já inscrito(a) na CBPM como beneficiário(a) do regime de AMH, contudo, ainda com pendência em andamento no processo de pensão, e para não haver solução de continuidade em eventual tratamento de saúde em andamento, poderá requerer a inscrição provisória no regime de AMH da CBPM com a Cruz Azul de São Paulo, com validade de 60 (sessenta) dias, mediante o preenchimento do presente formulário, todavia juntando a este, uma cópia simples do protocolo do pedido de pensão junto à SPPREV, comprometendo-se pelas dívidas de coparticipação geradas se deferida a pensão ou o valor total do tratamento no caso de indeferimento do benefício. 
            </Text>
          </Box>
        </Box>

        <Box w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
            DADOS PESSOAIS DO(A) PENSIONISTA
          </Box>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Nome
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder="Nome"
              borderRadius="none"
              borderColor="gray.500"
              {...register('nome', {
                required: 'Campo obrigatório',
                maxLength: {
                  value: 70,
                  message: 'Tamanho máximo 70 caracteres',
                },
              })}
            />

            {errors.nome && <Text color="red">{errors.nome.message}</Text>}
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Nome Social
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder="NomeSocial"
              borderRadius="none"
              borderColor="gray.500"
              value={props.nomeSocial ? props.nomeSocial : 'NÃO POSSUI'}
              {...register('nomeSocial', {
                required: 'Campo obrigatório',
                maxLength: {
                  value: 70,
                  message: 'Tamanho máximo 70 caracteres',
                },
              })}
            />

            {errors.nomeSocial && <Text color="red">{errors.nomeSocial.message}</Text>}
          </FormControl>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>
            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Matrícula SPPREV
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                value={props.matricula}
                isReadOnly
                borderRadius="none"
                borderColor="gray.500"
              />
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                CPF
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="Preencha o CPF"
                borderRadius="none"
                borderColor="gray.500"
                {...register('cpf', {
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 11,
                    message: 'O CPF deve conter 11 dígitos',
                  },
                  maxLength: {
                    value: 11,
                    message: 'O CPF deve conter 11 dígitos',
                  },
                })}
              />

              {errors.cpf && <Text color="red">{errors.cpf.message}</Text>}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                RG/CIN
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="RG"
                borderRadius="none"
                borderColor="gray.500"
                {...register('rg', {
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 6,
                    message: 'O RG/CIN deve ter no mínimo 6 dígitos',
                  },
                  maxLength: {
                    value: 12,
                    message: 'O RG/CIN deve ter no máximo 12 dígitos',
                  },
                })}
              />
              {errors.rg && <Text color="red">{errors.rg.message}</Text>}
            </FormControl>

            {/* <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Dígito
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="Dígito"
                borderRadius="none"
                borderColor="gray.500"
                {...register('rgdg', {
                  required: 'Campo obrigatório',
                  maxLength: {
                    value: 1,
                    message: 'Deve ter somente um dígito',
                  },
                })}
              />
              {errors.rgdg && <Text color="red">{errors.rgdg.message}</Text>}
            </FormControl> */}
          </SimpleGrid>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Data de Nascimento
            </FormLabel>

            <Input
              as={InputMask}
              mask={'99/99/9999'}
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder="01/01/2021"
              borderRadius="none"
              borderColor="gray.500"
              {...register('dataNascimento', {
                required: 'Campo obrigatório',
                maxLength: {
                  value: 10,
                  message:
                    'Deve ter no máximo 10 caracteres no formato dd/mm/aaaa',
                },
                pattern: {
                  value:
                    /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4})/,
                  message: 'Formato correto dd/mm/aaaa',
                },
              })}
            />

            {errors.dataNascimento && (
              <Text color="red">{errors.dataNascimento.message}</Text>
            )}
          </FormControl>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Nome da Mãe
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="Nome da mãe"
                borderRadius="none"
                borderColor="gray.500"
                {...register('nomeMae', {
                  required: 'Campo obrigatório',
                  maxLength: {
                    value: 70,
                    message: 'Tamanho máximo 70 caracteres',
                  },
                })}
              />
              {errors.nomeMae && (
                <Text color="red">{errors.nomeMae.message}</Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Nome do Pai
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="Nome do pai"
                borderRadius="none"
                borderColor="gray.500"
                {...register('nomePai', {
                  required: 'Campo obrigatório',
                  maxLength: {
                    value: 70,
                    message: 'Tamanho máximo 70 caracteres',
                  },
                })}
              />
              {errors.nomePai && (
                <Text color="red">{errors.nomePai.message}</Text>
              )}
            </FormControl>
          </SimpleGrid>

          <Box
            fontWeight="bold"
            border="1px"
            textAlign="center"
            bg="gray.500"
            mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
          >
            ENDEREÇO DO(A) PENSIONISTA
          </Box>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }}>
            <FormControl isReadOnly>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Logradouro (endereço):
              </FormLabel>
              {address ? (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  id="logradouro"
                  borderRadius="none"
                  borderColor="gray.500"
                  value={address.street}
                  {...register('logradouro')}
                />
              ) : (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  id="logradouro"
                  borderRadius="none"
                  borderColor="gray.500"
                  value={props.logradouro}
                  {...register('logradouro')}
                />
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Número
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="Preencha o número"
                borderRadius="none"
                borderColor="gray.500"
                {...register('numero', {
                  required: 'Campo obrigatório',
                  maxLength: {
                    value: 6,
                    message: 'O número deve ter no máximo 6 dígitos',
                  },
                })}
              />

              {errors.numero && (
                <Text color="red">{errors.numero.message}</Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Complemento
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="Complemento"
                borderRadius="none"
                borderColor="gray.500"
                {...register('complemento', {
                  maxLength: {
                    value: 30,
                    message: 'Máximo 30 caracteres',
                  },
                })}
              />

              {errors.complemento && (
                <Text color="red">{errors.complemento.message}</Text>
              )}
            </FormControl>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Bairro
              </FormLabel>
              {address ? (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  id="bairro"
                  borderRadius="none"
                  borderColor="gray.500"
                  value={address.neighborhood}
                  {...register('bairro')}
                />
              ) : (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  id="bairro"
                  borderRadius="none"
                  borderColor="gray.500"
                  value={props.bairro}
                  {...register('bairro')}
                />
              )}
            </FormControl>

            <FormControl isReadOnly>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Cidade
              </FormLabel>
              {address ? (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  id="cidade"
                  borderRadius="none"
                  borderColor="gray.500"
                  value={address.city}
                  {...register('cidade')}
                />
              ) : (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  id="cidade"
                  borderRadius="none"
                  borderColor="gray.500"
                  value={props.cidade}
                  {...register('cidade')}
                />
              )}
            </FormControl>

            <FormControl isReadOnly>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                UF
              </FormLabel>
              {address ? (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  value={address.state}
                  {...register('uf')}
                />
              ) : (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  value={props.estado}
                  {...register('uf')}
                />
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                CEP
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="Digite o CEP"
                borderRadius="none"
                borderColor="gray.500"
                {...register('cep', {
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 8,
                    message: 'O CEP deve ter 8 dígitos',
                  },
                  maxLength: {
                    value: 8,
                    message: 'O CEP deve ter 8 dígitos',
                  },
                })}
                onChange={handleSearch}
              />
              {errors.cep && <Text color="red">{errors.cep.message}</Text>}
            </FormControl>
          </SimpleGrid>

          <Box
            fontWeight="bold"
            border="1px"
            textAlign="center"
            bg="gray.500"
            mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
          >
            CONTATOS DO(A) PENSIONISTA
          </Box>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Telefone Residencial
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="11999999999"
                borderRadius="none"
                borderColor="gray.500"
                {...register('telResidencial', {
                  minLength: {
                    value: 10,
                    message: 'Deve conter no mínimo 10 caracteres',
                  },
                  maxLength: {
                    value: 11,
                    message: 'Deve conter no máximo 11 caracteres',
                  },
                })}
              />

              {errors.telResidencial && (
                <Text color="red">{errors.telResidencial.message}</Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Telefone Celular
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                id="telCelular"
                placeholder="11999999999"
                borderRadius="none"
                borderColor="gray.500"
                {...register('telCelular', {
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 11,
                    message: 'Deve conter 11 caracteres',
                  },
                  maxLength: {
                    value: 11,
                    message: 'Deve conter 11 caracteres',
                  },
                })}
              />

              {errors.telCelular && (
                <Text color="red">{errors.telCelular.message}</Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Telefone Outro
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="11999999999"
                borderRadius="none"
                borderColor="gray.500"
                {...register('telOutro', {
                  minLength: {
                    value: 10,
                    message: 'Deve conter no mínimo 10 caracteres',
                  },
                  maxLength: {
                    value: 11,
                    message: 'Deve conter no máximo 11 caracteres',
                  },
                })}
              />

              {errors.telOutro && (
                <Text color="red">{errors.telOutro.message}</Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                E-mail
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                type="email"
                placeholder="Preencha o e-mail"
                borderRadius="none"
                borderColor="gray.500"
                {...register('email', {
                  required: 'Campo obrigatório',
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'E-mail inválido',
                  },
                })}
              />

              {errors.email && <Text color="red">{errors.email.message}</Text>}
            </FormControl>
          </SimpleGrid>
        </Box>
<br/><br/>
        <div>
          <Text fontWeight="700" textAlign="center">REQUERIMENTO/TERMO DE RESPONSABILIDADE E DE CONSENTIMENTO
          </Text>

          <br />
          <Text>
            REQUERIMENTO/TERMO DE RESPONSABILIDADE E DE CONSENTIMENTO
Requeiro a inclusão (ou atualização de dados) no cadastro de beneficiários do regime de
Assistência Médico–Hospitalar (AMH) CBPM, com fundamento no Inciso VIII, do Artigo 34, da Lei Estadual Nº
452/74.<br /><br />
Reconheço e autorizo os descontos nos códigos 070018 – Contribuição de Assistência e 080018
– Coparticipação financeira nas despesas de atendimentos ambulatoriais e hospitalares, nos termos do
parágrafo 3º, do artigo 30, da Lei nº 452/74.<br /><br />
Na hipótese de ser provisória a inscrição (conforme descrição no item 7 do quadro de
“Orientações e Documentos Comprobatórios” do presente formulário) e esta não ser aprovada pelo órgão
competente, comprometo-me a quitar o valor total do tratamento em razão da utilização do regime de
AMH/CBPM.<br /><br />
Caso ocorra alteração nos dados constantes desta Declaração, comprometo–me a comunicar
formalmente a CBPM, apresentando cópia da documentação pertinente.<br /><br />
Estou ciente que as declarações são de inteira responsabilidade do contribuinte, que
responderá por eventuais inconsistências das informações, nos termos da lei, bem como de indenizar o Estado
ou terceiros por prejuízos decorrentes, incluindo eventuais despesas médicas e hospitalares suportadas
indevidamente pelo regime de AMH/CBPM.<br /><br />
Nos termos do Inciso XII, do Artigo 5º, da Lei Federal nº 13.709/18, há o meu consentimento
para o tratamento dos presentes dados pela CBPM, para fins de AMH, no que preconiza a Lei Estadual Nº
452/74 e demais legislação vigente. Entende–se como tratamento de dados e consentimento o que está
definido nos Incisos X e XII, do Artigo 5º, da Lei Federal Nº 13.709/18, conforme a seguir transcrito:
          </Text>

          <br />
          <Box ml={{ base: 0, sm: 0, md: 4, lg: 4 }} fontSize="sm" mb="2rem">
            <Text>
              1) Tratamento: toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação,
utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação
ou controle da informação, modificação, comunicação, transferência, difusão ou extração.
            </Text>

            <br />
            <Text>
              2) Consentimento: manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados
pessoais para uma finalidade determinada.</Text>
          </Box>
        </div>

        <Flex justify="center" w="100%" mb="2rem">
          <VStack>
            <Text>Data, ________ / ____________ / _________ Assinatura contribuinte: ____________________________________</Text>
            <Text>Nome: ___________________ CPF: __________________________</Text>
          </VStack>

        </Flex>
        <br />
        <br />
        <br />
        <br />


        <Flex justify="center" w="100%" mb="2rem">
          <Box mb="4rem" flexWrap="wrap" w="55%">
            <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
              Documentos Apresentados e conferidos
            </Box>

            <Box
              border="1px"
              borderTop="none"
              borderColor="gray.500"
              w="100%"
              textAlign="left"
              p="0.5rem">
              <Text>
                <Box w="100%" p={4}>
      <Grid templateColumns="repeat(2, 1fr)">
        {/* Linha 1 */}
        <Text>(   ) RG/CPF do(a) Pensionista.</Text>
        <Text>(   ) Certidão de Óbito do militar Legador.</Text>

        {/* Linha 2 */}
        <Text>(   ) CIN do(a) Pensionista.</Text>
        <Text>(   ) Protocolo do pedido de pensão junto à SPPrev</Text>

        {/* Linha 3 */}
        <Text>(   ) Comprovante de endereço.</Text>
        <Text>(   ) Holerite do(a) Pensionista.</Text>

        {/* Linha 4 */}
        <Text>(   ) Procuração.</Text>
        <Text>(   ) Documento de interdição.</Text>

        {/* Linha 5 */}
        <Text>(   ) ___________________________</Text>
        <Text>(   ) ___________________________</Text>
      </Grid>
    </Box>
                <br/>


                <FormTable></FormTable>
                <br/>
                <b>(uso interno)</b>



              </Text>
            </Box>
          </Box>
        </Flex>


        <Box mt={10} mb={10} fontWeight="700" textAlign="center">
          <Text>
            Assinado no Portal de Serviços CBPM (cbpm.sp.gov.br) por meio de
            login e senha de {props.nome}, usuário cadastrado como contribuinte
            ativo no sistema AMH da CBPM
          </Text>

          <Text>Processado em {generateTodayDate()}</Text>

          <Text>
            Rua Alfredo Maia, 218 - Luz - São Paulo - SP - CEP: 01106-010 -
            Fone: 11-3315 3000
          </Text>

          <Text>
            Copyright © 2013 - Caixa Beneficente da Polícia Militar -
            251850.245062.294
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4, lg: 4 }}
          spacing={5}
          justifyItems="center"
        >
          <Button
            type="button"
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={{ base: 4, sm: 4, md: 5, lg: 5 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
            onClick={() =>
              downloadDocument('inclusao-ou-atualizacao-dados-pensionista')
            }
          >
            Baixar Preenchido
          </Button>

          <FormLabel
            fontWeight="700"
            whiteSpace="nowrap"
            htmlFor="files[]"
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={4}
            py={2}
            mb="none"
            borderRadius="3xl"
            _hover={{ color: 'none' }}
          >
            Anexar Documentos
          </FormLabel>

          <Input
            id="files[]"
            {...register('file')}
            type="file"
            display="none"
            onChange={handleFile}
          />
          <Button
            type="submit"
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={{ base: 7, sm: 7, md: 8, lg: 10 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
            isDisabled={displayFileName.length <= 2}
          >
            Enviar
          </Button>

          <Button
            type="button"
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={{ base: 4, sm: 4, md: 4, lg: 4 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
            onClick={() => printDocument()}
          >
            Imprimir Preenchido
          </Button>
        </SimpleGrid>

<Box
          my={16}
          display={'Flex'}
          alignItems="center"
          flexDirection={'column'}
        >
          <Heading as={'h1'} size={'md'}>
            {displayFileName.length} de 3 arquivo(s) anexado(s) - quantidade mínima necessária:
          </Heading>
          <UnorderedList ms={16} >
            {displayFileName.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Text textAlign="center" mt={6} fontWeight="700">
          Após preenchimento do formulário, clicar no botão &quot;Baixar
          Preenchido&quot;, salvar e anexar aos demais documentos comprobatórios
        </Text>

        <Center>
          <Link href="/area-restrita/servicos/formularios" passHref>
            <Button
              bg="blue.default"
              color="white.default"
              px={10}
              py={5}
              borderRadius="3xl"
              _hover={{ color: 'none' }}
              mt="4rem"
            >
              voltar
            </Button>
          </Link>
        </Center>
      </form>
    </Container>
  );
};

export default InclusionOrUpdatePensionerData;
