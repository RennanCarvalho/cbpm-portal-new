import {
  Button,
  Center,
  Container,
  Heading,
  Img,
  Text,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';

const PharmacyBenefit = () => {
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
        fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
      >
        <Heading
          as="h1"
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          color="blue.default"
          textAlign="left"
          mt={10}
          mb={5}
        >
          BENEFÍCIO FARMÁCIA
        </Heading>

        <Text mb={2}>
          Prezados contribuintes, pensionistas e beneficiários dependentes da
          CBPM, no mês de maio do corrente ano, firmou novos contratos com as
          empresas{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            Drogaria São Paulo, Droga Raia e Drogasil
          </span>{' '}
          visando melhorar Benefícios Farmácia, garantindo aos usuários da CBPM
          o acesso a produtos por elas comercializados com descontos
          compensadores.
        </Text>

        <Text mb={10}>
          Bem por isso, será possível adquirir medicamentos e outros produtos
          nessas farmácias com os descontos previstos nas tabelas abaixo. Basta
          apresentar o seu CPF ou o Cartão de Identificação de beneficiários
          dependentes e pensionistas ao atendente da farmácia.
        </Text>

        <Center w="100%">
          <Img src="/noticias/beneficio-farmacia/drogaria_noticia_1.png" alt='imagem sobre as vantagens exclusivas dos beneficiários' />
        </Center>

        <Center w="100%" mb={10}>
          <Img src="/noticias/beneficio-farmacia/drogaria_noticia_2.png" alt='imagem sobre as vantagens exclusivas dos beneficiários 2'/>
        </Center>

        <Center w="100%" p={10}>
          <Link href="/noticias">
            <Button
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              bg="blue.default"
              color="white.default"
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              borderRadius="3xl"
              isFullWidth
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

export default PharmacyBenefit;
