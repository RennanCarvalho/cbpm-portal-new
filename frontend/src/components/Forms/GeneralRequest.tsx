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
  Textarea,
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
import { FormTable } from './Table/FormTable';

type CEP = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
};

const GeneralRequest = (props: UserProps | any) => {
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
    formData.append('reOuMatricula', data.reOuMatricula);
    formData.append('cpf', data.cpf);
    formData.append('rg', splitRg[0]);
    formData.append('rgdg', splitRg[1] ? splitRg[1] : ' ');

    formData.append('nomeMae', data.nomeMae);
    formData.append('nomePai', data.nomePai);
    formData.append('tipoUsuario', data.tipoUsuario);

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
    formData.append('solicitacao', data.solicitacao);

    for (let i = 0; i < file.length; i++) {
      formData.append('file[]', file[i]);
    }

    try {
      await api({
        method: 'post',
        url: '/user/forms/general-request',
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
          title={'REQUERIMENTO DE SOLICITAÇÃO EM GERAL'}
          attachment={'J'}
        />

        <Box mb="4rem" flexWrap="wrap" w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
            ORIENTAÇÕES
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
              1. O presente formulário deve ser utilizado para solicitações gerais, a exemplo de cópias de documentos, pedido de certidões, cartão de identificação de beneficiário (credenciais), extratos de despesas médicas, contestações, reclamações etc., bem como informação de assuntos gerais, a exemplo de extravios de cartão de identificação de usuário do AMH/CBPM. 
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
              2. Deverá ser apresentado documentos legais que contenham o número da funcional militar do contribuinte ou matricula da pensionista, bem como documentos legais que contenham o número do RG, do CPF ou do CIN (Carteira de Identidade Nacional) do beneficiário. Quando necessário, deverá ser anexada, ainda, cópia de documentos que comprovem ou fundamentem o pleito apresentado.
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
              3. Para os casos de pedidos de contribuição avulsa, estorno, diminuição de parcelas de despesas médicas, ou outras questões financeiras, deverá ser juntada, obrigatoriamente, uma cópia simples do último demonstrativo de pagamento do contribuinte, bem como dos demais documentos comprovantes do pedido em questão.
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
              4. Inclusão e exclusão de beneficiários, bem como solicitação de reinclusão administrativa não deve ser requerida por este instrumento, pois existem formulários específicos, disponíveis no Portal da Caixa Beneficente.
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
            5. No caso de requerimento elaborado pelo dependente de contribuinte, deve constar a justificativa da impossibilidade
daquele em fazê-lo, a exemplo de questões de saúde, internação, viagem etc., podendo a administração posteriormente
exigir, se necessário, documentos comprobatórios desta situação em apreço e da anuência do contribuinte. Este
formulário pode ser complementado por outros formulários conforme a necessidade.
            </Text>
          </Box>
        </Box>

        <Box w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
            DADOS PESSOAIS DO(A) REQUERENTE
          </Box>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Nome
            </FormLabel>

            <Input
              defaultValue={props.nome}
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
              defaultValue={props.nomeSocial}
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

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>
            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                RE ou Matrícula
              </FormLabel>

              <Input
                defaultValue={props.matricula == "" ? props.identidade : props.matricula}
                placeholder="RE ou Matrícula"
                w="100%"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                {...register('reOuMatricula', {
                  required: 'Campo obrigatório',
                  maxLength: {
                    value: 15,
                    message: 'Tamanho máximo 15 caracteres',
                  },
                })}
              />

              {errors.reOuMatricula && (
                <Text color="red">{errors.reOuMatricula.message}</Text>
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
                defaultValue={props.cpf}
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
                defaultValue={props.rg + (props.rgdg ? '-' + props.rgdg : '')}
                placeholder="RG"
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
                defaultValue={props.rgdg}
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

          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }}>
            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Nome da Mãe
              </FormLabel>

              <Input
                defaultValue={props.nomeMae}
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
                defaultValue={props.nomePai}
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

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Tipo do usuário
              </FormLabel>

              <Select
                {...register('tipoUsuario')}
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                <option selected value={'Polícial Militar'}>
                  Polícial Militar
                </option>
                <option value={'Pensionista'}>Pensionista</option>
                <option value={'Dependente/beneficiário'}>
                  Dependente/beneficiário
                </option>
              </Select>
            </FormControl>
          </SimpleGrid>

          <Box
            fontWeight="bold"
            border="1px"
            textAlign="center"
            bg="gray.500"
            mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
          >
            ENDEREÇO DO(A) REQUERENTE
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
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  value={address.street}
                  {...register('logradouro')}
                />
              ) : (
                <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue={props.logradouro}
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
                defaultValue={props.numero}
                placeholder="Preencha o número"
                w="100%"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                {...register('numero', {
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
                defaultValue={props.complemento}
                placeholder="complemento"
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
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  value={address.neighborhood}
                  {...register('bairro')}
                />
              ) : (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue={props.bairro}
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
                  {...register('cidade')}
                />
              ) : (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue={props.cidade}
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
                  defaultValue={props.ufIdentidade}
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
                defaultValue={props.cep}
                placeholder="Digite o CEP"
                w="100%"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
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
            CONTATOS DO(A) REQUERENTE
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
                defaultValue={(props.telResidencial)?.replace(/[()\s-]/g, '')}
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
                defaultValue={(props.telCelular)?.replace(/[()\s-]/g, '')}
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
                defaultValue={(props.telOutro)?.replace(/[()\s-]/g, '')}
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
                defaultValue={props.email}
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

              {errors.email && <Text color="red">{errors.email.message}</Text>}
            </FormControl>
          </SimpleGrid>
        </Box>

        <Textarea
          {...register('solicitacao', {
            required: 'Campo obrigatório',
          })}
          mb={5}
          fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
          placeholder="
            Por intermédio do presente formulário, requeiro/informo/solicito
          "
        />

        {errors.solicitacao && (
          <Text color="red">{errors.solicitacao.message}</Text>
        )}
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
    {/* Linha 1 */}
    <Text>(   ) RG/CPF</Text>
    <Text>(   ) Holerite atual.</Text>

    {/* Linha 2 */}
    <Text>(   ) CIN</Text>
    <Text>(   ) Comprovante de endereço</Text>

    {/* Linha 3 */}
    <Text>(   ) Funcional Militar _____________________________________________</Text>
    <Text>(   ) Formulários juntados: _____________________________________________</Text>

    {/* Linha 4 */}
    <Text>(   ) ____________________</Text>
    <Text>(   ) ____________________</Text>
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
            onClick={() => downloadDocument('solicitacao-geral')}
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
            isDisabled={displayFileName.length <= 2}>
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

export default GeneralRequest;
