import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Img,
  Link as ChakraLink,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';

const AboutCBPM = () => {
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
        <Heading
          as="h1"
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          color="blue.default"
          textAlign="left"
          mt={10}
          mb={5}
        >
          SOBRE A CBPM
        </Heading>

        <VStack align="flex-start" mb={10}>
          <Box mb={5}>
            <Text>
              A Caixa Beneficente da Polícia Militar (CBPM) é uma autarquia
              instituída em 1905 e vinculada à Secretaria da Segurança Pública
              do Estado de São Paulo. Nos termos da Lei nº 452/74, tem como
              missão principal gerir o regime de Assistência Médico - Hospitalar
              dedicado aos familiares dos policiais militares contribuintes.
            </Text>
          </Box>

          <Box>
            <Img src="/fachada_cbpm.jpg" alt="Fachada CBPM" />
          </Box>
        </VStack>

        <Flex justify="space-between">
          <Box>
            <Img src="/fachada_cbpm_pequena_1.jpg" alt="perspectiva isometrica da fachada CBPM"/>
          </Box>

          <Box>
            <Img src="/fachada_cbpm_pequena_2.jpg" alt="corredor da CBPM" />
          </Box>

          <Box>
            <Img src="/fachada_cbpm_pequena_3.jpg" alt="portão casarão CBPM" />
          </Box>
        </Flex>

        <HStack
          justify={{
            base: 'center',
            sm: 'center',
            md: 'center',
            lg: 'space-between',
          }}
          flexWrap="wrap"
        >
          <VStack
            alignSelf="flex-start"
            w="600px"
            align="flex-start"
            spacing="22px"
          >
            <Heading
              size="lg"
              color="blue.default"
              textAlign="left"
              whiteSpace="nowrap"
              mt={10}
              mb={5}
            >
              INSÍGNIA TRADICIONAL
            </Heading>

            <Text>
              A insígnia da CBPM é formada por uma faixa circular intercalada em
              fundo branco, com a legenda “CAIXA BENEFICENTE DA POLÍCIA MILITAR”
              e a data de fundação 28-09-1905. Ao centro, há uma grande bacia
              com uma coluna central, terminada por uma taça menor acima, de
              onde saem jatos d’água que se dividem em curvas para a direita e a
              esquerda, caindo na mesma taça e na bacia menor para representar a
              Doutrina e a Beneﬁcência, como símbolos da benignidade e da
              generosidade.
            </Text>

            <VStack
              border="1px"
              borderColor="blue.default"
              p={5}
              borderRadius="2xl"
              spacing="22px"
              align="flex-start"
            >
              <Box>
                <Text fontWeight="700">LEI Nº 452, DE 02-10-1974</Text>

                <Text>
                  Institui a Caixa Beneﬁcente da Polícia Militar, estabelece os
                  regimes de pensão e de assistência...
                </Text>

                <ChakraLink
                  href="https://www.al.sp.gov.br/repositorio/legislacao/lei/1974/lei-452-02.10.1974.html"
                  isExternal
                >
                  (ler mais sobre lei 452-02.10.1974)
                </ChakraLink>
              </Box>

              <Box>
                <Text fontWeight="700">
                  LEI COMPLEMENTAR Nº 1.010, DE 01-07-2007
                </Text>

                <Text>
                  Dispõe sobre a criação da SÃO PAULO PREVIDÊNCIA - SPPREV,
                  entidade gestora do Regime...
                </Text>

                <ChakraLink
                  href="https://www.al.sp.gov.br/repositorio/legislacao/lei.complementar/2007/alteracao-lei.complementar-1010-01.06.2007.html"
                  isExternal
                >
                  (ler mais sobre alteracao lei complementar-1010-01.06.2007)
                </ChakraLink>
              </Box>

              <Box>
                <Text fontWeight="700">
                  LEI COMPLEMENTAR Nº 1.013, DE 06-07-2007
                </Text>

                <Text>
                  Altera a Lei n. 452, de 2 de outubro de 1974, e o
                  Decreto-lei...
                </Text>

                <ChakraLink
                  href="https://www.al.sp.gov.br/repositorio/legislacao/lei.complementar/2007/alteracao-lei.complementar-1013-06.07.2007.html"
                  isExternal
                >
                  (ler mais sobre alteracao lei complementar-1013-06.07.2007)
                </ChakraLink>
              </Box>

              <Box>
                <Text fontWeight="700">
                  LEI COMPLEMENTAR Nº 1.349, DE 25-11-2019
                </Text>

                <Text>
                  Altera dispositivos da Lei nº 452, de 2 de outubro de 1974...
                </Text>

                <ChakraLink
                  href="https://www.al.sp.gov.br/repositorio/legislacao/lei.complementar/2019/lei.complementar-1349-25.11.2019.html"
                  isExternal
                >
                  (ler mais sobre lei complementar-1349-25.11.2019)
                </ChakraLink>
              </Box>

              <Box>
                <Text fontWeight="700">
                  LEI COMPLEMENTAR Nº 1.353, DE 10-01-2020
                </Text>

                <Text>
                  Altera dispositivos da Lei nº 452, de 2 de outubro de 1974,
                  que...
                </Text>

                <ChakraLink
                  href="https://www.al.sp.gov.br/repositorio/legislacao/lei.complementar/2020/lei.complementar-1353-10.01.2020.html"
                  isExternal
                >
                  (ler mais sobre lei complementar-1353-10.01.2020)
                </ChakraLink>
              </Box>

              <Box>
                <Text fontWeight="700">DECRETO Nº 49.774, DE 15-07-2005</Text>

                <Text>
                  Institui a Medalha General Francisco Alves do Nascimento
                  Pinto...
                </Text>

                <ChakraLink
                  href="https://www.al.sp.gov.br/repositorio/legislacao/decreto/2005/decreto-49774-15.07.2005.html"
                  isExternal
                >
                  (ler mais sobre decreto 49774-15.07.2005)
                </ChakraLink>
              </Box>

              <Box>
                <Text fontWeight="700">DECRETO Nº 64.764, DE 27-01-2020</Text>

                <Text>
                  Regulamenta o artigo 35 da Lei n° 452, de 2 de outubro...
                </Text>

                <ChakraLink
                  href="https://www.al.sp.gov.br/repositorio/legislacao/decreto/2020/decreto-64764-27.01.2020.html"
                  isExternal
                >
                  (ler mais sobre decreto 64764-27.01.2020)
                </ChakraLink>
              </Box>

              <Box>
                <Text fontWeight="700">PORTARIA CBPM – 48, DE 13–11–2020</Text>

                <Text>
                  Estabelece a normatização dos símbolos oficiais da CBPM com...
                </Text>

                <ChakraLink
                  href="/pdfs/portarias/portaria_cbpm_48_11_2020.pdf"
                  isExternal
                >
                  (ler mais sobre portaria cbpm 48_11_2020)
                </ChakraLink>
              </Box>
            </VStack>
          </VStack>

          <Box pt={10}>
            <Img src="/insignia_cbpm.jpg" alt="imagem insígnia CBPM"/>
          </Box>
        </HStack>
      </Container>
    </Fragment>
  );
};

export default AboutCBPM;
