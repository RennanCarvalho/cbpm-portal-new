import {
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Text,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import Header from '../../components/Header';
import Link from '../../components/Link';

const HiringRegulation = () => {
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
        fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
      >
        <Heading
          as="h1"
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          color="blue.default"
          textAlign="left"
          mt={10}
          mb={5}
        >
          DECRETO N° 5376, ART.17, 18, 19 E 20
        </Heading>

        <HStack mb={2}>
          <Link
            href="/pdfs/decretos/decreto_5376.pdf"
            fontWeight="700"
            fontSize="lg"
            isExternal
          >
            <FaFilePdf size="50px" />
                        <VisuallyHidden>arquivo decreto 5376</VisuallyHidden>
            
            
          </Link>

          <VStack align="flex-start">
            <Text fontWeight="700">
              Decreto n. 5.376, de 26 de Dezembro de 1974
            </Text>

            <Text fontSize="sm">
              A Caixa Beneficente da Polícia Militar do Estado (CBPM),
              instituída pela Lei n.º 452, de 2 de outubro de 1974
            </Text>
          </VStack>
        </HStack>

        <Center w="100%" m={10}>
          <Link href="/portal-da-transparencia">
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

export default HiringRegulation;
