import {
  Button,
  Center,
  Container,
  Heading,
  Image,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';

const ListOfServiceProviders = () => {
  return (
    <Fragment>
      <Header />

      <Container
        maxW="1280px"
        w="100%"
        minH="100vh"
        bgImage="url('/bg_cbpm.png')"
        bgSize="650px 650px"
        bgRepeat="no-repeat"
        bgPosition="top right"
        fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
      >
        <Heading
          as="h1"
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          color="blue.default"
          textAlign="left"
          mt={10}
          mb={5}
        >
          PORTAL DA TRANSPARÊNCIA
        </Heading>

        <VStack mb={10} align="flex-start">
          <Link
            href="https://www.fazenda.sp.gov.br/SigeoLei131/Paginas/FlexConsDespesa.aspx"
            fontWeight="700"
            isExternal
          >
            ACESSO AO PORTAL DA TRANSPARÊNCIA
          </Link>
        </VStack>

        <Center>
          <Image
            src="/lista_de_prestadores_de_servico.jpg"
            alt="Passo a passo para busca de prestadores de serviço"
          />
        </Center>

        <Center w="100%" p={10}>
          <Link href="/portal-da-transparencia">
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
    </Fragment>
  );
};

export default ListOfServiceProviders;
