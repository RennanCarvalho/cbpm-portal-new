import {
  Center,
  Container,
  Heading,
  Img,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';

const HistoricalHeritage = () => {
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
        mb={10}
      >
        <VStack align="flex-start">
          <Heading
            as="h1"
            fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
            color="blue.default"
            textAlign="left"
            mt={10}
            mb={5}
          >
            RESUMO HISTÓRICO
          </Heading>

          <Text
            fontWeight="700"
            fontSize={{ base: 'md', sm: 'md', md: 'xl', lg: 'xl' }}
          >
            Linha do tempo
          </Text>
        </VStack>

        <Center>
          <Img src="/linha_do_tempo.png" maxW="800px" w="100%" alt='imagem da linha do tempo da CBPM'/>
        </Center>
      </Container>
    </Fragment>
  );
};

export default HistoricalHeritage;
