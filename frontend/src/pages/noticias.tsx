import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Img,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';
import Link from '../components/Link';

const News = () => {
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
          whiteSpace="nowrap"
          mt={10}
          mb={5}
        >
          NOTÍCIAS
        </Heading>

        <VStack spacing="22px" w="100%">
          <Flex flexWrap="wrap" justify={{ base: 'center', sm: 'center' }}>
            <Center
              border="1px"
              borderRight={{ base: '1px', sm: '1px', md: 'none' }}
              w={{ base: '300px', sm: '300px', md: '400px' }}
              p={2}
            >
              <Img
                src="/carousel/imagem-encontro-rosa.jpeg"
                w="350px"
                m="0 auto"
                alt='imagem sobre o evento encontro rosa'
              />
            </Center>

            <Box
              border="1px"
              minW="300px"
              maxW="calc(100% - 400px)"
              w="100%"
              p={5}
            >
              <Text fontWeight="700" color="blue.default" fontSize="xl">
                Encontro Rosa: conscientização e apoio às mulheres no Hospital Cruz Azul
              </Text>

              <Text>
              Participe do Encontro Rosa no dia 24 de outubro, às 8h, no auditório do Hospital Cruz Azul. Um evento gratuito com palestras, histórias inspiradoras e discussões sobre saúde, autoestima e reinserção no mercado de trabalho. [...]{' '}
                <Link href="/noticias/encontro-rosa-2025">
                  (veja mais)
                </Link>
              </Text>
            </Box>
          </Flex>






        <Flex flexWrap="wrap" justify={{ base: 'center', sm: 'center' }}>
            <Center
              border="1px"
              borderRight={{ base: '1px', sm: '1px', md: 'none' }}
              w={{ base: '300px', sm: '300px', md: '400px' }}
              p={2}
            >
              <Img
                src="/noticias/nova-gestao-cbpm-2023/1.png"
                w="100%"
                m="0 auto"
                alt='imagem da nova gestão CBPM'
              />
            </Center>

            <Box
              border="1px"
              minW="300px"
              maxW="calc(100% - 400px)"
              w="100%"
              p={5}
            >
              <Text fontWeight="700" color="blue.default" fontSize="xl">
                Corretores avaliarão imóveis da Caixa Beneficente da PM
              </Text>

              <Text>
              O Cel Clemente assume a Caixa Beneficente da Polícia Militar do Estado (CBPM). Formado pela Academia de Polícia Militar do Barro Branco em 1993, atuou no Corpo de Bombeiros por quase 27 anos. É Advogado e possui formação em Engenharia Civil.
            Com sua nova gestão, a CBPM tem o projeto de modernizar processos [...]{' '}
                <Link href="/noticias/nova-gestao-cbpm-2023">
                  (veja mais)
                </Link>
              </Text>
            </Box>
          </Flex>

          <Flex flexWrap="wrap" justify={{ base: 'center', sm: 'center' }}>
            <Center
              border="1px"
              borderRight={{ base: '1px', sm: '1px', md: 'none' }}
              w={{ base: '300px', sm: '300px', md: '400px' }}
              p={2}
            >
              <Img
                src="/noticias/corretores/noticia_corretores_pequena.jpg"
                w="100%"
                m="0 auto"
                alt='imagem dos corretores CBPM'

              />
            </Center>

            <Box
              border="1px"
              minW="300px"
              maxW="calc(100% - 400px)"
              w="100%"
              p={5}
            >
              <Text fontWeight="700" color="blue.default" fontSize="xl">
                Corretores avaliarão imóveis da Caixa Beneficente da PM
              </Text>

              <Text>
                A Caixa Beneficente da Polícia Militar (CBPM) é uma instituição
                criada em 1905, vinculada à Secretaria de Segurança Pública do
                Estado de São Paulo, com a principal função de assegurar a
                Assistência Médico - Hospitalar e odontológica aos policiais
                militares e seus beneficiários dependentes, por meio de um termo
                de colaboração assinado com a Cruz Azul [...]{' '}
                <Link href="/noticias/corretores-caixa-beneficente">
                  (veja mais)
                </Link>
              </Text>
            </Box>
          </Flex>

          <Flex flexWrap="wrap" justify={{ base: 'center', sm: 'center' }}>
            <Center
              border="1px"
              borderRight={{ base: '1px', sm: '1px', md: 'none' }}
              w={{ base: '300px', sm: '300px', md: '400px' }}
              p={2}
            >
              <Img
                src="/noticias/beneficio-farmacia/beneficio_farmacia_pequena.png"
                w="100%"
                m="0 auto"
                alt='imagem representando beneficio farmácia'
              />
            </Center>

            <Box
              border="1px"
              minW="300px"
              maxW="calc(100% - 400px)"
              w="100%"
              p={5}
            >
              <Text fontWeight="700" color="blue.default" fontSize="xl">
                Beneficio Farmácia
              </Text>

              <Text>
                Prezados contribuintes, pensionistas e beneﬁciários da CBPM, no
                mês de maio do corrente ano, ﬁrmou novos contratos com as
                empresas Drogaria São Paulo, Droga Raia e Drogasil visando
                melhorar Beneficios Farmácia, garantindo aos usuários da CBPM o
                acesso a produtos por elas comercializados com descontos
                compensadores [...]{' '}
                <Link href="/noticias/beneficio-farmacia">(veja mais)</Link>
              </Text>
            </Box>
          </Flex>

          <Flex flexWrap="wrap" justify={{ base: 'center', sm: 'center' }}>
            <Center
              border="1px"
              borderRight={{ base: '1px', sm: '1px', md: 'none' }}
              w={{ base: '300px', sm: '300px', md: '400px' }}
              p={2}
            >
              <Img
                src="/noticias/coronavirus/coronavirus_pequena.jpg"
                w="100%"
                m="0 auto"
                alt='imagem sobre prevenção coronavirus'
              />
            </Center>

            <Box
              border="1px"
              minW="300px"
              maxW="calc(100% - 400px)"
              w="100%"
              p={5}
            >
              <Text fontWeight="700" color="blue.default" fontSize="xl">
                Prevenção do coronavírus
              </Text>

              <Text>
                A pandemia do novo coronavírus (COVID-19) tem causado
                preocupação mundialmente, devido à alta transmissibilidade e às
                respectivas complicações, como a síndrome respiratória aguda
                grave e, em casos extremos, o óbito [...]{' '}
                <Link href="/noticias/prevencao-do-coronavirus">
                  (veja mais)
                </Link>
              </Text>
            </Box>
          </Flex>

          <Flex flexWrap="wrap" justify={{ base: 'center', sm: 'center' }}>
            <Center
              border="1px"
              borderRight={{ base: '1px', sm: '1px', md: 'none' }}
              w={{ base: '300px', sm: '300px', md: '400px' }}
              p={2}
            >
              <Img
                src="/noticias/lei-complementar/lei_complementar_pequena.jpg"
                w="100%"
                m="0 auto"
                alt='imagem representando aprovação de lei'
              />
            </Center>

            <Box
              border="1px"
              minW="300px"
              maxW="calc(100% - 400px)"
              w="100%"
              p={5}
            >
              <Text fontWeight="700" color="blue.default" fontSize="xl">
                Lei complementar Nº 1.353, de 10-01-2020
              </Text>

              <Text>
                Aprovada nova lei que permite equilibrar financeiramente a
                assistência à saúde dos beneficiários dependentes da CBPM.
                Principais mudanças nos dispositivos da Lei nº 452/74: Ampliação
                no rol de beneficiários dependentes, incluindo os menores sob
                [...] <Link href="/noticias/lei-complementar">(veja mais)</Link>
              </Text>
            </Box>
          </Flex>

          {/* <Flex flexWrap="wrap" justify={{ base: 'center', sm: 'center' }}>
            <Center
              border="1px"
              borderRight={{ base: '1px', sm: '1px', md: 'none' }}
              w={{ base: '300px', sm: '300px', md: '400px' }}
              p={2}
            >
              <Img
                src="/noticias/sorriden/sorriden_pequena.jpg"
                w="100%"
                m="0 auto"
                alt='imagem representando marca Sorriden'

              />
            </Center>

            <Box
              border="1px"
              minW="300px"
              maxW="calc(100% - 400px)"
              w="100%"
              p={5}
            >
              <Text fontWeight="700" color="blue.default" fontSize="xl">
                O sorriso da sua família merece proteção!
              </Text>

              <Text>
                Conheça os benefícios da parceria entre CBPM e Sorriden, o plano
                de prevenção odontológica mais descomplicado e econômico do
                Brasil [...] <Link href="/noticias/sorriden">(veja mais)</Link>
              </Text>
            </Box>
          </Flex> */}

          <Flex flexWrap="wrap" justify={{ base: 'center', sm: 'center' }}>
            <Box
              border="1px"
              borderRight={{ base: '1px', sm: '1px', md: 'none' }}
              w={{ base: '300px', sm: '300px', md: '400px' }}
              p={2}
            >
              <Img
                src="/noticias/pm-zacarias/pm_zacharias_pequena.jpg"
                w="100%"
                m="0 auto"
                alt='imagem do Sd PM Zacharias'
              />
            </Box>

            <Box
              border="1px"
              minW="300px"
              maxW="calc(100% - 400px)"
              w="100%"
              p={5}
            >
              <Text fontWeight="700" color="blue.default" fontSize="xl">
                Mensagem do Sd PM Zacharias
              </Text>

              <Text>
                A Caixa Beneficente da Polícia Militar (CBPM) agradece e
                compartilha a mensagem espontânea do [...]{' '}
                <Link href="/noticias/mensagem-pm-zacharias">(veja mais)</Link>
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Fragment>
  );
};

export default News;
