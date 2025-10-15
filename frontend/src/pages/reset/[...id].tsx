import {
  Box,
  Flex,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
  VStack,
  Heading,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { setupAPIClient } from '../../services/setupAPIClient';

// type Reset = {
//   id: string;
//   token: string;
//   senha: string;
//   confirmaSenha: string;
// };

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const api = setupAPIClient();

  const router = useRouter();
  const toast = useToast();

  const senha = useRef({});
  senha.current = watch('senha', '');

  async function handleReset({ senha, confirmaSenha }: any): Promise<void> {
    try {
      if (router.query.id) {
        const id = router.query.id[0];
        const token = router.query.id[1];

        await api.post('/reset', {
          id,
          token,
          senha,
          confirmaSenha,
        });

        toast({
          description: 'Senha alterada com sucesso!',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });

        router.push('/login');
      }
    } catch (error: any) {
      toast({
        description: 'Favor solicitar novamente a recuperação de senha',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  }

  return (
    <>
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

          <form onSubmit={handleSubmit(handleReset)}>
            <VStack>
              <FormControl isInvalid={errors.senha}>
                <FormLabel htmlFor="senha" fontWeight="700" fontSize="md">
                  Sua nova senha
                </FormLabel>

                <Input
                  id="senha"
                  placeholder="Digite sua nova senha"
                  bg="gray.200"
                  borderRadius="3xl"
                  borderColor="blue.default"
                  w="350px"
                  py={4}
                  type="password"
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
                <FormErrorMessage>
                  {errors.senha && errors.senha.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.confirmaSenha}>
                <FormLabel
                  htmlFor="confirmaSenha"
                  fontWeight="700"
                  fontSize="md"
                >
                  Confirme sua senha
                </FormLabel>

                <Input
                  id="confirmaSenha"
                  placeholder="Confirme sua senha"
                  bg="gray.200"
                  borderRadius="3xl"
                  borderColor="blue.default"
                  w="350px"
                  py={4}
                  type="password"
                  _placeholder={{ color: 'black.default' }}
                  _hover={{ borderColor: 'none' }}
                  {...register('confirmaSenha', {
                    required: 'Campo obrigatório',
                    validate: value =>
                      value === watch('senha') || 'Senha incorreta',
                  })}
                />
                <FormErrorMessage>
                  {errors.confirmaSenha && errors.confirmaSenha.message}
                </FormErrorMessage>
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
              <Button
                type="submit"
                bg="blue.default"
                color="white.default"
                px={10}
                py={5}
                borderRadius="3xl"
                isFullWidth
                _hover={{ color: 'none' }}
              >
                Alterar senha
              </Button>

              <Box>
                <Link href="/login" passHref>
                  <Button
                    type="submit"
                    px={10}
                    py={5}
                    borderRadius="3xl"
                    border="1px"
                    borderColor="blue.default"
                    _hover={{ color: 'none' }}
                  >
                    Voltar
                  </Button>
                </Link>
              </Box>
            </VStack>
          </form>
        </Stack>
      </Container>
    </>
  );
};

export default ResetPassword;
