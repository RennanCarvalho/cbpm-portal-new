import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { Fragment, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';
import SuperintendenceSmallVersion from '../../components/Superintendence/SuperintendenceSmallVersion';
import SuperintendenceWideVersion from '../../components/Superintendence/SuperintendenceWideVersion';

const ManagersList = () => {
  const [wideVersion, setWideVersion] = useState<any>();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  useEffect(() => {
    setWideVersion(isWideVersion);
  }, [isWideVersion]);

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
          RELAÇÃO DO DIRIGENTE E ASSESSORES
        </Heading>

        <VStack align="flex-start" mb={10}>
          <Box mb={5}>
            <Text fontWeight="700" fontSize="xl">
              Dirigente
            </Text>
            <Text>Levi Clemente Dos Santos</Text>
            <Text>Coronel PM</Text>
            <Text>Gestão: 01/03/2023 - Atual</Text>
          </Box>
          
          <Text pb={5}>
            Ingressou em 1988 na Academia de Policia Militar do Barro Branco, tendo exercido sua carreira no Corpo de Bombeiros Militar. Atualmente é Oficial da Reserva,

Advogado e Engenheiro Civil. Possui cursos de pós-graduação nas áreas Jurídica e de Segurança Pública. Sua esposa e filhos são beneficiários da CBPM.
          </Text>

          {wideVersion ? (
            <SuperintendenceWideVersion />
          ) : (
            <SuperintendenceSmallVersion />
          )}

          <Center w="100%">
            <Link href="/portal-da-transparencia">
              <Button
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                bg="blue.default"
                color="white.default"
                px={{ base: 7, sm: 7, md: 8, lg: 10 }}
                py={5}
                borderRadius="3xl"
                _hover={{ color: 'none' }}
              >
                Voltar
              </Button>
            </Link>
          </Center>
        </VStack>
      </Container>
    </Fragment>
  );
};

export default ManagersList;
