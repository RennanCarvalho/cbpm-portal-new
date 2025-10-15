import {
  Box,
  Container,
  Heading,
  HStack,
  Img,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { Fragment, useEffect, useState } from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';
import Header from '../components/Header';
import Link from '../components/Link';
import ContributionTableSmall from '../components/NewPoliceGuidance/ContributionTableSmall';
import ContributionTableWide from '../components/NewPoliceGuidance/ContributionTableWide';

const NewPoliceGuidance = () => {
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
          ORIENTAÇÕES PARA NOVOS POLICIAIS MILITARES
        </Heading>

        <Text fontWeight="700" fontSize={{ base: 'md', lg: 'xl' }} mb={10}>
          CONTRIBUIÇÃO MENSAL DE NOVOS POLICIAIS MILITARES
        </Text>

        <HStack align="flex-start">
          <HStack flexWrap="wrap" w="100%">
            <VStack w="600px" spacing="22px">
              <Box>
                <Text>
                  Ao ingressar na Polícia Militar do Estado de São Paulo
                  (PMESP), os policiais militares passam a contribuir com 2% de
                  sua retribuição-base para a Caixa Beneﬁcente da Polícia
                  Militar (CBPM), cujos valores são direcionados,
                  exclusivamente, para a Assistência Médico - Hospitalar dos
                  beneficiários dependentes legais.
                </Text>
              </Box>

              <Box>
                <Text>
                  A valorização do nosso patrimônio é crucial para o bem-estar
                  dos familiares dos policiais militares, os quais seriam
                  atendidos pela rede pública ou por planos privados, caso não
                  estivessem acesso ao regime de Assistência Médico - Hospitalar
                  da CBPM.
                </Text>
              </Box>

              <HStack alignSelf="flex-start">
                <Box>
                  <FaRegHandPointRight size="30px" />
                </Box>

                <Text>
                  <Link href="/mutualismo" fontWeight="700">
                    Saiba mais
                  </Link>{' '}
                  sobre o mutualismo e as ações jurídicas
                </Text>
              </HStack>
            </VStack>

            <Box
              maxW="450px"
              w="100% "
              h={{ sm: '230px', md: '270px', lg: '300px' }}
              pt={2}
            >
              <Img src="/orientacao_novos_policiais.jpg" w="100%" h="100%" alt='imagem fachada CBPM' />
            </Box>
          </HStack>
        </HStack>

        <Box
          border="1px"
          borderColor="gray.default"
          borderRadius="12px"
          maxW="600px"
          w="100%"
          p={3}
          mt="30px"
        >
          {wideVersion ? <ContributionTableWide /> : <ContributionTableSmall />}
        </Box>

        <Box mt={7}>
          <Text fontSize="xl" fontWeight="700">
            MAIS INFORMAÇÕES
          </Text>

          <Text>Setor de Cadastro</Text>

          <Text>(11) 3315-3000</Text>

          <Link href="mailto:cadastro@cbpm.sp.gov.br">
            cadastro@cbpm.sp.gov.br
          </Link>
        </Box>
      </Container>
    </Fragment>
  );
};

export default NewPoliceGuidance;
