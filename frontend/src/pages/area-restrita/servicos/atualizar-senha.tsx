import { useForm } from 'react-hook-form';
import {
  useToast,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Container,
  Stack,
  Heading,
  Flex,
  Text,
  Box,
  Link,
} from '@chakra-ui/react';
import { setupAPIClient } from '../../../services/setupAPIClient';
import Header from '../../../components/Header';
import router from 'next/router';
import { withSSRAuth } from '../../../utils/withSSRAuth';
import { InferGetServerSidePropsType } from 'next';

const ChangePasswordPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const api = setupAPIClient();

  const onSubmit = async ({ novaSenha, confirmaSenha }: any) => {
    if (novaSenha !== confirmaSenha) {
      toast({
        description: 'Senhas não conferem',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
      return;
    }

    try {
      await api.put('/user/change-password', {
        senha: novaSenha,
        confirmaSenha,
      });
      toast({
        description: 'Senha alterada com sucesso',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
      router.push('/area-restrita/servicos/atualizar-dados');
    } catch (err: any) {
      toast({
        description: err.response?.data?.message || 'Erro ao alterar senha',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  return (
    <>
      <Header />
      <Container
        maxW="max"
        centerContent
        bgImage="url('/bg_cbpm.png')"
        bgSize="50% 100%"
        bgRepeat="no-repeat"
        bgPosition="right"
        h="70vh"
      >
        <Stack w="1280px" alignItems="center" mt="80px">
          <Heading as="h1" fontSize="3xl" fontWeight="700" mb="30px">
            ALTERAR SENHA
          </Heading>

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
              <FormControl isInvalid={errors.novaSenha}>
                <FormLabel fontWeight="700">Nova senha</FormLabel>
                <Input
                  type="password"
                  placeholder="Digite sua nova senha"
                  bg="gray.200"
                  borderRadius="3xl"
                  {...register('novaSenha', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,30}$/,
                      message: 'Senha inválida',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.novaSenha && errors.novaSenha.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.confirmaSenha}>
                <FormLabel fontWeight="700">Confirme a senha</FormLabel>
                <Input
                  type="password"
                  placeholder="Confirme sua senha"
                  bg="gray.200"
                  borderRadius="3xl"
                  {...register('confirmaSenha', {
                    required: 'Campo obrigatório',
                    validate: value =>
                      value === watch('novaSenha') || 'Senha não confere',
                  })}
                />
                <FormErrorMessage>
                  {errors.confirmaSenha && errors.confirmaSenha.message}
                </FormErrorMessage>
              </FormControl>

              <Flex direction="column" alignSelf="flex-start" fontSize="sm">
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

              <Button
                type="submit"
                bg="blue.default"
                color="white.default"
                px={10}
                py={5}
                borderRadius="3xl"
                isFullWidth
              >
                Alterar senha
              </Button>

              <Link href="/area-restrita/servicos/atualizar-dados">
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
            </VStack>
          </form>
        </Stack>
      </Container>
    </>
  );
};
export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/user/show');

  return {
    props: JSON.parse(JSON.stringify(response.data)),
  };
});

export default ChangePasswordPage;
