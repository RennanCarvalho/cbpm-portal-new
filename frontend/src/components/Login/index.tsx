import {
  Button,
  Container,
  Flex,
  Heading,
  useBreakpointValue,
  Text,
  VStack
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
      // minH="100vh"
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
        Área de Serviço do Contribuinte/Dependente<br /> Sistema AMH
      </Heading>

      <Flex
          mt={'4rem'}
          justify={'center'}
          alignItems={'center'}
          gap={'20px'}
          flexDirection={useBreakpointValue({ base: 'column', lg: 'row' })}
      >
        <SignInProvider>
          <FormLogin />
        </SignInProvider>
        <Divisor
          texto='ou'
          isHorizontal={useBreakpointValue({ base: true, lg: false  })}
/>
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
            Passo a passo para o recadastramento de beneficiários
            <br />
            <br />
            CLIQUE AQUI
          </Button>
        </Link>
      </Flex>
      
      <VStack
        bg={'blue.default'}
        color={'white.default'}
        p={'20px'}
        mt={'24px'}
        width={'100%'}
        gap={'10px'}
        alignItems={'left'}
        >
          <Text><strong>© 2025 CBPM.SP.GOV.BR. Todos os direitos reservados.</strong></Text>
          <Text>
            Portal de Serviços – Site Institucional CBPM – Versão nº {process.env.NEXT_PUBLIC_VERSION || '25.01.01-01'}<br/>
            Autorizado por Cel Mônica Puliti Dias Ferreira<br/>
            homologado por Ten-Cel Rogerio Cabral Camargo<br/>
            Desenvolvido e Implantado pela Sessão de T.I. - Sup Tec Com Corp-CBPM
          </Text>
      </VStack>
    </Container>
    
  );
};

export default LoginComponent;
