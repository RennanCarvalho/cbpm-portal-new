import { Center, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';

const HistoricalVideo = () => {
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
        <VStack align="flex-start">
          <Heading
            as="h1"
            fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
            color="blue.default"
            textAlign="left"
            mt={10}
            mb={5}
          >
            VÍDEO HISTÓRICO
          </Heading>

          <Text
            fontWeight="700"
            fontSize={{ base: 'md', sm: 'md', md: 'xl', lg: 'xl' }}
          >
            Filme da Força Pública de São Paulo
          </Text>
        </VStack>

        <Center mt={10}>
          <iframe
            width="890"
            height="500"
            src="https://www.youtube.com/embed/oM8QUxB-lu0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </Center>
      </Container>
    </Fragment>
  );
};

export default HistoricalVideo;
