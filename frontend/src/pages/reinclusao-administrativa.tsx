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
import Link from '../components/Link';

const AdministrativeReinclusion = () => {
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
          REINCLUSÃO ADMINISTRATIVA
        </Heading>

        <Text
          fontWeight="700"
          fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
          mb={10}
        >
          <ChakraLink
            href="https://www.al.sp.gov.br/repositorio/legislacao/lei/1974/lei-452-02.10.1974.html"
            isExternal
            fontWeight="700"
          >
            Lei nº 452, paragrafo único do art. 32 , de 02-10-1974{' '}
          </ChakraLink>
          e{' '}
          <Link
            href="/pdfs/portarias/portaria_cbpm_049_01_2020.pdf"
            isExternal
            fontWeight="700"
          >
            Portaria CBPM - 49, de 16-11-2020
          </Link>
        </Text>

        <Text>
          Para a reinclusão administrativa são necessários os seguintes
          documentos:
        </Text>

        <HStack spacing="22px" flexWrap="wrap">
          <Box p={3} w="285px">
            <Img src="/reinclusao_administrativa.png" w="100%" alt='imagens de documentos'/>
          </Box>

          <VStack alignSelf="flex-start" align="flex-start" w="700px">
            <HStack mb={2} mt={7}>
              <Box>
                <FaRegHandPointRight size="30px" />
              </Box>

              <Text>
                Requerimento de Reinclusão administrativa.{' '}
                <Link
                  href="/forms/11_reinclusao_administrativa.pdf"
                  isExternal
                  fontWeight="700"
                >
                  Clique aqui.
                </Link>
              </Text>
            </HStack>

            <HStack mb={2}>
              <Box>
                <FaRegHandPointRight size="30px" />
              </Box>

              <Text>
                Para declarar a sua família, escolha o formulário correspondente
                ao parentesco do seu beneficiário dependente, disponível no link
                a seguir.
                <Link href="/formularios-declaracao" fontWeight="700">
                  {' '}
                  Clique aqui.
                </Link>
              </Text>
            </HStack>

            <HStack mb={2}>
              <Box>
                <FaRegHandPointRight size="30px" />
              </Box>

              <Text>Declaração de Saúde.</Text>

              <Link
                href="/forms/12_declaracao_de_saude.pdf"
                isExternal
                fontWeight="700"
              >
                Clique aqui.
              </Link>
            </HStack>

            <HStack mb={2}>
              <Box>
                <FaRegHandPointRight size="30px" />
              </Box>

              <Text>
                Carta de Orientação Sobre a Declaração de Saúde{' '}
                <Link
                  href="/forms/Carta-de-Orientação-sobre-Declaração-de-Saúde.pdf"
                  isExternal
                  fontWeight="700"
                >
                  Clique aqui
                </Link>{' '}
                <br />
                Policial Militar: cópia simples da cédula de identidade
                funcional.
              </Text>
            </HStack>

            <HStack mb={2}>
              <Box>
                <FaRegHandPointRight size="30px" />
              </Box>

              <Text>
                Pensionista: cópia simples do documento de identidade com foto.
              </Text>
            </HStack>

            <HStack mb={2}>
              <Box>
                <FaRegHandPointRight size="30px" />
              </Box>

              <Text>
                Beneficiários Dependentes legais: cópia simples do documento de
                identidade com foto.
              </Text>
            </HStack>
          </VStack>
        </HStack>

        <VStack align="flex-start">
          <Box>
            <Text>São beneficiários dependentes legais, conforme a </Text>
            <ChakraLink
              href="https://www.al.sp.gov.br/repositorio/legislacao/lei/1974/lei-452-02.10.1974.html"
              isExternal
              fontWeight="700"
            >
              Lei nº 452, art. 34 , de 02-10-1974
            </ChakraLink>
          </Box>

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
              Filhos, de qualquer condição ou sexo, até que atinjam idade igual
              à prevista na legislação do regime geral da previdência social,
              desde que não sejam emancipados nos termos da legislação civil,
              bem como os ﬁlhos considerados inválidos para o trabalho, de
              acordo com atestado emitido por órgão médico da Polícia Militar, e
              os incapazes civilmente, desde que, nos dois últimos casos, vivam,
              comprovadamente, sob a dependência econômica do militar. A
              assistência ao beneﬁciário temporariamente incapaz será devida
              enquanto perdurar a incapacidade. Enteados, enquanto durar o
              casamento ou união estável.
            </Text>
          </HStack>

          <HStack mb={2}>
            <Box>
              <FaRegHandPointRight size="30px" />
            </Box>

            <Text>Menores sob guarda judicial.</Text>
          </HStack>

          <HStack mb={2}>
            <Box>
              <FaRegHandPointRight size="30px" />
            </Box>

            <Text>
              Menores sob tutela ou curatela, desde que comprovadamente vivam
              sob a dependência
            </Text>
          </HStack>

          <HStack mb={2}>
            <Box>
              <FaRegHandPointRight size="30px" />
            </Box>

            <Text>
              econômica de militar contribuinte Pensionista contribuinte.
            </Text>
          </HStack>

          <HStack mb={2}>
            <Box>
              <FaRegHandPointRight size="30px" />
            </Box>

            <Text>
              Pais do contribuinte, desde que vivam sob dependência econômica e
              não haja outros beneﬁciários obrigatórios.
            </Text>
          </HStack>
        </VStack>

        <Text mt={3}>
          Prazos de carência, a contar da data do protocolo do requerimento na
          CBPM:
        </Text>

        <Box ml="10%">
          <ul>
            <li>
              <b>24 horas</b> para casos de urgência e emergência
            </li>

            <li>
              <b>24 meses </b>para doenças e lesões preexistentes
            </li>

            <li>
              <b>300 dias </b>para partos a termo
            </li>

            <li>
              <b>180 dias </b>para os demais casos
            </li>
          </ul>
        </Box>

        <Box bgColor="gray.default" p={7} mt={10} borderRadius="2xl">
          <Text>
            A documentação pode ser entregue pessoalmente no Posto de
            Atendimento Integrado (PAI), enviada pelos Correios em
            correspondência registrada (com AR – Aviso de Recebimento) para Rua
            Alfredo Maia, 218 – Luz – CEP 01106-010 – São Paulo/SP ou
            digitalizada e enviada para{' '}
            <Link href="mailto:cadastro@cbpm.sp.gov.br">
              cadastro@cbpm.sp.gov.br.
            </Link>
          </Text>
        </Box>
      </Container>
    </Fragment>
  );
};

export default AdministrativeReinclusion;
