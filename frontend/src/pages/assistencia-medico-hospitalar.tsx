import {
  Box,
  Container,
  Heading,
  HStack,
  Img,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';
import Header from '../components/Header';
import Link from '../components/Link';

const HealthCare = () => {
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
          ASSISTÊNCIA MÉDICO - HOSPITALAR
        </Heading>

        <Text
          fontWeight="700"
          fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
          mb={10}
        >
          <ChakraLink
            href=" https://www.al.sp.gov.br/repositorio/legislacao/lei/1974/lei-452-02.10.1974.html"
            isExternal
          >
            Lei nº 452, de 02-10-1974{' '}
          </ChakraLink>
          e{' '}
          <Link href="/pdfs/portarias/portaria_cbpm_04_01_2020.pdf" isExternal>
            Portaria CBPM – 4, de 01–04–2020
          </Link>
        </Text>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>
          <Text>
            Regime assistencial, cujos serviços de saúde são geridos pela CBPM e
            prestados pela Cruz Azul de São Paulo aos beneficiários dependentes
            dos contribuintes.
          </Text>
        </HStack>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>
            Sem carência para procedimentos médico-hospitalares, exceto para os
            casos de reinclusão no regime assistencial.
          </Text>
        </HStack>

        <Box
          maxW="450px"
          w="100%"
          h={{ sm: '230px', md: '270px', lg: '300px' }}
          float={{ md: 'none', lg: 'right' }}
        >
          <Img src="/craz.jpg" h="100%" alt='imagem da fachada da cruz azul'/>
        </Box>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>
            Beneficiários dependentes dos ex-contribuintes que requererem sua
            reinclusão no regime Assistencial Médico-Hospitalar, terão que
            cumprir os seguintes prazos de carência:
          </Text>
        </HStack>

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

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>
            Cobertura assistencial ambulatorial, hospitalar com obstetrícia e
            pronto-socorro.
          </Text>
        </HStack>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>
            Consultas, exames, internação e tratamentos diversos são realizados
            conforme o Termo de colaboração entre a CBPM e a Cruz Azul de São
            Paulo, observada a Portaria 4/1/2020, de 1–4–2020.
          </Text>
        </HStack>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>
            Atendimentos de urgência ou emergência podem ser realizados por
            qualquer Unidade Hospitalar, no território nacional, somente quando
            não for possível a utilização dos serviços próprios, contratados ou
            credenciados pela Cruz Azul de São Paulo
          </Text>
        </HStack>

        <Box ml="10%">
          <ul>
            <li>
              <b>Emergência:</b> implica em risco imediato de vida ou de lesões
              irreparáveis, caracterizado em declaração do médico assistente
            </li>

            <li>
              <b>Urgência:</b> resultante de acidentes pessoais ou de
              complicações no processo gestacional
            </li>

            <li>
              <b>Remoção:</b> a Unidade Hospitalar deve ser informada que o
              paciente tem direito à assistência médica pela Cruz Azul, o mais
              rápido possível, para que esta assuma a responsabilidade do
              tratamento e assegure a transferência imediata, quando de sua
              estabilidade clínica
            </li>
          </ul>
        </Box>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>
            Atendimento emergencial de Oftalmologia no Pronto-socorro da Cruz
            Azul de São Paulo e posterior encaminhamento a clínicas
            especializadas, quando necessário.
          </Text>
        </HStack>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>
            Coparticipação financeira de até 50% do valor em alguns atendimentos
            ambulatoriais, hospitalares e de obstetrícia, conforme a Portaria
            4/1/2020, de 1–4–2020, a fim de garantir o equilíbrio econômico,
            financeiro e atuarial do regime assistencial médico-hospitalar.
          </Text>
        </HStack>
      </Container>
    </Fragment>
  );
};

export default HealthCare;
