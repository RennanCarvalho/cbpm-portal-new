import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from '../Link';

const Forms = (isAuthorized: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthorized.isAuthorized) {
      router.push('/area-restrita/servicos');
    }
  }, [isAuthorized, router]);

  return (
    <Container
      maxW="1280px"
      w="100%"
      minH="100vh"
      bgImage="url('/bg_cbpm.png')"
      bgSize="650px 650px"
      bgRepeat="no-repeat"
      bgPosition="top right"
      fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
      mb={{ base: 10, sm: 10, md: 10, lg: 0 }}
    >
      <Heading
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '3xl' }}
        as="h1"
        textDecor="underline"
        textAlign="center"
        mt={10}
        mb={10}
      >
        FORMULÁRIOS
      </Heading>

      <SimpleGrid spacing={4} columns={{ base: 1, sm: 1, md: 2, lg: 2 }}>
        <VStack spacing="1rem">
          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/inclusao-de-conjuge">
              <Text textAlign="center" fontWeight="700">
              Formulário de inclusão de cônjuge – C.01
              </Text>
            </Link>
          </Box>

          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/inclusao-de-companheiro">
              <Text textAlign="center" fontWeight="700">
              Formulário de inclusão de companheira(o) – União estável – C.02
              </Text>
            </Link>
          </Box>

          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/inclusao-de-filhos-e-enteados">
              <Text textAlign="center" fontWeight="700">
              Formulário de inclusão de filhos – C.03
              </Text>
            </Link>
          </Box>

          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/inclusao-de-genitores">
              <Text textAlign="center" fontWeight="700">
              Formulário de inclusão de genitores – C.04
              </Text>
            </Link>
          </Box>

          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/inclusao-de-menor-sob-guarda-curatela">
              <Text textAlign="center" fontWeight="700">
                Formulário de inclusão de menor sob Tutela – Curatela - C.05
              </Text>
            </Link>
          </Box>

          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/inclusao-de-menor-sob-guarda-judicial">
              <Text textAlign="center" fontWeight="700">
                Formulário de inclusão de menor sob guarda – judicial - C.05.1
              </Text>
            </Link>
          </Box>

          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/inclusao-de-beneficiario-com-invalidez">
              <Text textAlign="center" fontWeight="700">
              Formulário de inclusão de beneficiário(a) por invalidez – C.06
              </Text>
            </Link>
          </Box>
          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/exclusao-de-conjuge">
              <Text textAlign="center" fontWeight="700">
              Formulário de requerimento de exclusão de dependentes – C.07
              </Text>
            </Link>
          </Box>
        </VStack>

        <VStack spacing="1rem">
        
          {/* <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/exclusao-de-companheiro">
              <Text textAlign="center" fontWeight="700">
              Requerimento para exclusão de companheira(o)/enteado(a)/dissolução de união estável
              </Text>
            </Link>
          </Box> */}

          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/inclusao-ou-atualizacao-dados-pensionista">
              <Text textAlign="center" fontWeight="700">
              Formulário de requerimento de inclusão e/ou atualização de pensionista – C.09
              </Text>
            </Link>
          </Box>

          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/solicitacao-geral">
              <Text textAlign="center" fontWeight="700">
              Formulário de solicitação em geral – C.10
              </Text>
            </Link>
          </Box>
          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/atualizacao-cadastral">
              <Text textAlign="center" fontWeight="700">
              Formulário de atualização cadastral - C.11
              </Text>
            </Link>
          </Box>
          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/reinclusao-administrativa">
              <Text textAlign="center" fontWeight="700">
              Formulário de reinclusão de contribuinte R.01
              </Text>
            </Link>
          </Box>

          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/declaracao-de-saude">
              <Text textAlign="center" fontWeight="700">
              Formulário de declaração de saúde de beneficiário(a) – R.02
              </Text>
            </Link>
          </Box>


          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/reembolso-despesas-medicas">
              <Text textAlign="center" fontWeight="700">
              Formulário de reembolso despesas médicas – F.01
              </Text>
            </Link>
          </Box>

          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/devolucao-de-coparticipacao">
              <Text textAlign="center" fontWeight="700">
              Formulário de devolução de coparticipação – F.02
              </Text>
            </Link>
          </Box>

          <Box
            maxW="400px"
            w="100%"
            py={2}
            border="1px"
            borderColor="gray.default"
            boxShadow="0 5px 5px #C0C0C0"
            bg="white.default"
          >
            <Link href="/area-restrita/servicos/formularios/atualizacao-cadastral">
              <Text textAlign="center" fontWeight="700">
              Formulário de atualização cadastral - FAC.01
              </Text>
            </Link>
          </Box>
          
        </VStack>
      </SimpleGrid>

      <Center>
        <Link href="/area-restrita/servicos" mt={10}>
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
    </Container>
  );
};

export default Forms;
