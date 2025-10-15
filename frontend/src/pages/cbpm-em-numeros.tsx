import { Container, Heading, HStack, Text, VisuallyHidden } from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import Header from '../components/Header';
import Link from '../components/Link';

const CBPMInNumbers = () => {
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
          CBPM EM NÚMEROS
        </Heading>

        <HStack mb={2}>
          <Link href="/pdfs/receita_de_imoveis_2006.pdf" isExternal>
            <FaFilePdf size="30px" />
            <VisuallyHidden>arquivo de receita de imoveis 2006</VisuallyHidden>
          </Link>
          <Text fontWeight="700" fontSize="lg">
            Receita de Imóveis
          </Text>
        </HStack>
      </Container>
    </Fragment>
  );
};

export default CBPMInNumbers;
