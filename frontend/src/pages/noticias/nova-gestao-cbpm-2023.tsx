import {
  Button,
  Center,
  Container,
  Heading,
  Img,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';

const Realtors = () => {
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
          NOVA GESTÃO NA CBPM
        </Heading>

        <Center w="100%">
          <Img src="/noticias/nova-gestao-cbpm-2023/1.png" alt="Imagem da notícia da nova gestão 2023 - CBPM" />
        </Center>

        <VStack align="flex-start" mt={5} mb={5}>
          <Text mb={2} fontWeight="700">
            NOVA GESTÃO NA CBPM
          </Text>

          <Text>
            O Cel Clemente assume a Caixa Beneficente da Polícia Militar do Estado (CBPM). Formado pela Academia de Polícia Militar do Barro Branco em 1993, atuou no Corpo de Bombeiros por quase 27 anos. É Advogado e possui formação em Engenharia Civil.
            Com sua nova gestão, a CBPM tem o projeto de modernizar processos, melhorar os canais de comunicação com seus usuários e ampliar os serviços prestados aos militares do Estado e seus familiares.
          </Text>

          <Text>
            Um projeto em andamento é a expansão dos atendimentos médico- hospitalares ao litoral e interior. Os familiares dos militares estaduais cadastrados na CBPM podem ser atendidos em hospitais e clínicas de 11 grandes cidades
            paulistas: Bauru, Santos, Mogi das Cruzes, Caraguatatuba, São José do Rio Preto, São José dos Campos, Presidente Prudente, Ribeirão Preto, Porto Feliz, Sorocaba e Bragança Paulista.
          </Text>

          <Text>
          O principal canal de comunicação com nossos contribuintes e beneficiários é o portal de serviços da CBPM, nos acompanhe também no instagram e facebook @caixabeneficente.
          </Text>

        </VStack>

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

export default Realtors;
