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
  Heading,
  Table,
  Grid,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { UserProps } from '../../DTO/UserDTO';
import { setupAPIClient } from '../../services/setupAPIClient';
import { downloadDocument } from '../../utils/downloadDocument';
import { generateTodayDate } from '../../utils/generateTodayDate';
import { printDocument } from '../../utils/printDocument';
import FormShowUserData from '../FormShowUserData';
import FormHeader from './FormHeader';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { FormTable } from './Table/FormTable';

const SpouseInclusion = (props: UserProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const toast = useToast();

  const [file, setFile] = useState([]);

  const [displayFileName, setDisplayFileName] = useState([]);

  const handleFile = (e: any) => {
    const fileEvent = e.target.files[0];
    //@ts-ignore
    file.push(fileEvent);
    //@ts-ignore
    setDisplayFileName([...displayFileName, file[file.length - 1].name]);
    console.log(file);
    console.log(displayFileName);
    toast({
      title: 'Arquivo anexado com sucesso!',
      description: `Arquivo: ${fileEvent.name}`,
      status: 'success',
      duration: 3500,
      isClosable: true,
      position: 'top-right',
    });
  };
  const api = setupAPIClient();

  async function onSubmit(data: any): Promise<void> {
    const formData = new FormData();
    const splitRg = data.rg.split('-', 2);
    formData.append('nome', data.nome);
    formData.append('nomeSocial', data.nomeSocial);
    formData.append('sexo', data.sexo);
    formData.append('dataNascimento', data.dataNascimento);
    formData.append('cpf', data.cpf);
    formData.append('rg', splitRg[0]);
    formData.append('rgdg', splitRg[1] ? splitRg[1] : ' ');
    formData.append('nomeMae', data.nomeMae);
    formData.append('nomePai', data.nomePai);
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
        url: '/user/forms/spouse-inclusion',
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
      maxW="container.xl"
      mb={10}
      id="capture"
      fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader title={'INCLUSÃO DE CÔNJUGE'} attachment={'A'} />

        <Box mb="4rem" flexWrap="wrap" w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
            ORIENTAÇÕES E DOCUMENTOS COMPROBATÓRIOS - CÔNJUGE
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
              1. Conforme Inciso I, do Artigo 34, da Lei Estadual Nº 452/74, o
              cônjuge é beneficiário(a) do regime de Assistência
              Médico-Hospitalar (AMH) da CBPM, e deve ser inscrito(a) ou ter
              seus dados atualizados, por meio do presente requerimento,
              assinado pelo(a) contribuinte ou seu representante legal, anexando
              documentos relacionados nos tópicos abaixo.
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
              2. Todos os documentos ora solicitados, devem ser anexados ao
              presente requerimento e entregues conjuntamente, pois resguardam
              direitos e garantias do próprio contribuinte e dos seus
              beneficiários, preservando a legalidade e integralidade dos
              registros.
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
              3. Para fins de inclusão de cônjuge, apresentar cópia simples da
              Certidão de Casamento, bem como documentos legais que contenham o
              n º do RG, do CPF ou do CIN (Carteira de Identidade Nacional) e
              comprovante de endereço do(a) referido(a) cônjuge.
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
              4. Cópia do último demonstrativo de pagamento (holerite), onde
              conste a contribuição para a CBPM, bem como documentos legais que
              contenham o n º do RG, do CPF ou do CIN (Carteira de Identidade
              Nacional) do(a) PM contribuinte.
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
              5. Caso ocorra a dissolução do Casamento, o contribuinte deve de
              imediato comunicar a CBPM, apresentando cópia da decisão judicial
              de divórcio com trânsito em julgado e/ou a Certidão de Casamento
              com a averbação de divórcio.
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

            <FormShowUserData
              formLabel={'RG/CIN'}
              userProps={props.rg + (props.rgdg ? '-' + props.rgdg : '')}
            />

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
              DADOS PESSOAIS - CÔNJUGE
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
                  placeholder={'000000000000'}
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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
          <Text fontWeight="700" textAlign="center">
            REQUERIMENTO/TERMO DE RESPONSABILIDADE E DE CONSENTIMENTO
          </Text>

          <br />
          <Text>
            Requeiro a inclusão/atualização de dados, da(o) cônjuge acima
            qualificada(o), como beneficiária(o) do regime de Assistência
            Médico-Hospitalar (AMH) da CBPM, com fundamento no Inciso I, do
            Artigo 34, da Lei Estadual Nº 452/74.
            <br />
            <br />
            Reconheço que haverá o desconto no código 080018 – coparticipação
            financeira nas despesas de atendimentos ambulatoriais, hospitalares
            e de obstetrícia, nos termos do parágrafo 3º, do artigo 30, da Lei
            nº 452/74.
            <br />
            <br />
            Tenho ciência que a dissolução do casamento/união estável gera a
            perda automática do direito ao uso da AMH/CBPM por parte de
            ex-cônjuge, ex-companheiro(a) e filhos por afinidade nos termos dos
            Artigos 1.593 e 1.595 do Código Civil.
            <br />
            <br />
            Caso ocorra alteração, ou dissolução do Casamento, comprometo-me a
            comunicar formalmente à CBPM, o mais breve possível, apresentando
            cópia da decisão judicial de divórcio com trânsito em julgado e/ou a
            Certidão de Casamento com a averbação de divórcio.
            <br />
            <br />
            Estou ciente que as declarações são de inteira responsabilidade do
            contribuinte, que responderá por eventuais inconsistências das
            informações, nos termos da lei, bem como de indenizar o Estado ou
            terceiros por prejuízos decorrentes, incluindo eventuais despesas
            médicas e hospitalares suportadas indevidamente pelo regime de
            AMH/CBPM, e por fim, às sanções previstas no Regulamento Disciplinar
            da Polícia Militar do Estado de São Paulo.
            <br />
            <br />
            Nos termos do Inciso XII, do Artigo 5º, da Lei Federal Nº 13.709/18,
            há o consentimento do(a) contribuinte e da(o) beneficiária(o) aqui
            relacionada(o)s, para o tratamento dos presentes dados pela CBPM,
            para fins de AMH, no que preconiza a Lei Estadual Nº 452/74 e demais
            legislação vigente. Entende-se como tratamento de dados e
            consentimento o que está definido nos Incisos X e XII do Artigo 5º
            da Lei Federal Nº 13.709/18, conforme a seguir transcrito:
          </Text>

          <br />
          <Box ml={{ base: 0, sm: 0, md: 4, lg: 4 }} fontSize="sm" mb="2rem">
            <Text>
              1) Tratamento: toda operação realizada com dados pessoais, como as
              que se referem a coleta, produção, recepção, classificação,
              utilização, acesso, reprodução, transmissão, distribuição,
              processamento, arquivamento, armazenamento, eliminação, avaliação
              ou controle da informação, modificação, comunicação,
              transferência, difusão ou extração.
            </Text>

            <br />
            <Text>
              2) Consentimento: manifestação livre, informada e inequívoca pela
              qual o titular concorda com o tratamento de seus dados pessoais
              para uma finalidade determinada.
            </Text>
          </Box>
        </div>

        <Flex justify="center" w="100%" mb="2rem">
          <VStack>
            <Text>
              Data, ________ / ____________ / _________ Assinatura contribuinte:
              ____________________________________
            </Text>
            <Text>
              Nome: ___________________ CPF: __________________________
            </Text>
          </VStack>
        </Flex>
        <br />
        <br />
        <br />
        <br />
        <Flex justify="center" mb="2rem">
          <Box mb="4rem" flexWrap="wrap">
            <Box
              fontWeight="bold"
              border="1px"
              textAlign="center"
              bg="gray.500"
            >
              Documentos Apresentados e conferidos
            </Box>

            <Box
              border="1px"
              borderTop="none"
              borderColor="gray.500"
              w="100%"
              textAlign="left"
              p="0.5rem"
            >
              <Grid
                templateColumns="repeat(3, 1fr)"
                gap={4}
                w="100%"
                textAlign="left"
                alignItems="center"
                mb={'25px'}
              >
                <Text>(&nbsp;&nbsp;&nbsp;) Holerite contribuinte.</Text>
                <Text>(&nbsp;&nbsp;&nbsp;) RG/CPF contribuinte.</Text>
                <Text>(&nbsp;&nbsp;&nbsp;) CIN contribuinte.</Text>

                <Text>(&nbsp;&nbsp;&nbsp;) Certidão de casamento</Text>
                <Text>(&nbsp;&nbsp;&nbsp;) RG/CPF Cônjuge</Text>
                <Text>(&nbsp;&nbsp;&nbsp;) CIN Cônjuge</Text>

                <Text>(&nbsp;&nbsp;&nbsp;) Comprovante de residência</Text>
              </Grid>

              <FormTable></FormTable>
              <br />
              <b>(uso interno)</b>
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
            onClick={() => downloadDocument('inclusao-de-conjuge')}
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
            {displayFileName.length} de 3 arquivo(s) anexado(s) - quantidade
            mínima necessária:
          </Heading>
          <UnorderedList ms={16}>
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
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              bg="blue.default"
              color="white.default"
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
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

export default SpouseInclusion;
