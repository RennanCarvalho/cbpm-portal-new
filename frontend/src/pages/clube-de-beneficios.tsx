import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { Fragment } from 'react';
import { FlipCard } from '../components/FlipCard';
import { BellaLuzOticas } from '../components/FlipCard/BellaLuzOticas';
import { CruzAzulColegio } from '../components/FlipCard/CruzAzulColegio';
import { CruzAzulHospital } from '../components/FlipCard/CruzAzulHospital';
import { CruzAzulMaisSaude } from '../components/FlipCard/CruzAzulMaisSaude';
import { DrogaRaia } from '../components/FlipCard/DrogaRaia';
import { DrogariaSaoPaulo } from '../components/FlipCard/DrogariaSaoPaulo';
import { DrogariasPacheco } from '../components/FlipCard/DrogariasPacheco';
import { Drogasil } from '../components/FlipCard/Drogasil';
import Header from '../components/Header';

const BenefitsClub = () => {
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
          whiteSpace="nowrap"
          mt={10}
          mb={5}
        >
          CLUBE DE BENEFÍCIOS
        </Heading>

        <SimpleGrid columns={2} spacing={20} minChildWidth="250px">
          <Box maxW="500px" w="100%">
            <FlipCard
              imgCard="/parcerias/cruz_azul_beneficios.jpg"
              imgAlt="Logo Cruz Azul Saúde e Educação"
              TextContent={CruzAzulHospital}
            />
          </Box>

          {/* <Box maxW="500px" w="100%" bg="white.default">
            <FlipCard
              imgCard="/parcerias/cruz_azul_colegio_beneficios.jpg"
              imgAlt="Logo Cruz Azul Colégio PM"
              TextContent={CruzAzulColegio}
            />
          </Box> */}

          <Box maxW="500px" w="100%" bg="white.default">
            <FlipCard
              imgCard="/parcerias/droga_raia.jpg"
              imgAlt="Logo Droga Raia"
              TextContent={DrogaRaia}
            />
          </Box>

          <Box maxW="500px" w="100%" bg="white.default">
            <FlipCard
              imgCard="/parcerias/drogarias_pacheco.jpg"
              imgAlt="Logo Drogarias Pacheco"
              TextContent={DrogariasPacheco}
            />
          </Box>

          {/* <Box maxW="500px" w="100%" bg="white.default">
            <FlipCard
              imgCard="/parcerias/psicologia_ai.jpg"
              imgAlt="Logo Psicologia AI"
              TextContent={PsicologiaAI}
            />
          </Box> */}

          <Box maxW="500px" w="100%" bg="white.default">
            <FlipCard
              imgCard="/parcerias/drogasil.jpg"
              imgAlt="Logo Drogasil"
              TextContent={Drogasil}
            />
          </Box>

          <Box maxW="500px" w="100%" bg="white.default">
            <FlipCard
              imgCard="/parcerias/drogaria_sao_paulo.jpg"
              imgAlt="Logo Drogaria São Paulo"
              TextContent={DrogariaSaoPaulo}
            />
          </Box>

          {/* <Box maxW="500px" w="100%" bg="white.default">
            <FlipCard
              imgCard="/parcerias/sorriden.jpg"
              imgAlt="Logo Sorriden"
              TextContent={Sorriden}
            />
          </Box> */}

          {/* <Box maxW="500px" w="100%" bg="white.default" mb={5}>
            <FlipCard
              imgCard="/parcerias/otica_bella_luz.jpg"
              imgAlt="Logo Bella Luz Óticas"
              TextContent={BellaLuzOticas}
            />
          </Box> */}
        </SimpleGrid>
      </Container>
    </Fragment>
  );
};

export default BenefitsClub;
