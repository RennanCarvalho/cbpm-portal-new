import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from '../Link';

const Extracts = (isAuthorized: any) => {
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
    >
      <Heading
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '3xl' }}
        as="h1"
        textDecor="underline"
        textAlign="center"
        mt={10}
        mb={10}
      >
        EXTRATOS DE CONTAS MÉDICAS
      </Heading>

      <VStack spacing="1rem">
        <Box
          maxW="500px"
          w="100%"
          py={2}
          border="1px"
          borderColor="gray.default"
          boxShadow="0 5px 5px #C0C0C0"
          bg="white.default"
        >
          <Link href="/area-restrita/servicos/extratos/extrato-contas-medicas-cruzazul">
            <Text textAlign="center" fontWeight="700">
              Detalhamento Mensal das Despesas Médicas - Coparticipação
            </Text>
          </Link>
        </Box>

        <Box
          maxW="500px"
          w="100%"
          py={2}
          border="1px"
          borderColor="gray.default"
          boxShadow="0 5px 5px #C0C0C0"
          bg="white.default"
        >
          <Link href="/area-restrita/servicos/extratos/extrato-contas-medicas">
            <Text textAlign="center" fontWeight="700">
              Extrato da Movimentação Financeiro
            </Text>
          </Link>
        </Box>

        <Link href="/area-restrita/servicos">
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
      </VStack>
    </Container>
  );
};

export default Extracts;
