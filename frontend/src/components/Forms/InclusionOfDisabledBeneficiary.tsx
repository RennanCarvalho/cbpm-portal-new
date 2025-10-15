import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  ListItem,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  useToast,
  VStack,
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
import FormShowUserData from '../FormShowUserData';
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

const InclusionOfDisabledBeneficiary = (props: UserProps) => {
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
    formData.append('sexo', data.sexo);
    formData.append('dataNascimento', data.dataNascimento);
    formData.append('cpf', data.cpf);
    formData.append('rg', splitRg[0]);
    formData.append('rgdg', splitRg[1] ? splitRg[1] : ' ');
    formData.append('parentesco', data.parentesco);
    formData.append('estadoCivil', data.estadoCivil);
    formData.append('nomeMae', data.nomeMae);
    formData.append('nomePai', data.nomePai);
    formData.append('invalidez', data.invalidez);
    formData.append('invalidezDefinitiva', data.invalidezDefinitiva);
    formData.append('cid', data.cid);
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
      {
        await api({
          method: 'post',
          url: '/user/forms/inclusion-of-disabled-beneficiary',
          data: formData,
          headers: {
            'content-type': 'multipart/form-data',
          },
        });
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
          title={'INCLUSÃO DE BENEFICIÁRIO(A) COM INVALIDEZ'}
          attachment={'F'}
        />

        <Box mb="4rem" flexWrap="wrap" w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
            ORIENTAÇÕES E DOCUMENTOS COMPROBATÓRIOS
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
              1. Conforme o Inciso II e parágrafo 3º, do Artigo 34, da Lei Estadual Nº 452/74, filhos(as), ou enteados(as), que por meio de
comprovação de atestado emitido pelo órgão médico da Polícia Militar, forem considerados inválidos para o trabalho, são
atendidos pela Assistência Médico–Hospitalar (AMH) da CBPM, enquanto perdurar a invalidez. Desta forma, deve ser registrada
no cadastro do(a) beneficiário(a) a identificação da necessidade especial, conforme a correspondente Classificação Internacional
de Doenças (CID). Para tanto, são necessários os documentos relacionados nos tópicos seguintes a serem encaminhados com o
presente requerimento, devidamente assinado pelo(a) contribuinte ou seu representante legal.
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
              2. A inclusão do dependente como beneficiário portador de invalidez, só será processada com apresentação de laudo emitido pelo
Centro Médico da Polícia Militar, acompanhado da documentação produzida pela CBPM. A partir deste Requerimento, o
dependente deve ser apresentado naquele Centro para ser submetido a Exame por Junta Médica.
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
              3. Todos os documentos ora solicitados, devem ser entregues conjuntamente, pois fazem parte de um mesmo processo e produzem
provas que resguardam direitos e garantias do próprio contribuinte e dos seus beneficiários, preservando a legalidade e
integralidade dos registros.
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
              4. . Cópia simples da certidão de nascimento do(a) dependente (com emissão inferior a 6 meses, para os maiores de 12 anos).
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
              5. Atestado de Saúde (com emissão inferior a 3 (três) meses) declarando, discriminadamente, que o dependente é portador de incapacidade ou invalidez conforme o parágrafo 1º do art. 2º e inciso IV do Art. 4º da RESOLUÇÃO CFM Nº 2.381/2024 - CFM.
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
              6. Cópia simples dos documentos legais que contenham o n º do RG, do CPF ou do CIN (Carteira de Identidade Nacional) do(a) dependente e do(a) militar contribuinte.
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
              7.  Cópia do último demonstrativo de pagamento (holerite) do militar contribuinte.
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
              8. Para fins de comprovação de dependência econômica, apresentar pelo menos 02 (dois) dos documentos relacionados a seguir,
com parâmetro no artigo 15, do Decreto Estadual Nº 52.860, de 02 de abril de 2008: 
            </Text>

            <UnorderedList styleType="none" spacing={1}>
              <ListItem>
                a. Declaração pública de dependência econômica, feita perante Tabelião de Notas.
              </ListItem>

              <ListItem>
                b. Cópia de declaração de Imposto de Renda, em que conste como dependente(s) do contribuinte.
              </ListItem>

              <ListItem>c. Disposições testamentárias.</ListItem>

              <ListItem>d. Comprovação de residência em comum.</ListItem>

              <ListItem>
                e. Apólice de seguro em que conste o(a) dependente como beneficiário(a) do contribuinte.
              </ListItem>

              <ListItem>
                f. Registro em associação de classe onde conste o(a) dependente como beneficiário(a) do contribuinte.
              </ListItem>

              <ListItem>
                g. Inscrição em instituição de assistência médica do(a) dependente como beneficiário(a) do contribuinte.
              </ListItem>
            </UnorderedList>
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

            <FormShowUserData formLabel={'RG/CIN'} userProps={props.rg + (props.rgdg ? '-' + props.rgdg : '')} />

            {/* <FormShowUserData
              formLabel={'Dígito'}
              userProps={props.rgdg ? props.rgdg : 'NÃO POSSUI'}
            /> */}
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>
            <FormShowUserData
              formLabel={'Data de Nascimento'}
              userProps={props.dataNascimento}
            />

            <FormShowUserData
              formLabel={'É PM inativo(a) ?'}
              userProps={props.NumeroSPPrev ? 'SIM' : 'NÃO'}
            />

            <FormShowUserData
              formLabel={'Registro SPPREV (Inativo)'}
              userProps={props.NumeroSPPrev ? props.NumeroSPPrev : 'NÃO POSSUI'}
            />
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
            <FormShowUserData
              formLabel={'Logradouro'}
              userProps={props.logradouro}
            />

            <FormShowUserData formLabel={'Número'} userProps={props.numero} />

            <FormShowUserData
              formLabel={'Complmento'}
              userProps={props.complemento ? props.complemento : 'NÃO POSSUI'}
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
            <FormShowUserData formLabel={'Bairro'} userProps={props.bairro} />

            <FormShowUserData formLabel={'Cidade'} userProps={props.cidade} />

            <FormShowUserData formLabel={'UF'} userProps={props.estado} />

            <FormShowUserData formLabel={'CEP'} userProps={props.cep} />
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
            <FormShowUserData
              formLabel={'Telefone Residencial'}
              userProps={
                props.telResidencial ? props.telResidencial : 'NÃO POSSUI'
              }
            />

            <FormShowUserData
              formLabel={'Telefone Celular'}
              userProps={props.telCelular ? props.telCelular : 'NÃO POSSUI'}
            />

            <FormShowUserData
              formLabel={'Telefone Outro'}
              userProps={props.telOutro ? props.telOutro : 'NÃO POSSUI'}
            />

            <FormShowUserData formLabel={'E-mail'} userProps={props.email} />
          </SimpleGrid>

          <Box mb="3rem">
            <Box
              fontWeight="bold"
              border="1px"
              textAlign="center"
              bg="gray.500"
              borderRadius="none"
            >
              DADOS PESSOAIS DO DEPENDENTE
            </Box>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Nome
              </FormLabel>

              <Input
                placeholder="Nome"
                w="100%"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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
                placeholder="Nome Social"
                w="100%"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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
                  Sexo
                </FormLabel>

                <Select
                  {...register('sexo')}
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  <option selected value={1}>
                    FEMININO
                  </option>
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
                  placeholder="01/01/2021"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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
                  id="cpf"
                  placeholder="Preencha o CPF"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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
                  placeholder={'00000000000'}
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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
                  placeholder="Dígito"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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

            <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} mt={3}>
              <Stack
                align="flex-start"
                border="1px"
                borderColor="gray.500"
                mb={{ base: 2, sm: 2, md: 0, lg: 0 }}
              >
                <RadioGroup defaultValue="SIM">
                  <HStack ml={4} p={2}>
                    <Text>INVÁLIDO:</Text>

                    <Radio {...register('invalidez')} value="SIM">
                      SIM
                    </Radio>

                    <Radio {...register('invalidez')} value="NÃO">
                      NÃO
                    </Radio>
                  </HStack>
                </RadioGroup>
              </Stack>

              <Stack align="flex-start" border="1px" borderColor="gray.500">
                <RadioGroup defaultValue="NÃO">
                  <HStack ml={4} p={2}>
                    <Text>INVALIDEZ DEFINITIVA:</Text>

                    <Radio {...register('invalidezDefinitiva')} value="SIM">
                      SIM
                    </Radio>

                    <Radio {...register('invalidezDefinitiva')} value="NÃO">
                      NÃO
                    </Radio>
                  </HStack>
                </RadioGroup>
              </Stack>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
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
                  <option selected value={3}>
                    FILHO(A)
                  </option>
                  <option value={7}>ENTEADO(A)</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Estado Civil
                </FormLabel>

                <Select
                  {...register('estadoCivil')}
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  <option selected value={1}>
                    SOLTEIRO(A)
                  </option>
                  <option value={2}>VIÚVO(A)</option>
                  <option value={3}>CASADO(A)</option>
                  <option value={4}>DIVORCIADO(A)</option>
                  <option value={5}>SEPARADO(A)</option>
                  <option value={6}>UNIÃO ESTÁVEL(A)</option>
                </Select>
              </FormControl>
            </SimpleGrid>

            <Flex>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Necessidade Especial – Classificação Internacional de Doenças
                  (CID):
                </FormLabel>

                <Input
                  placeholder="CID"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register('cid', {
                    required: 'Campo obrigatório',
                    maxLength: {
                      value: 5,
                      message: 'Dete ter no Máximo de 5 caracteres',
                    },
                  })}
                />

                {errors.cid && <Text color="red">{errors.cid.message}</Text>}
              </FormControl>
            </Flex>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Nome da Mãe
                </FormLabel>

                <Input
                  placeholder="Nome da mãe"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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
                  placeholder="Nome do pai"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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
              ENDEREÇO DO DEPENDENTE
            </Box>

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
                    w="100%"
                    fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                    id="logradouro"
                    borderRadius="none"
                    borderColor="gray.500"
                    value={address.street}
                    {...register('logradouro')}
                  />
                ) : (
                  <Input
                    w="100%"
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
                  placeholder="Preencha o número"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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
                  placeholder="Complemento"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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
                    w="100%"
                    fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                    id="bairro"
                    borderRadius="none"
                    borderColor="gray.500"
                    value={address.neighborhood}
                    {...register('bairro')}
                  />
                ) : (
                  <Input
                    w="100%"
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
                    w="100%"
                    fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                    id="cidade"
                    borderRadius="none"
                    borderColor="gray.500"
                    value={address.city}
                    {...register('cidade')}
                  />
                ) : (
                  <Input
                    w="100%"
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
                  UF
                </FormLabel>
                {address ? (
                  <Input
                    w="100%"
                    fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                    borderRadius="none"
                    borderColor="gray.500"
                    value={address.state}
                    {...register('uf')}
                  />
                ) : (
                  <Input
                    w="100%"
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
                  w="100%"
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
              CONTATOS DO DEPENDENTE
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
                  placeholder="11999999999"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register('telResidencial', {
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
                  id="telCelular"
                  placeholder="11999999999"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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
                  placeholder="11999999999"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register('telOutro', {
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
                  type="email"
                  placeholder="Preencha o e-mail"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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

                {errors.email && (
                  <Text color="red">{errors.email.message}</Text>
                )}
              </FormControl>
            </SimpleGrid>
          </Box>
        </Box>

        <div>
          <Text fontWeight="700" textAlign="center">REQUERIMENTO/TERMO DE RESPONSABILIDADE E DE CONSENTIMENTO
          </Text>

          <br />
          <Text>
            Requeiro a inclusão do(a) dependente acima qualificado(a) e que vive sob minha
dependência econômica, como beneficiário(a) portador de invalidez na CBPM para fins de Assistência
Médico–Hospitalar (AMH) da CBPM, com fundamento no Inciso II e no parágrafo 3º, do Artigo 34, da Lei
Estadual Nº 452/74.<br /><br />
Reconheço que haverá o desconto no código 080018 – coparticipação financeira nas
despesas de atendimentos ambulatoriais, hospitalares e de obstetrícia, nos termos do § 3º, do artigo 30,
da Lei nº 452/74.<br /><br />
Caso ocorra alteração do dependente constante desta Declaração, comprometo–me a
comunicar formalmente à CBPM, apresentando cópia da documentação pertinente.<br /><br />
Estou ciente que as declarações são de inteira responsabilidade do contribuinte, que
responderá por eventuais inconsistências das informações, nos termos da lei, bem como de indenizar o
Estado ou terceiros por prejuízos decorrentes, incluindo eventuais despesas médicas e hospitalares
suportadas indevidamente pelo regime de AMH/CBPM, e por fim, às sanções previstas no Regulamento
Disciplinar da Polícia Militar do Estado de São Paulo.<br /><br />
Nos termos do Inciso XII, do Artigo 5º, e do Artigo 14, da Lei Federal Nº 13.709/18, há o
consentimento do contribuinte e do(a) beneficiário(a) aqui relacionado(a), para o tratamento dos
presentes dados pela CBPM, para fins de AMH, no que preconiza a Lei Estadual Nº 452/74 e demais
legislação vigente. Entende–se como tratamento de dados e consentimento o que está definido nos
Incisos X e XII do Artigo 5º da Lei Federal Nº 13.709/18, conforme a seguir transcrito:
          </Text>

          <br />
          <Box ml={{ base: 0, sm: 0, md: 4, lg: 4 }} fontSize="sm" mb="2rem">
            <Text>
              1) Tratamento: toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção,
classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento,
eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.
            </Text>

            <br />
            <Text>
              2) Consentimento: manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus
dados pessoais para uma finalidade determinada</Text>
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
          <Box mb="4rem" flexWrap="wrap" w="60%">
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
  <Grid templateColumns="1fr 1fr" gap={2}>
    <Text>(   ) Holerite contribuinte.</Text>
    <Text>(   ) RG/CPF Dependente.</Text>

    <Text>(   ) RG/CPF Contribuinte.</Text>
    <Text>(   ) CIN Dependente.</Text>

    <Text>(   ) CIN Contribuinte.</Text>
    <Text>(   ) Certidão de nascimento.</Text>

    <Text>(   ) Comprovante Dependência Econômica</Text>
    <Text>(   ) Declaração médica</Text>

    <Text gridColumn="span 2">
      (   ) Laudo CMed – Juntado em:____/____/____ visto_______________
    </Text>
  </Grid>
    </Box>
                <br/>


                <FormTable></FormTable>



              </Text>
            </Box>
          </Box>
        </Flex>
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
              downloadDocument('inclusao-de-beneficiario-com-invalidez')
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

export default InclusionOfDisabledBeneficiary;
