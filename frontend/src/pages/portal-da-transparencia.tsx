import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import Header from '../components/Header';
import Link from '../components/Link';

const TransparencyPortal = () => {
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
          PORTAL DA TRANSPARÊNCIA
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing="100px">
          <VStack
            w="100%"
            align="flex-start"
            borderLeft="8px"
            borderBottom="8px"
            borderColor="gray.500"
            p={3}
            bgGradient="linear(to-r, gray.50, gray.100)"
          >
            <Text
              fontWeight="700"
              fontSize={{ base: 'md', sm: 'md', md: 'lg', lg: 'lg' }}
              as="u"
            >
              INSTITUCIONAL
            </Text>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/transparencia/relacao-do-dirigente">
                Relação do Dirigente e Assessores
              </Link>
            </HStack>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/transparencia/parceria">
                Parceria CBPM e Cruz Azul SP
              </Link>
            </HStack>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/transparencia/marco-regulatorio-da-parceria">
                Marco Regulatório da Parceria
              </Link>
            </HStack>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/pdfs/decretos/decreto_5376.pdf" target="_blank">
                Decreto n. 5.376, de 26-12-1974
              </Link>
            </HStack>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/pdfs/decretos/decreto_7_391.pdf" target="_blank">
                Decreto n. 7.391, de 29-12-1975
              </Link>
            </HStack>
            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/pdfs/leis/lei_c_1_395.pdf" target="_blank">
                Lei complementar Nº 1.395, de 22/12/2023
              </Link>
            </HStack>


            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/pdfs/decretos/decreto_68_742.pdf" target="_blank">
                Decreto n. 68.742, de 05-08-2024
              </Link>
            </HStack>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/pdfs/decretos/decreto_69_286.pdf" target="_blank">
                Decreto n. 69.286, de 30-12-2024
              </Link>
            </HStack>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/pdfs/decretos/decreto_69_591.pdf" target="_blank">
                Decreto n. 69.591, de 09-06-2025
              </Link>
            </HStack>
          </VStack>

          <VStack
            w="100%"
            align="flex-start"
            borderLeft="8px"
            borderBottom="8px"
            borderColor="gray.500"
            p={3}
            bgGradient="linear(to-r, gray.50, gray.100)"
          >
            <Text
              fontWeight="700"
              fontSize={{ base: 'md', sm: 'md', md: 'lg', lg: 'lg' }}
              as="u"
            >
              CONTAS PÚBLICAS
            </Text>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/transparencia/balanco-anual">Balanço Anual</Link>
            </HStack>
          </VStack>

          <VStack
            w="100%"
            align="flex-start"
            borderLeft="8px"
            borderBottom="8px"
            borderColor="gray.500"
            p={3}
            bgGradient="linear(to-r, gray.50, gray.100)"
          >
            <Text
              fontWeight="700"
              fontSize={{ base: 'md', sm: 'md', md: 'lg', lg: 'lg' }}
              as="u"
            >
              PESSOAL
            </Text>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/transparencia/quadro-de-pessoal-e-vencimentos">
                Quadro de Pessoal e Vencimentos
              </Link>
            </HStack>
          </VStack>

          <VStack
            w="100%"
            align="flex-start"
            borderLeft="8px"
            borderBottom="8px"
            borderColor="gray.500"
            p={3}
            bgGradient="linear(to-r, gray.50, gray.100)"
          >
            <Text
              fontWeight="700"
              fontSize={{ base: 'md', sm: 'md', md: 'lg', lg: 'lg' }}
              as="u"
            >
              RELATÓRIOS
            </Text>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/transparencia/demonstrativo-de-despesas">
                Demonstrativo de Despesas
              </Link>
            </HStack>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/transparencia/lista-de-prestadores-de-servico">
                Lista de Prestadores de Serviço (PF/PJ) com Valores Pagos
              </Link>
            </HStack>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/transparencia/relatorio-fisico-financeiro">
                Relatórios Físico Financeiro
              </Link>
            </HStack>

            <HStack>
              <Box>
                <FaChevronCircleDown size="20px" />
              </Box>

              <Link href="/transparencia/cronograma-de-desembolso">
                Cronograma de Desembolso e Recursos Repassados para a Associação
                Cruz Azul de São Paulo
              </Link>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Box
          borderLeft="8px"
          borderBottom="8px"
          bgGradient="linear(to-r, gray.50, gray.100)"
          borderColor="gray.500"
          mt={10}
          p={3}
        >
          <Text
            fontWeight="700"
            fontSize={{ base: 'md', sm: 'md', md: 'lg', lg: 'lg' }}
            textAlign="center"
            // textDecor="underline"
            marginBottom="20px;"
          >
            CONTRATAÇÕES
          </Text>

          <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 3 }}>
            <VStack w="100%" pr={{ base: 0, sm: 0, md: 0, lg: 12 }}>
              <Text
                fontWeight="700"
                fontSize={{ base: 'md', sm: 'md', md: 'lg', lg: 'lg' }}
                as="u"
              >
                PLANEJAMENTOS
              </Text>

              <HStack
                w="100%"
                justify={{
                  sm: 'space-around',
                  md: 'space-around',
                  lg: 'space-between',
                }}
              >
                <VStack align="flex-start">
                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>
                    <Link
                      href="https://pncp.gov.br/app/pca/61000923000138/2025/1"
                      target="_blank"
                    >
                      PCA/CBPM - 2025
                    </Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>
                    <Link href="/transparencia/plano-diretor">
                      PD - TIC — CBPM — 2023/2026
                    </Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>
                    <Link
                      href="/pdfs/planejamentos/plano_de_dados_abertos_2025-2027.pdf"
                      target="_blank"
                    >
                      Plano de Dados Abertos 2025/2027
                    </Link>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>

            <VStack w="100%" pr={{ base: 0, sm: 0, md: 0, lg: 12 }}>
              <Text
                fontWeight="700"
                fontSize={{ base: 'md', sm: 'md', md: 'lg', lg: 'lg' }}
                as="u"
              >
                EDITAIS E LICITAÇÕES
              </Text>

              <HStack
                w="100%"
                justify={{
                  sm: 'space-around',
                  md: 'space-around',
                  lg: 'space-between',
                }}
              >
                <VStack align="flex-start">
                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/convite-editais">Convite</Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/pregao-eletronico-editais">
                      Pregão Eletrônico
                    </Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/dispensa-editais">Dispensa</Link>
                  </HStack>
                </VStack>

                <VStack align="flex-start" pr={3}>
                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/tomada-de-preco-editais">
                      Tomada de preço
                    </Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/concorrencia-editais">
                      Concorrência
                    </Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/consulta-publica-editais">
                      Consulta Pública
                    </Link>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>

            <VStack
              w="100%"
              align="flex-start"
              m={{ md: '0 auto' }}
              pl={{ md: 0, lg: 12 }}
            >
              <Text
                fontWeight="700"
                fontSize={{ base: 'md', sm: 'md', md: 'lg', lg: 'lg' }}
                as="u"
                alignSelf="center"
                p={{ base: 3, sm: 0 }}
              >
                CONTRATOS
              </Text>

              <HStack
                w="100%"
                justify={{
                  sm: 'space-around',
                  md: 'space-around',
                  lg: 'space-between',
                }}
              >
                <VStack align="flex-start">
                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/dispensa-contrato">
                      Dispensa
                    </Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/inexigibilidade-contrato">
                      Inexigibilidade
                    </Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/pregao-eletronico-contrato">
                      Pregão Eletrônico
                    </Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/credenciamento-contrato">
                      Credenciamento
                    </Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/concorrencia-contrato">
                      Concorrência
                    </Link>
                  </HStack>
                </VStack>

                <VStack align="flex-start">
                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/concurso-contrato">
                      Concurso
                    </Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/convite-contrato">Convite</Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/leilao-contrato">Leilão</Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/tomada-de-preco-contrato">
                      Tomada de Preços
                    </Link>
                  </HStack>

                  <HStack>
                    <Box>
                      <FaChevronCircleDown size="20px" />
                    </Box>

                    <Link href="/transparencia/locacao-imobiliaria-contrato">
                      Locação Imobiliária
                    </Link>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
          </SimpleGrid>
        </Box>
      </Container>
    </Fragment>
  );
};

export default TransparencyPortal;
