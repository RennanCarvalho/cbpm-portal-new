import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Text,
  useToast,
  VStack,
  UnorderedList,
  ListItem,
  Heading

} from '@chakra-ui/react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserProps } from '../../DTO/UserDTO';
import { setupAPIClient } from '../../services/setupAPIClient';
import { downloadDocument } from '../../utils/downloadDocument';
import { generateTodayDate } from '../../utils/generateTodayDate';
import { printDocument } from '../../utils/printDocument';
import FormShowUserData from '../FormShowUserData';
import FormHeader from './FormHeader';
import cep from 'cep-promise';
import InputMask from 'react-input-mask'

type CEP = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
};

const CompanionExclusion = (props: UserProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const [address, setAddress] = useState<CEP>();
  const [CEP, setCEP] = useState('');

  const api = setupAPIClient();

  const fetchCallBack = useCallback(async () => {
    try {
      if (CEP.length === 8) {
        const response = await cep(CEP);
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }, [CEP]);

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
    formData.append('dataNascimento', data.dataNascimento);
    formData.append('cpf', data.cpf);
    formData.append('rg', splitRg[0]);
    formData.append('rgdg', splitRg[1] ? splitRg[1] : ' ');
    formData.append('parentesco', data.parentesco);

    formData.append('nomeTestemunha', data.nomeTestemunha);
    formData.append('nomeTestemunhaSocial', data.nomeTestemunhaSocial);
    formData.append('sexoTestemunha', data.sexoTestemunha);
    formData.append('dataNascimentoTestemunha', data.dataNascimentoTestemunha);
    formData.append('cpfTestemunha', data.cpfTestemunha);
    formData.append('rgTestemunha', data.rgTestemunha);
    formData.append('rgdgTestemunha', ' ');
    formData.append('logradouroTestemunha', data.logradouroTestemunha);
    formData.append('numeroTestemunha', data.numeroTestemunha);
    formData.append('complementoTestemunha', data.complementoTestemunha);
    formData.append('bairroTestemunha', data.bairroTestemunha);
    formData.append('cidadeTestemunha', data.cidadeTestemunha);
    formData.append('cepTestemunha', data.cepTestemunha);
    formData.append('telTestemunha', data.telTestemunha);

    for (let i = 0; i < file.length; i++) {
      formData.append('file[]', file[i]);
    }

    try {
      {
        {
          await api({
            method: 'post',
            url: '/user/forms/companion-exclusion',
            data: formData,
            headers: {
              'content-type': 'multipart/form-data',
            },
          });
        }
      }

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
            'EXCLUSÃO DE COMPANHEIRA(O)/ENTEADO(A)/DISSOLUÇÃO DE UNIÃO ESTÁVEL'
          }
          attachment={'H'}
        />

        <Box mb="4rem" flexWrap="wrap" w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
            ORIENTAÇÕES E DOCUMENTOS NECESSÁRIOS
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
            1. Conforme Inciso I, do Artigo 34, da Lei Estadual Nº 452/74, a(o) cônjuge e a(o) companheira(o) é beneficiária(o) do regime de
Assistência Médico-Hospitalar (AMH) da CBPM. O fim da União Estável extingue este direito.
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
            2. O PM Contribuinte deve solicitar por meio do presente requerimento à CBPM, a exclusão da(o) companheira(o), declarando a
interrupção/dissolução da União Estável. 
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
            3. Relacionar no requerimento 01 (uma) testemunha que comprove a dissolução da união estável. A testemunha não pode ser parente
e nem ter o mesmo endereço.
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
              4. A comprovação da dissolução de união estável pode ser feita ainda mediante a apresentação de Instrumento Particular de Dissolução
de União Estável devidamente registrado em Cartório de Registro de Títulos e Documentos, ou mediante apresentação de nova Certidão
de Casamento com outra pessoa. 
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
              5. Filhos legítimos havidos em comum não podem ser excluídos, pois são beneficiários obrigatórios e assim permanecerão até completar
21 anos de idade, e os inválidos, que serão assistidos enquanto perdurar a invalidez, conforme o Artigo 34, da Lei Estadual Nº 452/74. 
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
            6. Os enteados devem ser excluídos, pois conforme o Nº 1, do § 2º, do Artigo 34, da Lei Estadual Nº 452/74, equiparam-se aos filhos
legítimos enquanto durar o casamento ou a união estável. Desta forma, devido a exclusão da(o) companheira(o), os enteados
eventualmente inscritos na CBPM, devem ser abaixo relacionados e excluídos. 
            </Text>
          </Box>
        </Box>

        <Box w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
            DADOS PESSOAIS DO(A) PM CONTRIBUINTE
          </Box>

          <FormShowUserData
            formLabel={'Nome'}
            userProps={props.nome}
            width={'100%'}
          />

          <FormShowUserData
            formLabel={'Nome Social'}
            userProps={props.nomeSocial ? props.nomeSocial : 'NÃO POSSUI'}
            width={'100%'}
          />

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
            <FormShowUserData
              formLabel={'RE'}
              userProps={props.identidade ? props.identidade : 'NÃO SE APLICA'}
            />

            <FormShowUserData
              formLabel={'Posto/Graduação'}
              userProps={
                props.postoPolicial ? props.postoPolicial : 'NÃO SE APLICA'
              }
            />

            <FormShowUserData formLabel={'CPF'} userProps={props.cpf} />

            {/* <FormShowUserData formLabel={'RG'} userProps={props.rg + props.rgdg} /> */}
            <FormShowUserData formLabel={'RG'} userProps={props.rg + (props.rgdg ? '-' + props.rgdg : '')} />

            {/* <FormShowUserData
              formLabel={'Dígito'}
              userProps={props.rgdg ? props.rgdg : 'NÃO POSSUI'}
            /> */}
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>
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
                defaultValue={props.dataNascimento}
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
                É PM inativo(a) ?
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                defaultValue={props.NumeroSPPrev ? 'SIM' : 'NÃO'}
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
                Registro SPPREV (Inativo)
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                defaultValue={
                  props.NumeroSPPrev ? props.NumeroSPPrev : 'NÃO POSSUI'
                }
                isReadOnly
                borderRadius="none"
                borderColor="gray.500"
              />
            </FormControl>
          </SimpleGrid>

          <Box
            fontWeight="bold"
            border="1px"
            textAlign="center"
            bg="gray.500"
            mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
          >
            ENDEREÇO DO(A) PM CONTRIBUINTE
          </Box>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }}>
            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Logradouro
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                defaultValue={props.logradouro}
                isReadOnly
                borderColor="gray.500"
              />
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
                borderRadius="none"
                defaultValue={props.numero}
                isReadOnly
                borderColor="gray.500"
              />
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
                borderRadius="none"
                defaultValue={
                  props.complemento ? props.complemento : 'NÃO POSSUI'
                }
                isReadOnly
                borderColor="gray.500"
              />
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

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                defaultValue={props.bairro}
                isReadOnly
                borderColor="gray.500"
              />
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Cidade
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                defaultValue={props.cidade}
                isReadOnly
                borderColor="gray.500"
              />
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                UF
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                defaultValue={props.estado}
                isReadOnly
                borderColor="gray.500"
              />
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
                borderRadius="none"
                defaultValue={props.cep}
                isReadOnly
                borderColor="gray.500"
              />
            </FormControl>
          </SimpleGrid>

          <Box
            fontWeight="bold"
            border="1px"
            textAlign="center"
            bg="gray.500"
            mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
          >
            CONTATOS DO(A) PM CONTRIBUINTE
          </Box>

          <SimpleGrid mb="3rem" columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Telefone Residencial
              </FormLabel>

              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                defaultValue={
                  props.telResidencial ? props.telResidencial : 'NÃO POSSUI'
                }
                isReadOnly
                borderColor="gray.500"
              />
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
                borderRadius="none"
                defaultValue={
                  props.telCelular ? props.telCelular : 'NÃO POSSUI'
                }
                isReadOnly
                borderColor="gray.500"
              />
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
                borderRadius="none"
                defaultValue={props.telOutro ? props.telOutro : 'NÃO POSSUI'}
                isReadOnly
                borderColor="gray.500"
              />
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
                borderRadius="none"
                defaultValue={props.email}
                isReadOnly
                borderColor="gray.500"
              />
            </FormControl>
          </SimpleGrid>

          <Box mb="3rem">
            <Box
              fontWeight="bold"
              border="1px"
              textAlign="center"
              bg="gray.500"
              borderRadius="none"
            >
              IDENTIFICAÇÃO - COMPANHEIRA(O)/ENTEADO(A)
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
                placeholder="Nome Social"
                borderRadius="none"
                borderColor="gray.500"
                {...register('nomeSocial', {
                  required: 'Campo obrigatório',
                  maxLength: {
                    value: 70,
                    message: 'Tamanho máximo 70 caracteres',
                  },
                })}
              />

              {errors.nome && <Text color="red">{errors.nome.message}</Text>}
            </FormControl>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
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
                  RG
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
                      message: 'O RG deve ter no mínimo 6 dígitos',
                    },
                    maxLength: {
                      value: 12,
                      message: 'O RG deve ter no máximo 12 dígitos',
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

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Parentesco
                </FormLabel>

                <Select
                  {...register('parentesco')}
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  <option selected value={2}>
                    COMPANHEIRA(O)
                  </option>

                  <option value={7}>ENTEADO(A)</option>
                </Select>
              </FormControl>
            </SimpleGrid>
          </Box>

          <Box mb="3rem">
            <Box
              fontWeight="bold"
              border="1px"
              textAlign="center"
              bg="gray.500"
              borderRadius="none"
            >
              TESTEMUNHA
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
                {...register('nomeTestemunha', {
                  maxLength: {
                    value: 70,
                    message: 'Tamanho máximo 70 caracteres',
                  },
                })}
              />

              {errors.nomeTestemunha && (
                <Text color="red">{errors.nomeTestemunha.message}</Text>
              )}
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
                {...register('nomeTestemunhaSocial', {
                  maxLength: {
                    value: 70,
                    message: 'Tamanho máximo 70 caracteres',
                  },
                })}
              />

              {errors.nomeTestemunha && (
                <Text color="red">{errors.nomeTestemunha.message}</Text>
              )}
            </FormControl>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Sexo
                </FormLabel>

                <Select
                  placeholder="Selecione o sexo"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  {...register('sexoTestemunha')}
                >
                  <option value={1}>FEMININO</option>
                  <option value={2}>MASCULINO</option>
                </Select>
              </FormControl>

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
                  {...register('dataNascimentoTestemunha', {
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

                {errors.dataNascimentoTestemunha && (
                  <Text color="red">
                    {errors.dataNascimentoTestemunha.message}
                  </Text>
                )}
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
                  {...register('cpfTestemunha', {
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

                {errors.cpfTestemunha && (
                  <Text color="red">{errors.cpfTestemunha.message}</Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  RG
                </FormLabel>

                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  placeholder="RG"
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register('rgTestemunha', {
                    minLength: {
                      value: 6,
                      message: 'O RG deve ter no mínimo 6 dígitos',
                    },
                    maxLength: {
                      value: 12,
                      message: 'O RG deve ter no máximo 12 dígitos',
                    },
                  })}
                />
                {errors.rgTestemunha && (
                  <Text color="red">{errors.rgTestemunha.message}</Text>
                )}
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
                  {...register('rgdgTestemunha', {
                    maxLength: {
                      value: 1,
                      message: 'Deve ter somente um dígito',
                    },
                  })}
                />
                {errors.rgdgTestemunha && (
                  <Text color="red">{errors.rgdgTestemunha.message}</Text>
                )}
              </FormControl> */}
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Logradouro (endereço):
                </FormLabel>
                {address ? (
                  <Input
                    fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                    borderRadius="none"
                    borderColor="gray.500"
                    value={address.street}
                    {...register('logradouroTestemunha')}
                  />
                ) : (
                  <Input
                    fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={' '}
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
                  {...register('numeroTestemunha', {
                    maxLength: {
                      value: 6,
                      message: 'O número deve ter no máximo 6 dígitos',
                    },
                  })}
                />

                {errors.numeroTestemunha && (
                  <Text color="red">{errors.numeroTestemunha.message}</Text>
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
                  placeholder="complemento"
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register('complementoTestemunha', {
                    maxLength: {
                      value: 30,
                      message: 'Máximo 30 caracteres',
                    },
                  })}
                />

                {errors.complementoTestemunha && (
                  <Text color="red">
                    {errors.complementoTestemunha.message}
                  </Text>
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
                    borderRadius="none"
                    borderColor="gray.500"
                    value={address.neighborhood}
                    {...register('bairroTestemunha')}
                  />
                ) : (
                  <Input
                    fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={' '}
                  />
                )}
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Cidade
                </FormLabel>
                {address ? (
                  <Input
                    fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                    borderRadius="none"
                    borderColor="gray.500"
                    value={address.city}
                    {...register('cidadeTestemunha')}
                  />
                ) : (
                  <Input
                    fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={' '}
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
                  {...register('cepTestemunha', {
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
                {errors.cepTestemunha && (
                  <Text color="red">{errors.cepTestemunha.message}</Text>
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
                  placeholder="11999999999"
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register('telTestemunha', {
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

                {errors.telTestemunha && (
                  <Text color="red">{errors.telTestemunha.message}</Text>
                )}
              </FormControl>
            </SimpleGrid>
          </Box>
        </Box>

        <div>
          <Text fontWeight="700" textAlign="center">
            REQUERIMENTO/TERMO DE RESPONSABILIDADE E DE CONSENTIMENTO
          </Text>

          <br />
          <Text>
          Requeiro a exclusão da(o) ex-companheira(o) ora identificada(o), do rol de beneficiários
do regime de Assistência Médico-Hospitalar (AMH) da CBPM, com fundamento no Artigo 34, da Lei
Estadual Nº 452/74. 
          </Text>

          <br />
          <Text>
          Declaro que houve a dissolução da União Estável, não mais constituindo família. 
          </Text>

          <br />
          <Text>
          Reconheço que até a data de exclusão da(o) ex–companheira(o) do sistema de cadastro
do rol de beneficiários da CBPM, haverá o desconto no código 080018 – coparticipação financeira nas
eventuais despesas de atendimentos ambulatoriais, hospitalares e de obstetrícia até então realizados,
nos termos do § 3º, do artigo 30, da Lei nº 452/74, sendo que a partir da referida data, a(o) excompanheira(o) não mais tem direito a cobertura da assistência médico-hospitalar do regime da CBPM
com a Cruz Azul.
          </Text>

          <br />
          <Text>
          Havendo enteado(a)(s) inscritos(as), requeiro a exclusão dos acima identificados, com
fundamento no Nº 01, do § 2º, do Artigo 34, da Lei Estadual Nº 452/74. 

          </Text>

          <br />
          <Text>
          Estou ciente que declarações falsas sujeitam os seus autores às sanções previstas no
Artigo 299, do Código Penal (Falsidade Ideológica), bem como a indenizar o Estado ou terceiros por
prejuízos decorrentes, e por fim, às previstas no Regulamento Disciplinar da PMESP. 
          </Text>

          <br />
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
            onClick={() => downloadDocument('exclusao-de-companheiro')}
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

export default CompanionExclusion;
