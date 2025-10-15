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

const AgreementTermASD = () => {
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
          TERMO DE CONVÊNIO CBPM/DEFENSORIA PÚBLICA DO ESTADO
        </Heading>

        <Box mb={10}>
          <VStack spacing="22px">

            <Box border="2px" borderColor="blue.default" w="100%">
              <Box p={3}>
                <Text fontWeight="700">
                  TERMO DE CONVÊNIO CBPM-DEFENSORIA PÚBLICA
                </Text>
              </Box>

              <Divider />
              <Divider />

              <Box p={3}>
                <Link
                  href="/pdfs/portal_transparencia/defensoria_publica/TERMO DE CONVÊNIO CBPM-DEFENSORIA PÚBLICA, 19-07-22 .pdf"
                  isExternal
                >
                  CONVÊNIO que entre si celebram o Estado de São Paulo, por intermédio da SECRETARIA DA SEGURANÇA ...(ler mais)
                </Link>
              </Box>
            </Box>

            <Box border="2px" borderColor="blue.default" w="100%">
              <Box p={3}>
                <Text fontWeight="700">
                  DECRETO N. 66.978 de 19J-07-22, DOE DE 20-07-22.
                </Text>
              </Box>

              <Divider />
              <Divider />

              <Box p={3}>
                <Link
                  href="/pdfs/portal_transparencia/defensoria_publica/DECRETO N. 66.978 de 19J-07-22, DOE DE 20-07-22.pdf"
                  isExternal
                >
                  Decreto
                  nº 64.764, de 27 de janeiro de 2020, e dá providências correlatas...(ler mais)
                </Link>
              </Box>
            </Box>



            <Box border="2px" borderColor="blue.default" w="100%">
              <Box p={3}>
                <Text fontWeight="700">
                  EXTRATO DE CONVÊNIO GSSP-ATP-425-2022, 19-07-22, DOE 20-07-22, SEÇÃO 1- P.14.
                </Text>
              </Box>

              <Divider />
              <Divider />

              <Box p={3}>
                <Link
                  href="/pdfs/portal_transparencia/defensoria_publica/EXTRATO DE CONVÊNIO GSSP-ATP-425-2022, 19-07-22, DOE 20-07-22, SEÇÃO 1- P.14.pdf"
                  isExternal
                >
                  Viabilizar a assunção da prestação de assistência
                  judiciária e jurídica gratuita diretamente pela Defensoria Pública...(ler mais)
                </Link>
              </Box>
            </Box>

            <Box border="2px" borderColor="blue.default" w="100%">
              <Box p={3}>
                <Text fontWeight="700">
                  RESOLUÇÃO SSP N. 39, DE 19-07-22, DOE DE 20-07-22, SEÇÃO I, P.19
                </Text>
              </Box>

              <Divider />
              <Divider />

              <Box p={3}>
                <Link
                  href="/pdfs/portal_transparencia/defensoria_publica/RESOLUÇÃO SSP N. 39, DE 19-07-22, DOE DE 20-07-22, SEÇÃO I, P.19.pdf"
                  isExternal
                >
                  Regulamenta os Decretos nº 64.764 e 64.765, de 27 de
                  janeiro de 2020, que dispõem sobre a assistência judiciária e...(ler mais)
                </Link>
              </Box>
            </Box>



          </VStack>
        </Box>
      </Container>
    </Fragment>
  );
};

export default AgreementTermASD;
