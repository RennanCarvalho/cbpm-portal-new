import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';
import Header from '../components/Header';
import Link from '../components/Link';

const Mutualism = () => {
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
          MUTUALISMO
        </Heading>

        <VStack align="flex-start">
          <Text>
            A Caixa Beneficente custeia o regime de Assistência Médico -
            Hospitalar com a receita advinda das contribuições dos próprios
            policiais militares e pensionistas.
          </Text>
          <Box pl={10}>
            <HStack>
              <Box>
                <FaRegHandPointRight size="30px" />
              </Box>

              <Text>
                A contribuição mensal dos policiais militares e pensionistas é
                destinada, exclusivamente, às despesas do regime de Assistência
                Médico - Hospitalar dos seus beneficiários dependentes.
              </Text>
            </HStack>

            <HStack mb={2}>
              <Box>
                <FaRegHandPointRight size="30px" />
              </Box>

              <Text>
                Ao ingressar com processos para cessar a contribuição, muitos
                policiais militares e pensionistas não avaliam as consequências
                de deixar a família sem atendimento pela Cruz Azul de São Paulo
                e perder os descontos no Colégio PM.
              </Text>
            </HStack>

            <HStack mb={2}>
              <Box>
                <FaRegHandPointRight size="30px" />
              </Box>

              <Text>
                O policial militar solteiro, e que não tenha filhos, pode
                colocar seus pais como beneficiários dependentes.
              </Text>
            </HStack>

            <HStack mb={2}>
              <Box>
                <FaRegHandPointRight size="30px" />
              </Box>

              <Text>
                Contribuintes e beneficiários dependentes têm acesso aos
                benefícios das empresas parceiras.{' '}
                <Link href="/clube-de-beneficios" fontWeight="700">
                  Confira aqui!
                </Link>
              </Text>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Fragment>
  );
};

export default Mutualism;
