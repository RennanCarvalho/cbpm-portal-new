import {
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Select,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { setupAPIClient } from '../services/setupAPIClient';

const FormAtendimentoPresencial = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const api = setupAPIClient();

  const [load, setLoad] = useState<boolean>();
  const toast = useToast();

  async function onSubmit(payload: any): Promise<void> {
    setLoad(false);
    try {
      const post = await api.post('/presencial', payload);
      setLoad(true);
    } catch (error: any) {}
  }

  return (
    <Container
      maxW="1280px"
      w="100%"
      minH="90vh"
      fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
      mb={10}
    >
      <Stack alignItems="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack align="center">
            <SimpleGrid
              alignItems="flex-start"
              justifyItems="center"
              columns={1}
              mt="150px"
              mb={5}
            >
              <FormControl>
                <FormLabel htmlFor="tipo" fontWeight="700">
                  Tipo
                </FormLabel>
                <Select
                  id="tipo"
                  placeholder="Selecione o tipo"
                  bg="gray.200"
                  borderRadius="15px"
                  borderColor="blue.default"
                  maxW="350px"
                  w="100%"
                  h="40px"
                  _hover={{ borderColor: 'none' }}
                  {...register('tipo', { required: 'Campo obrigatório' })}
                >
                  <option value="c">Contribuinte</option>
                  <option value="d">Beneficiário Dependente</option>
                  <option value="p">Pensionista</option>
                </Select>

                <Text color="red" minH="25px">
                  {errors.tipo?.message || ''}
                </Text>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="chavePresencial" fontWeight="700">
                  Chave de atendimento presencial
                </FormLabel>
                <Input
                  id="chavePresencial"
                  placeholder="Digite a chave"
                  bg="gray.200"
                  borderRadius="15px"
                  borderColor="blue.default"
                  maxW="350px"
                  w="100%"
                  h="40px"
                  _placeholder={{ color: 'black.default' }}
                  _hover={{ borderColor: 'none' }}
                  {...register('presencialKey', {
                    required: 'Campo obrigatório',
                  })}
                />
                <Text color="red" minH="25px">
                  {errors.presencialKey?.message || ''}
                </Text>
              </FormControl>
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
                <Text color="red" minH="25px">
                  {errors.cpf?.message || ''}
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="senha" fontWeight="700">
                  Senha
                </FormLabel>
                <Input
                  id="senha"
                  type="password"
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
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,30}$/,
                      message: 'Senha inválida',
                    },
                  })}
                />

                <Text color="red" minH="25px">
                  {errors.senha?.message || ''}
                </Text>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="senhaConfirmar" fontWeight="700">
                  Confirmar senha
                </FormLabel>
                <Input
                  id="senhaConfirmar"
                  type="password"
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
                      value === watch('senha') || 'As senhas não coincidem',
                  })}
                />

                <Text color="red" minH="25px">
                  {errors.confirmaSenha?.message || ''}
                </Text>
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
              </Flex>
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

export default FormAtendimentoPresencial;
