import { Container, Heading, HStack, Text, VisuallyHidden, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import Header from '../components/Header';
import Link from '../components/Link';

const Articles = () => {
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
          ARTIGOS
        </Heading>

        <HStack mb={2}>
          <Link
            href="/pdfs/portarias/portaria_cbpm_01_01_2020.pdf"
            fontWeight="700"
            fontSize="lg"
            isExternal
          >
            <FaFilePdf size="50px" />
            <VisuallyHidden>arquivo portaria cbpm 01/01/2020</VisuallyHidden>
          </Link>

          <VStack align="flex-start">
            <Text fontWeight="700">
              EXPOSIÇÃO DE MOTIVOS À PORTARIA CBPM – 1, DE 17-01-2020
            </Text>

            <Text fontSize="sm">
              A CBPM edita a presente Portaria por força da Lei Complementar
              1.353, de 10-01-2020, que veio disciplinar aspectos importantes do
              atendimento médico-hospitalar do sistema...
            </Text>
          </VStack>
        </HStack>
      </Container>
    </Fragment>
  );
};

export default Articles;
