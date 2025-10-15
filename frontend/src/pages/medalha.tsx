import {
  Box,
  Container,
  Heading,
  HStack,
  Img,
  Link as ChakraLink,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';
import Link from '../components/Link';

const Medal = () => {
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
          MEDALHA CENTENÁRIO DA CBPM
        </Heading>

        <Box>
          <HStack
            mb={2}
            justify={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'flex-start',
            }}
            flexWrap="wrap"
          >
            <Img src="/medalha.png" />

            <VStack
              align="flex-start"
              spacing="60px"
              maxW={{ base: '100%', sm: '100%', md: '100%', lg: '700px' }}
            >
              <Text>
                Por meio do Decreto nº 49774/05, foi instituída a Medalha
                “General Francisco Alves do Nascimento Pinto”, comemorativa ao
                centenário da Caixa Beneﬁcente da Polícia Militar do Estado de
                São Paulo, destinada a distinguir os cidadãos, que por seus
                méritos pessoais e relevantes serviços prestados à Autarquia, se
                tornaram merecedores de reconhecimento. Excepcionalmente, a
                Medalha pode ser outorgada às pessoas jurídicas que tenham
                cooperado para o desenvolvimento da Caixa.
              </Text>

              <Text>
                <ChakraLink
                  href="https://www.al.sp.gov.br/repositorio/legislacao/decreto/2005/decreto-49774-15.07.2005.html"
                  isExternal
                  fontWeight="700"
                >
                  Clique aqui
                </ChakraLink>{' '}
                para conferir o Decreto Nº 49.774, de 15-07-2005
              </Text>
            </VStack>
          </HStack>
        </Box>

        <Heading
          size="lg"
          color="blue.default"
          textAlign="left"
          whiteSpace="nowrap"
          mt={10}
          mb={5}
        >
          HERÁLDICA
        </Heading>

        <Box mb={10}>
          <Text mb={5}>
            Cruz pátea de extremidades curvas, com 40mm (quarenta milímetros) de
            extremo a extremo de seus ramos, carregada de um disco central, com
            22mm (vinte e dois milímetros) de diâmetro e acantonada de endentado
            de 12 (doze) peças, tudo de prata, trazendo no anverso a efígie do
            General Francisco Alves do Nascimento Pinto, de perﬁl oitavado e
            coberto, tendo no reverso a insígnia da CAIXA BENEFICENTE,
            circundada do dizeres CAIXA BENEFICENTE DA POLÍCIA MILITAR DO ESTADO
            DE SÃO PAULO – 1905 – 2005.
          </Text>

          <Img src="/medalha_2.jpg" float="right" mb={{ base: 3 }} />

          <Text>
            É pendente de ﬁta de 34mm (trinta e quatro milímetros) de largura,
            com uma listra central azul de 15mm (quinze milímetros) de largura,
            ladeada de listras amarelas de 5mm (cinco milímetros) de largura e
            de ﬁletes nas cores preta, branca e vermelha, com 1,5mm (um
            milímetro e meio) de largura cada um. A honraria é acompanhada de
            miniatura, roseta, barreta e diploma.
          </Text>
        </Box>

        <HStack justify="center">
          <Box mr={3} pb={1}>
            <Text>Agraciados: </Text>
          </Box>
          <VStack pt={7} fontWeight="700">
            <HStack>
              <Link
                href="/pdfs/medalhas/agraciados_medalha_2007.pdf"
                isExternal
              >
                2007,
              </Link>

              <Link
                href="/pdfs/medalhas/agraciados_medalha_2008.pdf"
                isExternal
              >
                2008,
              </Link>

              <Link
                href="/pdfs/medalhas/agraciados_medalha_2009.pdf"
                isExternal
              >
                2009,
              </Link>

              <Link
                href="/pdfs/medalhas/agraciados_medalha_2010.pdf"
                isExternal
              >
                2010,
              </Link>

              <Link
                href="/pdfs/medalhas/agraciados_medalha_2011.pdf"
                isExternal
              >
                2011,
              </Link>
            </HStack>

            <HStack ml={4}>
              <Link
                href="/pdfs/medalhas/agraciados_medalha_2013.pdf"
                isExternal
              >
                2013,
              </Link>

              <Link
                href="/pdfs/medalhas/agraciados_medalha_2015.pdf"
                isExternal
              >
                2015,
              </Link>

              <Link
                href="/pdfs/medalhas/agraciados_medalha_2016.pdf"
                isExternal
              >
                2016,
              </Link>

              <Link
                href="/pdfs/medalhas/agraciados_medalha_2017.pdf"
                isExternal
              >
                2017,
              </Link>

              <Link
                href="/pdfs/medalhas/agraciados_medalhas_2022.pdf"
                isExternal
              >
                2022.
              </Link>
            </HStack>
          </VStack>
        </HStack>
      </Container>
    </Fragment>
  );
};

export default Medal;
