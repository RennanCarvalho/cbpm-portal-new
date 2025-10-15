import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  useToast,
  VStack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { setupAPIClient } from '../../services/setupAPIClient';
import FormOpacity from '../FormOpacity';
import { FormOpacityDTO } from '../FormOpacity/FormOpacityDTO';
import Link from '../Link';
import cep from 'cep-promise';

type CEP = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
};

const UpdateUserData = (props: FormOpacityDTO) => {
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

  async function onSubmit(data: any): Promise<void> {
    const formData = new FormData();
    formData.append('logradouro', data.logradouro);
    formData.append('numero', data.numero);
    formData.append('complemento', data.complemento);
    formData.append('bairro', data.bairro);
    formData.append('cidade', data.cidade);
    formData.append('uf', data.uf);
    formData.append('cep', data.cep);
    formData.append('email', data.email);
    formData.append('telResidencial', data.telResidencial);
    formData.append('telCelular', data.telCelular);
    formData.append('telOutro', data.telOutro);

    for (let i = 0; i < file.length; i++) {
      formData.append('file[]', file[i]);
    }

    try {
      {
        {
          await api({
            method: 'post',
            url: '/user/forms/update-data',
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
          'Confirmamos o envio de mensagens através do Portal "Atualizar Cadastro"',
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
          title: `${err.document}`,
          description:
            'Obs: Para qualquer atualização de dados do endereço, do nº do Telefone Residencial e do nº do Telefone Celular, deverá ser anexado os respectivos documentos comprobatório dos dados alterados para fins de habilitação do botão Atualizar e envio da Solicitação ao Setor de cadastro da CBPM',
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
      maxW="1280px"
      w="100%"
      minH="100vh"
      bgImage="url('/bg_cbpm.png')"
      bgSize="650px 650px"
      bgRepeat="no-repeat"
      bgPosition="top right"
    >
      <Heading
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '3xl' }}
        as="h1"
        textDecor="underline"
        textAlign="center"
        mt={10}
        mb={10}
      >
        ATUALIZAR DADOS
      </Heading>
      <Text
        fontWeight="900"
        fontSize={'xl'}
        color="blue.default"
        textAlign={'center'}
      >
        <Link href="/area-restrita/servicos/formularios/atualizacao-cadastral">
          <strong>
            <u>Para fins de atualização de CPF de depentende(s) CLIQUE AQUI</u>
          </strong>
        </Link>
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={5}>
          <Text fontSize="md" fontWeight="700" color="blue.default">
            Dados Pessoais
          </Text>
        </Box>

        <VStack>
          <SimpleGrid
            columns={{ md: 2, lg: 4 }}
            spacing={2}
            w="100%"
            justifyContent="center"
          >
            <FormOpacity userProps={props.nome} formLabel="Nome" />

            <FormOpacity userProps={props.cpf} formLabel="CPF" />

            <FormOpacity
              userProps={
                props.contribuinte ? props.contribuinte : 'NÃO SE APLICA'
              }
              formLabel="Contribuinte"
            />

            <FormOpacity userProps={props.sexo} formLabel="Sexo" />
          </SimpleGrid>

          <SimpleGrid
            columns={{ md: 2, lg: 4 }}
            spacing={2}
            w="100%"
            justifyContent="center"
          >
            <FormOpacity
              userProps={props.nomeSocial ? props.nomeSocial : 'NÃO POSSUI'}
              formLabel="Nome Social"
            />

            <FormOpacity
              userProps={props.dataNascimento}
              formLabel="Data de Nascimento"
            />

            <FormOpacity userProps={props.idade} formLabel="Idade" />

            <FormOpacity
              userProps={props.estadoCivil}
              formLabel="Estado Civil"
            />
          </SimpleGrid>

          <SimpleGrid
            columns={{ md: 2, lg: 4 }}
            spacing={2}
            w="100%"
            justifyContent="center"
          >
            <FormOpacity
              userProps={
                props.postoPolicial ? props.postoPolicial : 'NÃO SE APLICA'
              }
              formLabel="Posto"
            />
            <FormOpacity
              userProps={props.identidade ? props.identidade : 'NÃO SE APLICA'}
              formLabel="RE"
            />

            <FormOpacity
              userProps={props.NumeroSPPrev ? 'SIM' : 'NÃO SE APLICA'}
              formLabel="Aposentado"
            />

            <FormOpacity
              userProps={props.NumeroSPPrev ? props.NumeroSPPrev : 'NÃO POSSUI'}
              formLabel="Número SPPREV"
            />

            <FormOpacity userProps={props.rg} formLabel="RG" />

            <FormOpacity
              userProps={props.rgdg ? props.rgdg : 'NÃO INFORMADO'}
              formLabel="Dígito RG"
            />
          </SimpleGrid>

          <Box w="100%" pt={3}>
            <Text
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              fontWeight="700"
              color="blue.default"
            >
              Campos Editáveis
            </Text>

            <Text
              fontSize={{ base: 'xs', sm: 'sm', md: 'sm', lg: 'sm' }}
              fontWeight="700"
              color="blue.default"
            >
              Anexar comprovante de endereço ou telefone
            </Text>
          </Box>

          <SimpleGrid
            pt={6}
            columns={{ md: 2, lg: 4 }}
            spacing={2}
            w="100%"
            justifyContent="center"
          >
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
                  bg="gray.300"
                  borderRadius="3xl"
                  borderColor="blue.default"
                  maxW="280px"
                  w="100%"
                  h="40px"
                  _placeholder={{ color: 'black.default' }}
                  _hover={{ borderColor: 'none' }}
                  value={address.street}
                  {...register('logradouro')}
                  disabled={true}
                />
              ) : (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  bg="gray.300"
                  borderRadius="3xl"
                  borderColor="blue.default"
                  maxW="280px"
                  w="100%"
                  h="40px"
                  _placeholder={{ color: 'black.default' }}
                  _hover={{ borderColor: 'none' }}
                  value={' '}
                  disabled={true}
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
                bg="gray.300"
                borderRadius="3xl"
                borderColor="blue.default"
                maxW="280px"
                w="100%"
                h="40px"
                _placeholder={{ color: 'black.default' }}
                _hover={{ borderColor: 'none' }}
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
                bg="gray.300"
                borderRadius="3xl"
                borderColor="blue.default"
                maxW="280px"
                w="100%"
                h="40px"
                _placeholder={{ color: 'black.default' }}
                _hover={{ borderColor: 'none' }}
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

            <FormControl isReadOnly>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Bairro
              </FormLabel>

              {address ? (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  bg="gray.300"
                  borderRadius="3xl"
                  borderColor="blue.default"
                  maxW="280px"
                  w="100%"
                  h="40px"
                  _placeholder={{ color: 'black.default' }}
                  _hover={{ borderColor: 'none' }}
                  value={address.neighborhood}
                  {...register('bairro')}
                  disabled={true}
                />
              ) : (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  bg="gray.300"
                  borderRadius="3xl"
                  borderColor="blue.default"
                  maxW="280px"
                  w="100%"
                  h="40px"
                  _placeholder={{ color: 'black.default' }}
                  _hover={{ borderColor: 'none' }}
                  value={' '}
                  disabled={true}
                />
              )}
            </FormControl>
          </SimpleGrid>

          <SimpleGrid
            columns={{ md: 2, lg: 4 }}
            spacing={2}
            w="100%"
            justifyContent="center"
          >
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
                  bg="gray.300"
                  borderRadius="3xl"
                  borderColor="blue.default"
                  maxW="280px"
                  w="100%"
                  h="40px"
                  _placeholder={{ color: 'black.default' }}
                  _hover={{ borderColor: 'none' }}
                  value={address.city}
                  {...register('cidade')}
                  disabled={true}
                />
              ) : (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  bg="gray.300"
                  borderRadius="3xl"
                  borderColor="blue.default"
                  maxW="280px"
                  w="100%"
                  h="40px"
                  _placeholder={{ color: 'black.default' }}
                  _hover={{ borderColor: 'none' }}
                  value={' '}
                  disabled={true}
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
                  bg="gray.300"
                  borderRadius="3xl"
                  borderColor="blue.default"
                  maxW="280px"
                  w="100%"
                  h="40px"
                  _placeholder={{ color: 'black.default' }}
                  _hover={{ borderColor: 'none' }}
                  value={address.state}
                  {...register('uf')}
                  disabled={true}
                />
              ) : (
                <Input
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  bg="gray.300"
                  borderRadius="3xl"
                  borderColor="blue.default"
                  maxW="280px"
                  w="100%"
                  h="40px"
                  _placeholder={{ color: 'black.default' }}
                  _hover={{ borderColor: 'none' }}
                  value={' '}
                  disabled={true}
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
                bg="gray.300"
                borderRadius="3xl"
                borderColor="blue.default"
                maxW="280px"
                w="100%"
                h="40px"
                _placeholder={{ color: 'black.default' }}
                _hover={{ borderColor: 'none' }}
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
                bg="gray.300"
                borderRadius="3xl"
                borderColor="blue.default"
                maxW="280px"
                w="100%"
                h="40px"
                _placeholder={{ color: 'black.default' }}
                _hover={{ borderColor: 'none' }}
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

          <SimpleGrid
            alignSelf="flex-start"
            pt={6}
            columns={{ md: 2, lg: 4 }}
            spacing={2}
            w="100%"
            justifyContent="center"
          >
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
                bg="gray.300"
                borderRadius="3xl"
                borderColor="blue.default"
                maxW="280px"
                w="100%"
                h="40px"
                _placeholder={{ color: 'black.default' }}
                _hover={{ borderColor: 'none' }}
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
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                id="telCelular"
                placeholder="11999999999"
                bg="gray.300"
                borderRadius="3xl"
                borderColor="blue.default"
                maxW="280px"
                w="100%"
                h="40px"
                _placeholder={{ color: 'black.default' }}
                _hover={{ borderColor: 'none' }}
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
                bg="gray.300"
                borderRadius="3xl"
                borderColor="blue.default"
                maxW="280px"
                w="100%"
                h="40px"
                _placeholder={{ color: 'black.default' }}
                _hover={{ borderColor: 'none' }}
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
          </SimpleGrid>
        </VStack>

        <SimpleGrid
          p={8}
          spacing={{ base: 3, sm: 3, md: 6, lg: 6 }}
          columns={{ base: 1, sm: 1, md: 4, lg: 4 }}
          justifyItems="center"
        >
          <Link href="/area-restrita/servicos">
            <Button
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              bg="blue.default"
              color="white.default"
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              borderRadius="3xl"
              _hover={{ color: 'none' }}
            >
              Voltar
            </Button>
          </Link>

          <Input
            id="files[]"
            type="file"
            display="none"
            onChange={handleFile}
            accept=".pdf, .png, .jpg, .jpeg"
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
            isDisabled={file.length == 0}
          >
            Atualizar
          </Button>

          <Link href="/area-restrita/servicos/atualizar-senha">
            <Button
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              bg="blue.default"
              color="white.default"
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              borderRadius="3xl"
              _hover={{ color: 'none' }}
            >
              Atualizar Senha
            </Button>
          </Link>

          <FormLabel
            whiteSpace="nowrap"
            textAlign="center"
            fontWeight="700"
            htmlFor="files[]"
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={5}
            py={2}
            m="0 auto"
            borderRadius="3xl"
            _hover={{ color: 'none' }}
          >
            Anexar Documentos
          </FormLabel>
        </SimpleGrid>
      </form>
      <Box my={16}>
        <Text px={8} color={'red'}>
          <strong>Obs</strong>: Para qualquer atualização de dados do{' '}
          <strong>endereço</strong>, do nº do{' '}
          <strong>Telefone Residencial</strong> e do nº do{' '}
          <strong>Telefone Celular</strong>, deverá ser anexado os respectivos
          documentos comprobatório dos dados alterados para fins de habilitação
          do botão <strong>Atualizar</strong> e envio da Solicitação ao Setor de
          cadastro da CBPM
        </Text>
        <Heading as={'h1'} size={'md'}>
          Arquivos anexados:
        </Heading>
        <UnorderedList ms={16}>
          {displayFileName.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default UpdateUserData;
