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

const PinkDate = () => {
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
          Encontro Rosa: conscientização e apoio às mulheres no Hospital Cruz
          Azul
        </Heading>

        <Text mb={2}>
          O Hospital Cruz Azul realiza no dia 24 de outubro, às 8h, o Encontro
          Rosa, uma manhã dedicada à conscientização sobre o câncer de mama e à
          valorização da saúde da mulher.
        </Text>
        <Text mb={2}>
          A programação conta com palestras de especialistas em oncologia,
          nutrição, psicologia e ginecologia, além de depoimentos emocionantes e
          discussões sobre temas como empoderamento, autoestima e reinserção
          profissional.
        </Text>
        <Text mb={2}>
          O evento é gratuito e será realizado no Auditório do Hospital Cruz
          Azul, localizado na Av. Lins de Vasconcelos, 356 – Cambuci. As
          inscrições podem ser feitas pelo QR Code disponível no material de
          divulgação.
        </Text>

        <Center w="100%">
          <Img
            src="/carousel/imagem-encontro-rosa.jpeg"
            alt="imagem sobre encontro rosa"
          />
        </Center>

        <Center w="100%" mb={10}>
          <Link href="/carousel/video-encontro-rosa.mp4" target="_blank">
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
              Assistir vídeo sobre evento
            </Button>
          </Link>
        </Center>
        <Center w="100%" mb={10}>
          <Link href="https://www.instagram.com/caixabeneficente_sp/reel/DPv6FMajdGT/" target="_blank">
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
              Acessar post no Instagram
            </Button>
          </Link>
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

export default PinkDate;
