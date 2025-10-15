import { Fragment } from 'react';
import Header from '../../components/Header';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Img,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  FaFilm,
  FaHardHat,
  FaInfoCircle,
  FaRegFileAlt,
  FaTools,
  FaVideo,
} from 'react-icons/fa';

const ConductCode = () => {
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
          textAlign="center"
          mt={10}
          mb={5}
        >
          Código de Conduta e Integridade - CBPM
        </Heading>
        <Center
          justifyContent="center"
          justifyItems={'center'}
          flexDirection={'column'}
          gap={'50px'}
        >
          <Img src="/../pagina-em-construcao.png" width="300px" alt="Imagem com titulo - Em Construção"/>
        </Center>
        <Center w="100%" mt={10}>
          <Link href="/integridade">
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

export default ConductCode;
