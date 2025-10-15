import {
  Button,
  Container,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { SignInProvider } from '../../contexts/SignInContext';
import { CreateAccount } from './CreateAccount';
import { FormLogin } from './FormLogin';
import Link from '../Link';
import { Divisor } from './Divisor';

const LoginComponent = () => {
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
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
        as="h1"
        textDecor="underline"
        textAlign="center"
        mt={10}
      >
        ÁREA DE SERVIÇO DO USUÁRIO
      </Heading>

      <Flex mt={'4rem'} justify={'space-evenly'}>
        <SignInProvider>
          <FormLogin />
        </SignInProvider>
        <Divisor texto='ou'/>
        <CreateAccount />
      </Flex>

      <Flex mt={'4rem'} justify={'center'}>
        <Link
          href="/pdfs/passo-a-passo-recadastramento.pdf"
          color="white.default"
          target="_blank"
        >
          <Button
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.crystal"
            color="white.default"
            px={{ base: 7, sm: 7, md: 8, lg: 10 }}
            py={5}
            borderRadius="7% / 70%"
            _hover={{ color: 'none' }}
            height={'auto'}
          >
            Passo a passo para o<br />
            recadastramento de beneficiários
            <br />
            <br />
            CLIQUE AQUI
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default LoginComponent;
