import {
  Box,
  Container,
  Heading,
  HStack,
  Img,
  Link as ChakraLink,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';

const IntegrityPortal = () => {
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
          textAlign="center"
          mt={10}
          mb={5}
        >
          INTEGRIDADE
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
            <Text mb={10}>
              A CBPM em atendimento ao Decreto nº 67.683, de 3 de maio de 2023,
              que instituiu o Plano Estadual de Promoção de Integridade, define
              as diretrizes das medidas e ações voltadas ao fortalecimento dos
              mecanismos internos de prevenção de irregularidades
              administrativas, de práticas de corrupção e de desvios éticos,
              promovendo um ambiente de trabalho íntegro no âmbito da Autarquia
            </Text>
            <Container
              bg="blue.default"
              p={5}
              maxW="container.xl"
              centerContent
              borderRadius={10}
            >
              <Heading
                as="h2"
                color="white.default"
                size="lg"
                mb={2}
                p={8}
                whiteSpace="nowrap"
              >
                Portal da Integridade
              </Heading>

              <SimpleGrid
                columns={5}
                maxW="1280px"
                w="100%"
                spacing="22px"
                minChildWidth="200px"
                justifyItems="center"
              >
                <Link href="/integridade/plano-estadual">
                <VStack
                  bg="white.default"
                  borderRadius="lg"
                  maxW="200px"
                  w="100%"
                  h="100%"
                  p={3}
                  justify="start"
                >
                  <Img src="/integridade/imgs/plano.png" height= "115px" alt="ícone representando plano estadual de promoção de integridade"/>
                    <Text
                      color="blue.default"
                      fontWeight="700"
                      textAlign='center'
                    >
                      Plano Estadual de Promoção de Integridade
                    </Text>
                  
                </VStack>
                </Link>
                <Link href="/integridade/legislacao">
                <VStack
                  bg="white.default"
                  borderRadius="lg"
                  maxW="200px"
                  w="100%"
                  p={3}
                  justify="start"
                >
                  <Img src="/integridade/imgs/legislação.png" height= "115px"  alt="ícone representando Legislação Relacionada ao Programa de Integridade"/>
                  
                    <Text color="blue.default" fontWeight="700" align="center">
                      Legislação Relacionada ao Programa de Integridade
                    </Text>
                  
                </VStack>
                </Link>

                <Link href="/integridade/campanha-cbpm">
                <VStack
                  bg="white.default"
                  borderRadius="lg"
                  maxW="200px"
                  w="100%"
                  h="100%"
                  p={3}
                  justify="start"
                >
                  <Img src="/integridade/imgs/campanhasdeintegridade.png" height= "115px" alt="ícone representando Campanhas de Integridade - CBPM"/>
                    <Text
                      color="blue.default"
                      fontWeight="700"
                      textAlign={'center'}
                    >
                      Campanhas de Integridade - CBPM
                    </Text>
                  
                </VStack></Link>
                <Link target="_blank" href="/integridade/pdfs/plano-de-integridade.pdf">
                <VStack
                  bg="white.default"
                  borderRadius="lg"
                  maxW="200px"
                  w="100%"
                  h="100%"
                  p={3}
                  justify="start"
                >
                  <Img src="/integridade/imgs/programadeintegridade.png" height= "115px" alt="ícone representando Programa de Integridade - CBPM" />
                    <Text
                      color="blue.default"
                      fontWeight="700"
                      textAlign={'center'}
                    >
                      Programa de Integridade - CBPM
                    </Text>
                </VStack>
                </Link>
                <Link href="/integridade/codigo-conduta-cbpm">
                <VStack
                  bg="white.default"
                  borderRadius="lg"
                  maxW="200px"
                  w="100%"
                  h="100%"
                  p={3}
                  justify="start"
                >
                  <Img src="/integridade/imgs/codigodeconduta.png" height= "115px" alt="ícone representando Código de Conduta e Integridade - CBPM"/>
                    <Text
                      textAlign="center"
                      color="blue.default"
                      fontWeight="700"
                    >
                      Código de Conduta e Integridade - CBPM
                    </Text>
                </VStack>
                </Link>
              </SimpleGrid>
            </Container>
          </HStack>
        </Box>
      </Container>
    </Fragment>
  );
};

export default IntegrityPortal;
