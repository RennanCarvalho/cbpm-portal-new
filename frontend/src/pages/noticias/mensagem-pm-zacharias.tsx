import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';

const MessagePMZacharias = () => {
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
          MENSAGEM DO SD PM ZACHARIAS
        </Heading>

        <VStack align="flex-start" mt={5} mb={5}>
          <Text>
            A Caixa Beneficente da Polícia Militar (CBPM) agradece e compartilha
            a mensagem espontânea do contribuinte Sd PM Reinaldo Pereira
            Zacharias, Presidente da Organização Nacional de Direitos Humanos
            dos Agentes de Segurança Pública (ONDHAS).
          </Text>

          <Text pb={10}>
            No vídeo “Devemos valorizar o Hospital da Cruz Azul”, o soldado fala
            sobre a importância de resguardar o patrimônio da família
            policial-militar, demonstrando o alto padrão de qualidade
            viabilizado pelo Termo de colaboração entre a CBPM e a Cruz Azul
            para a Assistência Médico - Hospitalar dos beneficiários dependentes
            legais dos contribuintes deste regime assistencial exclusivo.
          </Text>

          <iframe
            width="100%"
            height="506"
            src="https://www.youtube.com/embed/VxFuGGh9408"
            title="Mensgem do PM Zacharias"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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

export default MessagePMZacharias;
