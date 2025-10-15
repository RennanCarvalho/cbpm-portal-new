import {
  Button,
  Center,
  Container,
  Heading,
  HStack,
  List,
  ListItem,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';

const Partnership = () => {
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
          PARCERIA CBPM E CRUZ AZUL SP
        </Heading>

        <VStack align="flex-start" mb={10}>
          <List>
            <ListItem>
              {' '}
              <Link
                href="/pdfs/termos/termo_colaboracao_001_01_2020_scan.pdf"
                isExternal
              >
                Termo de colaboração nº CBPM-01/01/2020
              </Link>
            </ListItem>
            <ListItem>
                <Link
                  href="/pdfs/plano_de_trabalho/plano-de-Trabalho-Anexo-1-scan.pdf"
                  isExternal
                >
                  Plano de Trabalho |
                </Link>
            </ListItem>
            <ListItem>
            <Link
                  href="/pdfs/anexos/anexo_a_assistencia_medico_hospitalar.pdf"
                  isExternal
                >
                  Anexo A |
                </Link>
            </ListItem>
            <ListItem>
            <Link href="/pdfs/anexos/anexo_b.pdf" isExternal>
                  Anexo B
                </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/pdfs/plano_de_trabalho/plano-de-trabalho-apenso-1.pdf"
                isExternal
              >
                Plano de Trabalho (Apensos)
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/pdfs/manuais/Manual-de-Prestacao-de-Contas-04-2020.pdf"
                isExternal
              >
                Manual de Prestação de Contas
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/pdfs/extratos/extrato_manual_prestacao_de_contas_scan.pdf"
                isExternal
              >
                Publicação do Extrato do Manual de Prestação de Contas
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

export default Partnership;
