import {
  Button,
  Center,
  Container,
  Heading,
  Link as ChakraLink,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';

const CoronavirusPrevention = () => {
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
          PREVENÇÃO DO CORONAVÍRUS
        </Heading>

        <Text mb={2}>
          A pandemia do novo coronavírus (COVID-19) tem causado preocupação
          mundialmente, devido à alta transmissibilidade e às respectivas
          complicações, como a síndrome respiratória aguda grave e, em casos
          extremos, o óbito.
        </Text>

        <Text mb={10}>
          Em face da recomendação das autoridades sanitárias para evitar a
          circulação de pessoas visando conter o contágio, reduzimos o quadro de
          funcionários dispensando os que fazem parte do grupo de risco.
          Portanto, indicamos o uso dos canais telefônicos e digitais do Posto
          de Atendimento Integrado da Caixa Beneficente:
        </Text>

        <VStack align="flex-start" justify="flex-start" mb={10}>
          <VStack>
            <Text fontWeight="700" alignSelf="flex-start">
              CBPM:
            </Text>

            <Text>
              ☎️ (11) 3315-3000 |{' '}
              <ChakraLink href="mailto:cadastro@cbpm.sp.gov.br">
                ✉️ cadastro@cbpm.sp.gov.br
              </ChakraLink>{' '}
              | 🌐{' '}
              <ChakraLink href="https://www.cbpm.sp.gov.br">
                www.cbpm.sp.gov.br
              </ChakraLink>
            </Text>
          </VStack>

          <VStack>
            <Text fontWeight="700" alignSelf="flex-start">
              Central de Serviços da PM:
            </Text>

            <Text>
              ☎️ (11) 3227-2300 |{' '}
              <ChakraLink href="mailto:dpcspm@policiamilitar.sp.gov.br">
                ✉️ dpcspm@policiamilitar.sp.gov.br
              </ChakraLink>{' '}
              |
              <ChakraLink
                href="https://www.policiamilitar.sp.gov.br"
                isExternal
              >
                🌐 www.policiamilitar.sp.gov.br
              </ChakraLink>
            </Text>
          </VStack>

          <VStack>
            <Text fontWeight="700" alignSelf="flex-start">
              SPPrev:
            </Text>

            <Text>
              ☎️ (11) 2810-7050 | ☎️ 0800 777 7738 | 🌐{' '}
              <ChakraLink href="http://www.spprev.sp.gov.br" isExternal>
                www.spprev.sp.gov.br
              </ChakraLink>
            </Text>
          </VStack>

          <Text fontWeight="700"> Transmissão do novo coronavírus</Text>

          <Text>
            Pelo ar ou por contato pessoal com secreções (espirro, tosse,
            catarro, gotículas de saliva e contato próximo com pessoa infectada
            ou com superfícies contaminadas, seguido de contato com boca, nariz
            ou olhos).
          </Text>

          <Text>
            <i>IMPORTANTE:</i> conforme as recomendações das autoridades
            sanitárias, devemos evitar a contaminação viral, buscando a
            responsabilidade individual para conter o contágio, então, é
            essencial evitar sair de casa, principalmente em caso de idosos.
          </Text>

          <Text fontWeight="700">Sintomas</Text>

          <Text>
            Similares a um resfriado comum (ex.: febre, tosse e dificuldade para
            respirar). Pessoas que apresentam esses sintomas, em especial se
            houver dificuldade respiratória, devem procurar os serviços de
            saúde.
          </Text>

          <Text fontWeight="700">Dicas de prevenção</Text>

          <UnorderedList pl={10}>
            <ListItem>
              Lavar as mãos ou usar álcool em gel, com frequência
            </ListItem>
            <ListItem>Cobrir o nariz e a boca ao tossir ou espirrar</ListItem>
            <ListItem>Manter os ambientes bem ventilados</ListItem>
            <ListItem>Não compartilhar objetos de uso pessoal</ListItem>
            <ListItem>
              Evitar aglomerações e, se possível, permanecer em casa
            </ListItem>
            <ListItem>Não usar medicamentos sem orientação médica</ListItem>
          </UnorderedList>

          <Text fontWeight="700">
            Acesse os sites para conferir as atualizações e medidas no combate
            ao coronavírus:
          </Text>

          <UnorderedList pl={10}>
            <ListItem>
              Governo de SP:{' '}
              <ChakraLink
                href="https://www.saopaulo.sp.gov.br/coronavirus"
                isExternal
              >
                www.saopaulo.sp.gov.br/coronavirus
              </ChakraLink>
            </ListItem>

            <ListItem>
              Cruz Azul de São Paulo (Hospital e Ambulatórios):{' '}
              <ChakraLink href="https://www.cruzazulsp.com.br" isExternal>
                www.cruzazulsp.com.br
              </ChakraLink>
            </ListItem>

            <ListItem>
              Operadora de planos de saúde Cruz Azul Saúde:{' '}
              <ChakraLink href="https://www.cruzazulsaude.com.br" isExternal>
                www.cruzazulsaude.com.br
              </ChakraLink>
            </ListItem>
          </UnorderedList>
        </VStack>

        <Center w="100%" p={10}>
          <Link href="/noticias">
            <Button
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              bg="blue.default"
              color="white.default"
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              borderRadius="3xl"
              isFullWidth
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

export default CoronavirusPrevention;
