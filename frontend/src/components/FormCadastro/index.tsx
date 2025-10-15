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
  Spinner,
  Stack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { MouseEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { setupAPIClient } from '../../services/setupAPIClient';
import Link from '../Link';
import { Modal } from './Modal';
import InputMask from 'react-input-mask';
import { FaInfo } from 'react-icons/fa';

const FormCadastro = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  useEffect(() => {
    const cpfFromLogin = localStorage.getItem('persisted-cpf') || '';

    // If there's a value in localStorage, set it as the input value using setValue
    if (cpfFromLogin) {
      setValue('cpf', cpfFromLogin); // Set the value of the 'cpf' field
      localStorage.removeItem('persisted-cpf'); // Remove it from localStorage
    }
  }, [setValue]);

  const api = setupAPIClient();

  const [route, setRoute] = useState('militar');
  const [load, setLoad] = useState<boolean>();
  const [toggle, setToggle] = useState(false);
  const [type, setType] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [activeMilitar, setActiveMilitar] = useState(true);
  const [activeDependente, setActiveDependente] = useState(false);
  const [activePensionista, setActivePensionista] = useState(false);

  const toast = useToast();

  async function onSubmit(payload: any): Promise<void> {
    setLoad(false);
    try {
      const post = await api.post(`/${route}`, payload);
      const { conta_ativada } = post.data;

      if (conta_ativada) {
        setType('ativado');
      } else {
        setType('pendente');
      }

      setUserEmail(payload.email);
      setToggle(true);
      setLoad(true);
    } catch (error: any) {
      setLoad(true);
      console.log(error);
      const err = JSON.parse(error.request.response);
      const userAlreadyRegistered = err.message;

      if (userAlreadyRegistered === 'Usuário já cadastrado') {
        toast({
          description: 'Usuário já cadastrado',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      } else {
        toast({
          title: 'Os dados informados estão inconsistentes',
          description:
            ' entrar em contato com o setor da Cadastro - CBPM - Tels: 11 3315-3159 e 3315-3097',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      }
    }
  }
  function handleActive(e: MouseEvent<HTMLButtonElement>): void {
    const target = e.currentTarget.name;

    if (target === 'militar') {
      setActiveMilitar(true);
      setActiveDependente(false);
      setActivePensionista(false);
      setRoute(target);
    }

    if (target === 'dependente') {
      setActiveDependente(true);
      setActiveMilitar(false);
      setActivePensionista(false);
      setRoute(target);
    }

    if (target === 'pensionista') {
      setActivePensionista(true);
      setActiveMilitar(false);
      setActiveDependente(false);
      setRoute(target);
    }
  }

  async function userHide() {
    const cpf: any = document.getElementById('cpf');
    const telCelular: any = document.getElementById('telCelularId');
    const email: any = document.getElementById('emailId');
    const dtNas: any = document.getElementById('dtNasId');
    // const rg: any = document.getElementById("rgId");

    const sizeOfCpf: number = cpf.value.length;
    // const sizeOfRg: number = rg.value.length;
    const sizeOfdtNas: number = dtNas.value.length;

    const textOfCpf: string = cpf.value;
    // const textOfRg: string = rg.value;
    const textOfdtNas: string = dtNas.value;

    const payload = {
      cpf: textOfCpf,
      // rg: textOfRg,
      nascimento: textOfdtNas,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const cpfOk = textOfCpf.length === 11;
  const dateOk = /^\d{2}\/\d{2}\/\d{4}$/.test(textOfdtNas);

    if (cpfOk && dateOk) {
      try {
        const res = await api.post('/hide', payload, config);

        telCelular.value =
          res.data.telefone != undefined ? res.data.telefone : '';
        email.value = res.data.email != undefined ? res.data.email : '';
      } catch (e) {
        telCelular.value = '';
        email.value = '';
        console.error(e);
      }
    } else {
      telCelular.value = '';
      email.value = '';
    }
  }

  return (
    <Container
      maxW="1280px"
      w="100%"
      minH="100vh"
      fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
      mb={10}
    >
      <Stack alignItems="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid
            columns={{ md: 2, lg: 3 }}
            spacing={4}
            justifyContent="center"
            mt="4rem"
            flexWrap="wrap"
          >
            <Button
              name="militar"
              isActive={activeMilitar}
              onClick={handleActive}
              borderRadius="3xl"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              _hover={{ color: 'none' }}
              _active={{
                bg: 'blue.default',
                color: 'white.default',
              }}
            >
              Contribuinte
            </Button>

            <Button
              name="dependente"
              isActive={activeDependente}
              onClick={handleActive}
              borderRadius="3xl"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              _hover={{ color: 'none' }}
              _active={{
                bg: 'blue.default',
                color: 'white.default',
              }}
            >
              Beneficiário Dependente
            </Button>

            <Button
              name="pensionista"
              isActive={activePensionista}
              onClick={handleActive}
              borderRadius="3xl"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              _hover={{ color: 'none' }}
              _active={{
                bg: 'blue.default',
                color: 'white.default',
              }}
            >
              Pensionista
            </Button>
          </SimpleGrid>
          <Center paddingTop="50px">
            <Text>
              Digite sem pontos, traços ou parênteses, os campos <b>CPF</b>,
              {/* <b>RG</b>, */}
              <b>RE</b>/<b>Matrícula</b> e <b>Telefone Celular</b>
            </Text>
          </Center>
          <Stack align="center">
            <SimpleGrid
              alignItems="flex-start"
              justifyItems="center"
              columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
              spacing={{ base: 1, sm: 1, md: 1, lg: '4rem' }}
              mt="80px"
              mb={5}
            >
              <VStack w="100%" display={'flex'} flexDir={'column'} gap={'5px'}>
                <FormControl>
                  <FormLabel htmlFor="cpf" fontWeight="700">
                    CPF
                  </FormLabel>
                  <Input
                    id="cpf"
                    placeholder="Preencha o CPF"
                    bg="gray.200"
                    borderRadius="15px"
                    borderColor="blue.default"
                    maxW="350px"
                    w="100%"
                    h="40px"
                    _placeholder={{ color: 'black.default' }}
                    _hover={{ borderColor: 'none' }}
                    onKeyUp={userHide}
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
                  <Text
                    fontSize="sm"
                    fontWeight="normal"
                    color="blue.default"
                    display="flex"
                    alignItems={'center'}
                    gap={'5px'}
                  >
                    <Box bg={'blue.default'} p={'4px'} borderRadius={'3xl'}>
                      <FaInfo color="white" fontSize={'7px'} />
                    </Box>
                    Digitar{' '}
                    <b>
                      <u>apenas números</u>
                    </b>{' '}
                    (sem pontos ou traços)
                  </Text>
                  {errors.cpf && <Text color="red">{errors.cpf.message}</Text>}
                </FormControl>

                {activeMilitar && (
                  <FormControl>
                    <FormLabel htmlFor="re" fontWeight="700">
                      RE
                    </FormLabel>
                    <Input
                      id="re"
                      placeholder="RE"
                      bg="gray.200"
                      borderRadius="15px"
                      borderColor="blue.default"
                      maxW="350px"
                      w="100%"
                      h="40px"
                      _placeholder={{ color: 'black.default' }}
                      _hover={{ borderColor: 'none' }}
                      {...register('re', {
                        required: 'Campo obrigatório',
                        maxLength: {
                          value: 10,
                          message: 'Tamanho máximo 10 caracteres',
                        },
                      })}
                    />
                    <Text
                      fontSize="sm"
                      fontWeight="normal"
                      color="blue.default"
                      display="flex"
                      alignItems={'center'}
                      gap={'5px'}
                    >
                      <Box bg={'blue.default'} p={'4px'} borderRadius={'3xl'}>
                        <FaInfo color="white" fontSize={'7px'} />
                      </Box>
                      Digitar{' '}
                      <b>
                        <u>com dígito</u>
                      </b>{' '}
                      (sem pontos ou traços)
                    </Text>
                    {errors.re && <Text color="red">{errors.re.message}</Text>}
                  </FormControl>
                )}

                {activeDependente && (
                  <FormControl>
                    <FormLabel htmlFor="recontribuinte" fontWeight="700">
                      RE do Contribuinte
                    </FormLabel>
                    <Input
                      id="recontribuinte"
                      placeholder="RE do Contribuinte "
                      bg="gray.200"
                      borderRadius="15px"
                      borderColor="blue.default"
                      maxW="350px"
                      w="100%"
                      h="40px"
                      _placeholder={{ color: 'black.default' }}
                      _hover={{ borderColor: 'none' }}
                      {...register('reDoContribuinte', {
                        required: 'Campo obrigatório',
                        maxLength: {
                          value: 10,
                          message: 'Tamanho máximo 10 caracteres',
                        },
                      })}
                    />
                    <Text
                      fontSize="sm"
                      fontWeight="normal"
                      color="blue.default"
                      display="flex"
                      alignItems={'center'}
                      gap={'5px'}
                    >
                      <Box bg={'blue.default'} p={'4px'} borderRadius={'3xl'}>
                        <FaInfo color="white" fontSize={'7px'} />
                      </Box>
                      Digitar{' '}
                      <b>
                        <u>com dígito</u>
                      </b>{' '}
                      (sem pontos ou traços)
                    </Text>
                    {errors.reDoContribuinte && (
                      <Text color="red">{errors.reDoContribuinte.message}</Text>
                    )}
                  </FormControl>
                )}

                {activePensionista && (
                  <FormControl>
                    <FormLabel htmlFor="matricula" fontWeight="700">
                      Matrícula
                    </FormLabel>
                    <Input
                      id="matricula"
                      placeholder="Matrícula"
                      bg="gray.200"
                      borderRadius="15px"
                      borderColor="blue.default"
                      maxW="350px"
                      w="100%"
                      h="40px"
                      _placeholder={{ color: 'black.default' }}
                      _hover={{ borderColor: 'none' }}
                      {...register('matricula', {
                        required: 'Campo obrigatório',
                        maxLength: {
                          value: 12,
                          message: 'Tamanho máximo 12 caracteres',
                        },
                      })}
                    />
                    <Text
                      fontSize="sm"
                      fontWeight="normal"
                      color="blue.default"
                      display="flex"
                      alignItems={'center'}
                      gap={'5px'}
                    >
                      <Box bg={'blue.default'} p={'4px'} borderRadius={'3xl'}>
                        <FaInfo color="white" fontSize={'7px'} />
                      </Box>
                      Digitar{' '}
                      <b>
                        <u>apenas números</u>
                      </b>
                    </Text>
                    {errors.matricula && (
                      <Text color="red">{errors.matricula.message}</Text>
                    )}
                  </FormControl>
                )}

                <FormControl>
                  <FormLabel htmlFor="emailId" fontWeight="700">
                    E-mail
                  </FormLabel>
                  <Input
                    id="emailId"
                    type="email"
                    placeholder="Preencha o e-mail"
                    bg="gray.200"
                    borderRadius="15px"
                    borderColor="blue.default"
                    maxW="350px"
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
                  <Text
                    fontSize="sm"
                    fontWeight="normal"
                    color="blue.default"
                    display="flex"
                    alignItems={'center'}
                    gap={'5px'}
                  >
                    <Box bg={'blue.default'} p={'4px'} borderRadius={'3xl'}>
                      <FaInfo color="white" fontSize={'7px'} />
                    </Box>
                    Digitar{' '}
                    <b>
                      <u>manualmente</u>
                    </b>
                  </Text>
                  {errors.email && (
                    <Text color="red">{errors.email.message}</Text>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="700" htmlFor="email">
                    Confirmar E-mail
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Confirme seu e-mail"
                    bg="gray.200"
                    borderRadius="15px"
                    borderColor="blue.default"
                    maxW="350px"
                    w="100%"
                    h="40px"
                    _placeholder={{ color: 'black.default' }}
                    _hover={{ borderColor: 'none' }}
                    {...register('confirmaEmail', {
                      required: 'Campo obrigatório',
                      validate: value =>
                        value === watch('email') || 'E-mail incorreto',
                    })}
                  />
                  <Text
                    fontSize="sm"
                    fontWeight="normal"
                    color="blue.default"
                    display="flex"
                    alignItems={'center'}
                    gap={'5px'}
                  >
                    <Box bg={'blue.default'} p={'4px'} borderRadius={'3xl'}>
                      <FaInfo color="white" fontSize={'7px'} />
                    </Box>
                    Digitar{' '}
                    <b>
                      <u>manualmente</u>
                    </b>
                  </Text>
                  {errors.confirmaEmail && (
                    <Text color="red">{errors.confirmaEmail.message}</Text>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="telCelularId" fontWeight="700">
                    Telefone Celular
                  </FormLabel>
                  <Input
                    id="telCelularId"
                    placeholder="11999999999"
                    bg="gray.200"
                    borderRadius="15px"
                    borderColor="blue.default"
                    maxW="350px"
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
                  <Text
                    fontSize="sm"
                    fontWeight="normal"
                    color="blue.default"
                    display="flex"
                    alignItems={'start'}
                    gap={'5px'}
                  >
                    <Box
                      bg={'blue.default'}
                      p={'4px'}
                      borderRadius={'3xl'}
                      mt={'3px'}
                    >
                      <FaInfo color="white" fontSize={'7px'} />
                    </Box>
                    <Text>
                      Digitar{' '}
                      <b>
                        <u>com código de área, apenas números</u>
                      </b>
                      <br></br>(sem traços ou espaços)
                    </Text>
                  </Text>
                  {errors.telCelular && (
                    <Text color="red">{errors.telCelular.message}</Text>
                  )}
                </FormControl>
              </VStack>

              <VStack w="100%" display={'flex'} flexDir={'column'} gap={'5px'}>
                {/* <FormControl>
                  <FormLabel htmlFor="rgId" fontWeight="700">RG sem dígito</FormLabel>
                  <Input
                    id="rgId"
                    placeholder="RG"
                    bg="gray.200"
                    borderRadius="15px"
                    borderColor="blue.default"
                    maxW="350px"
                    w="100%"
                    h="40px"
                    _placeholder={{ color: 'black.default' }}
                    _hover={{ borderColor: 'none' }}
                    onKeyUp={userHide}
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
                </FormControl> */}

                <FormControl>
                  <FormLabel htmlFor="dtNasId" fontWeight="700">
                    Data de Nascimento
                  </FormLabel>
                  <Input
                    as={InputMask}
                    mask={'99/99/9999'}
                    id="dtNasId"
                    placeholder="01/01/2023"
                    bg="gray.200"
                    borderRadius="15px"
                    borderColor="blue.default"
                    maxW="350px"
                    w="100%"
                    h="40px"
                    _placeholder={{ color: 'black.default' }}
                    _hover={{ borderColor: 'none' }}
                    onKeyUp={userHide}
                    {...register('dtnascimento', {
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

                  {errors.dtnascimento && (
                    <Text color="red">{errors.dtnascimento.message}</Text>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="senha" fontWeight="700">
                    Senha
                  </FormLabel>
                  <Input
                    id="senha"
                    placeholder="Digite sua senha"
                    bg="gray.200"
                    borderRadius="15px"
                    borderColor="blue.default"
                    maxW="350px"
                    w="100%"
                    h="40px"
                    _placeholder={{ color: 'black.default' }}
                    _hover={{ borderColor: 'none' }}
                    {...register('senha', {
                      required: 'Campo obrigatório',
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,30}$/,
                        message: 'Senha inválida',
                      },
                    })}
                  />

                  {errors.senha && (
                    <Text color="red">{errors.senha.message}</Text>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="senhaConfirmar" fontWeight="700">
                    Confirmar senha
                  </FormLabel>
                  <Input
                    id="senhaConfirmar"
                    placeholder="Confirme sua senha"
                    bg="gray.200"
                    borderRadius="15px"
                    borderColor="blue.default"
                    maxW="350px"
                    w="100%"
                    h="40px"
                    _placeholder={{ color: 'black.default' }}
                    _hover={{ borderColor: 'none' }}
                    {...register('confirmaSenha', {
                      required: 'Campo obrigatório',
                      validate: value =>
                        value === watch('senha') || 'Senha incorreta',
                    })}
                  />

                  {errors.confirmaSenha && (
                    <Text color="red">{errors.confirmaSenha.message}</Text>
                  )}
                </FormControl>
                <Flex
                  direction="column"
                  alignSelf="flex-start"
                  fontSize="sm"
                  mt={1}
                >
                  <Text>
                    <b>Comprimento da senha</b>: mínimo de 8 caracteres
                  </Text>

                  <Text>
                    <b>Caracteres numéricos</b>: mínimo de 1 número
                  </Text>

                  <Text>
                    <b>Caracteres especiais</b>: mínimo de um caractere especial
                  </Text>

                  <Text>
                    <b>Letras maiúsculas</b>: mínimo de uma letra maiúscula
                  </Text>

                  <Text>
                    <b>Letras minúsculas</b>: mínimo de uma letra minúscula
                  </Text>
                  <Box
                    w={'350px'}
                    p={'15px 0'}
                    textAlign={'justify'}
                    color={'blue.default'}
                  >
                    Por motivos de segurança, os campos{' '}
                    <b>&quot;E-mail&quot;</b>,{' '}
                    <b>&quot;Confirmar E-mail&quot;</b> e{' '}
                    <b>&quot;Telefone&quot;</b> serão exibidos parcialmente com
                    asteriscos (*), representando os dados já cadastrados em
                    sistema. Para realizar o cadastro, o usuário deverá apagar
                    as informações exibidas e digitá-las novamente por completo.
                  </Box>
                </Flex>
              </VStack>
            </SimpleGrid>

            <Button
              type="submit"
              bg="blue.default"
              borderRadius="3xl"
              color="white.default"
              alignSelf="center"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              _hover={{ color: 'none' }}
            >
              Cadastrar
            </Button>
          </Stack>
          {load === false ? (
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          ) : (
            ''
          )}
        </form>
        <Modal toggle={toggle} email={userEmail} type={type} />
      </Stack>

      <Center w="100%" mt={7}>
        <Link href="/login">
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
      </Center>
    </Container>
  );
};

export default FormCadastro;
