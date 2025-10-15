import { Button, Center, Container, Heading } from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';
import Link from '../components/Link';

const UnderConstruction = () => {
  return (
    <Fragment>
      <Header />
      <Container
        maxW="1280px"
        w="100%"
        bgImage="url('/bg_cbpm.png')"
        bgSize="50% 100%"
        bgRepeat="no-repeat"
        bgPosition="right"
        h="70vh"
        fontSize={{ base: 'sm', md: 'md' }}
      >
        <Heading as="h1" textAlign="center" pt={20}>
          EM CONSTRUÇÃO
        </Heading>

        <Center w="100%" p={10}>
          <Link href="/">
            <Button
              bg="blue.default"
              color="white.default"
              px={10}
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

export default UnderConstruction;
