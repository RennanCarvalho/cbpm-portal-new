import {
  AspectRatio,
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

const AttendanceCBPMCruzAzul = () => {
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
          ATENDIMENTO PELA CBPM / CRUZ AZUL SP
        </Heading>

        <Text
          fontWeight="700"
          fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
          mb={10}
        >
          AGENDAMENTO DE CONSULTAS E EXAMES
        </Text>

        <HStack mb={2} flexWrap="wrap">
          <Box
            maxW="300px"
            w="100%"
            m={{ base: '0 auto', lg: '0' }}
            h={{ base: '100px', sm: '130px', md: '150px' }}
          >
            <Img src="/logos/cruzAzul_logo_2.png" h="100%" alt='logo da cruz azul'/>
          </Box>

          <Box alignSelf="flex-start" w={{ lg: '600px' }}>
            <Text mt={4}>
              A CBPM e a Cruz Azul de São Paulo mantêm um Termo de colaboração
              para proporcionar a Assistência Médico - Hospitalar dos
              beneficiários dependentes dos policiais militares, viabilizando a
              prestação de serviços de qualidade, de forma humanizada.
            </Text>
          </Box>
        </HStack>

        <VStack mb={2}>
          <Text>
            Os beneficiários dependentes legais dos contribuintes têm acesso a
            diversos serviços, no Complexo Hospitalar e nos 10 Ambulatórios
            Descentralizados, mediante coparticipação financeira de até 50% do
            valor nos atendimentos ambulatoriais, hospitalares e de obstetrícia,
            conforme a , a fim de garantir o equilíbrio econômico, financeiro e
            atuarial do{' '}
            <Link
              href="/pdfs/portarias/portaria_cbpm_04_01_2020.pdf"
              isExternal
              fontWeight="700"
            >
              Portaria CBPM - 4, de 01-04-2020{' '}
            </Link>
            regime.
          </Text>

          <Text alignSelf="flex-start">
            <ChakraLink
              href="https://www.cruzazulsp.com.br/saude/agendamento-de-exames-e-consultas/agendamento/"
              isExternal
              fontWeight="700"
            >
              Saiba mais sobre o agendamento de consultas e exames na Cruz Azul de São Paulo
              Agendamento de consultas e exames:
            </ChakraLink>
          </Text>

          <Text fontWeight="700" alignSelf="flex-start">
            (11) 3348-9900/4000
          </Text>
        </VStack>

        <VStack maxW="1280px" w="100%">
          <Text fontWeight="700">Ambulatórios da Cruz Azul</Text>

          <Box bgColor="gray.default" borderRadius="md" p={2}>
            <Text>
              Água Fria – HPM (11) 2206-4500 | São Vicente (13)
              3465-5500 | 
              Cambuci (11) 3348-4000
            </Text>
          </Box>

          <Box>
            <Text>
              Campinas (19) 3772-2500 | Guarulhos (11) 2458-8810 | Itaquera (11)
              2535-9600
            </Text>
          </Box>

          <Box bgColor="gray.default" borderRadius="md" p={2}>
            <Text>
              Osasco (11) 3607-8100 | Santo Amaro (11) 5695-4000 | Santo André
              (11) 4422-9600
            </Text>
          </Box>
        </VStack>

        <AspectRatio
          maxW="1280px"
          w="100%"
          mt={20}
          mb={3}
          maxH="500px"
          minH="300px"
          ratio={21 / 9}
        >
          <iframe
            title="História Cruz Azul SP"
            src="https://www.youtube.com/embed/eHWvQ0g8NQ0"
            allowFullScreen
          />
        </AspectRatio>
      </Container>
    </Fragment>
  );
};

export default AttendanceCBPMCruzAzul;
