import {
  Button,
  Center,
  Container,
  Heading,
  List,
  ListItem,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';

const PartnershipRegulatory = () => {
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
          MARCO REGULATÓRIO DA PARCERIA
        </Heading>

        <VStack align="flex-start" mb={10}>
          <List>
            <ListItem>
              <Link href="/pdfs/leis/lei_13_019.pdf" isExternal>
                Lei nº 13.019, de 31 de julho de 2014: Marco Regulatório das
                Organizações da Sociedade Civil
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/pdfs/leis/lei_1353.pdf" isExternal>
                Lei nº 452, de 2 de outubro de 1974: Institui a CBPM
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/pdfs/decretos/decreto_61_981.pdf" isExternal>
                Decreto Nº 61.981, de 20-05-2016: Dispõe sobre a aplicação, no
                âmbito da Administração direta e autárquica, que estabelece o
                regime jurídico das parcerias com organizações da sociedade
                civil.
              </Link>
            </ListItem>
          </List>
        </VStack>

        <Center w="100%">
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

export default PartnershipRegulatory;
