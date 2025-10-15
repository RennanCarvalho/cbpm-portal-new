import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import Link from '../Link';
import { Modal } from './Modal';

export const RecoveryPassword = () => {
  const toast = useToast();

  const [toggle, setToggle] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleRecovery({ email }: any): Promise<void> {
    try {
      await api.post('/forgot', {
        email,
      });

      setToggle(true);
    } catch (error: any) {
      toast({
        description: `${error.request.response}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
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
      fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
    >
      <Heading
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
        as="h1"
        textDecor="underline"
        textAlign="center"
        whiteSpace="nowrap"
        mt={10}
        mb={10}
      >
        RECUPERAR SENHA
      </Heading>

      <Stack alignItems="center">
        <form
          onSubmit={handleSubmit(handleRecovery)}
          style={{ maxWidth: '350px', width: '100%' }}
        >
          <VStack>
            <FormControl isInvalid={errors.email}>
              <FormLabel
                htmlFor="email"
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
              >
                Informar o e-mail cadastrado
              </FormLabel>

              <Input
                id="email"
                placeholder="Digite seu e-mail"
                bg="gray.200"
                borderRadius="3xl"
                borderColor="blue.default"
                w="100%"
                py={4}
                type="email"
                _placeholder={{ color: 'black.default' }}
                _hover={{ borderColor: 'none' }}
                {...register('email', {
                  required: 'Digite seu e-mail',
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              bg="blue.default"
              color="white.default"
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              borderRadius="3xl"
              isFullWidth
              _hover={{ color: 'none' }}
            >
              Recuperar
            </Button>

            <Box>
              <Link href="/login">
                <Button
                  type="submit"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  px={{ base: 7, sm: 7, md: 8, lg: 10 }}
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

        <Modal toggle={toggle} />
      </Stack>
    </Container>
  );
};
