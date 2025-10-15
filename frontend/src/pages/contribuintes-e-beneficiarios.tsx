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
import { FaRegHandPointRight } from 'react-icons/fa';
import Header from '../components/Header';

const ContributorsAndBeneficiaries = () => {
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
          CONTRIBUINTES E BENEFICIÁRIOS DEPENDENTES
        </Heading>

        <VStack align="flex-start">
          <Text
            fontWeight="700"
            fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
            color="blue.default"
          >
            CONTRIBUINTES
          </Text>

          <Text>
            Os contribuintes são os policiais militares e pensionistas que,
            mensalmente, destinam percentuais de seus vencimentos, 2% da
            retribuição-base e 1% da pensão, respectivamente, para tornar o
            regime assistencial sustentável.
          </Text>
        </VStack>

        <Text
          fontWeight="700"
          fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
          color="blue.default"
          mt={6}
        >
          BENEFICIÁRIOS
        </Text>

        <Text fontWeight="700" fontSize="md" mb={2} mt={3}>
          Beneficiários dependentes legais{' '}
        </Text>
        <ChakraLink
          isExternal
          href="https://www.al.sp.gov.br/repositorio/legislacao/lei/1974/lei-452-02.10.1974.html"
          fontWeight="700"
        >
          Lei nº 452, art. 34, de 02-10-1974
        </ChakraLink>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>Cônjuge ou companheiro(a).</Text>
        </HStack>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>
            Filhos, de qualquer condição ou sexo, até que atinjam idade igual à
            prevista na legislação do regime geral da previdência social, desde
            que não sejam emancipados nos termos da legislação civil, bem como
            os filhos considerados inválidos para o trabalho, de acordo com
            atestado emitido por órgão médico da Polícia Militar, e os incapazes
            civilmente, desde que, nos dois últimos casos, vivam,
            comprovadamente, sob a dependência econômica do militar. A
            assistência aos beneficiários dependentes temporariamente incapaz
            será devida enquanto perdurar a incapacidade.
          </Text>
        </HStack>

        <Box
          maxW="450px"
          w="100%"
          h={{ sm: '230px', md: '270px', lg: '300px' }}
          float={{ md: 'none', lg: 'right' }}
        >
          <Img src="/atendimento_cbpm.jpg" h="100%" alt='imagem da recepção da CBPM'/>
        </Box>

        <VStack align="flex-start">
          <HStack>
            <Box>
              <FaRegHandPointRight size="30px" />
            </Box>

            <Text>Enteados, enquanto durar o casamento ou união estável</Text>
          </HStack>

          <HStack>
            <Box>
              <FaRegHandPointRight size="30px" />
            </Box>

            <Text>Menores sob guarda judicial.</Text>
          </HStack>

          <HStack>
            <Box>
              <FaRegHandPointRight size="30px" />
            </Box>

            <Text>
              Menores sob tutela ou curatela, desde que comprovadamente vivam
              sob a dependência econômica de militares contribuintes.
            </Text>
          </HStack>

          <HStack>
            <Box>
              <FaRegHandPointRight size="30px" />
            </Box>

            <Text>Pensionista contribuinte.</Text>
          </HStack>

          <HStack>
            <Box>
              <FaRegHandPointRight size="30px" />
            </Box>

            <Text>
              Pais do contribuinte, desde que vivam sob dependência econômica e
              não haja outros beneficiários dependentes obrigatórios.
            </Text>
          </HStack>
        </VStack>
      </Container>
    </Fragment>
  );
};

export default ContributorsAndBeneficiaries;
