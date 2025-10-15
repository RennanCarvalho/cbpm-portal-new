import {
  Box,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';
import Link from '../components/Link';

const AgreementTerm = () => {
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
          TERMO DE CONVÊNIO E COOPERAÇÃO TÉCNICA CBPM/CRECISP
        </Heading>

        <Box mb={10}>
          <VStack spacing="22px">
            <Box border="2px" borderColor="blue.default" w="100%">
              <Box p={3}>
                <Text fontWeight="700">
                  EXTRATO N. CBPM-007-21, DE 29-09-21, DOE DE 30-09-21, SEÇÃO I,
                  P. 22 TERMO DE CONVÊNIO E COOPERAÇÃO TÉCNICA N. 001-21
                </Text>
              </Box>

              <Divider />
              <Divider />

              <Box p={3}>
                <Link
                  href="/pdfs/extratos/extrato_termo_007_01_2021.pdf"
                  isExternal
                >
                  Termo de convênio e Cooperação Técnica que entre si celebram o
                  Conselho Regional de...(ler mais)
                </Link>
              </Box>
            </Box>

            <Box border="2px" borderColor="blue.default" w="100%">
              <Box p={3}>
                <Text fontWeight="700">DIÁRIO OFICIAL DA UNIÃO</Text>
              </Box>

              <Divider />
              <Divider />

              <Box p={3}>
                <Link
                  href="/pdfs/diario_oficial_cooperacao_crecisp.pdf"
                  isExternal
                >
                  OBJETO: Diário Oficial da União - ISSN 1677-7069 Nº 183, segunda-feira, 27 de setembro de 2021 ...(ler mais)
                </Link>
              </Box>
              <Box p={3}>
                <Link
                  href="/pdfs/DOUCBPM05.09.2022termo aditivo.pdf"
                  isExternal
                >
                  OBJETO: Primeiro Termo Aditivo ao Termo de Convênio e Cooperação Técnica que celebram...(ler mais)
                </Link>
              </Box>
            </Box>

            <Box border="2px" borderColor="blue.default" w="100%">
              <Box p={3}>
                <Text fontWeight="700">TERMO DE COOPERAÇÃO </Text>
              </Box>

              <Divider />
              <Divider />

              <Box p={3}>
                <Link href="/pdfs/termos/termo_convenio_001_21.pdf" isExternal>
                  Conselho regional de corretores de imóveis da 2º região...
                  (ler mais)
                </Link>
              </Box>
              <Box p={3}>
                <Link href="/pdfs/termos/ADITIVOCBPM23.09.22.pdf" isExternal>
                  PRIMEIRO TERMO ADITIVO AO CONVÊNIO NÃO ONEROSO REFERENTE AO
                  ACORDO DE COOPERAÇÃO TÉCNICA PARA...
                  (ler mais)
                </Link>
              </Box>
            </Box>

            <Box border="2px" borderColor="blue.default" w="100%">
              <Box p={3}>
                <Text fontWeight="700">
                  CORRETORES AVALIARÃO IMÓVEIS DA CAIXA BENEFICENTE DA PM{' '}
                </Text>
              </Box>

              <Divider />
              <Divider />

              <Box p={3}>
                <Link href="/noticias/corretores-caixa-beneficente">
                  A Caixa Beneficente da Polícia Militar (CBPM) é uma
                  instituição criada em 1905, vinculada à Secretaria...(ler
                  mais)
                </Link>
              </Box>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Fragment>
  );
};

export default AgreementTerm;
