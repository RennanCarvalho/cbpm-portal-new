import {
  Box,
  Container,
  Heading,
  HStack,
  Img,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';
import Link from '../components/Link';

const ExtractMedicalBills = () => {
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
          EXTRATO DE CONTAS MÉDICAS
        </Heading>

        <HStack mb={2} spacing="36px" align="flex-start" flexWrap="wrap">
          <Box m={{ base: '0 auto', sm: '0 auto', md: '0 auto', lg: '0' }}>
            <Img
              src="/extrato_despesas_medicas.jpg"
              w={{ base: '280px', sm: '250px', md: '250px' }}
              h={{ base: '400px', sm: '400px', md: '300px', lg: '300px' }}
              alt='imagem exemplo de quadro demonstrativo de totais no periodo'
            />
          </Box>

          <VStack align="flex-start" maxW="700px" w="100%">
            <Text>
            O extrato de despesas digital pode ser solicitado através do acesso à{' '}
            <Link href="/login" fontWeight='700'>Área de Serviço do Usuário</Link> do Portal
            </Text>
            <Text>Pode ser solicitado também pelos seguintes meios:</Text>

            <Text>
            - Na sede da CBPM na Rua Alfredo Maia, 218 – Luz, de segunda a sexta-feira, em dias úteis, das 8h às 17h.
            </Text>

            <Text>- Endereço PAI-Cambuci: Av. Lins Vasconcelos, 356 - Cambuci,
São Paulo - SP
</Text>
<Text>Horário: Dias úteis, das 8h às 17h</Text>

            <Text>
              - E-mail{' '}
              <Link href="mailto:receita@cbpm.sp.gov.br" fontWeight="700">
                receita@cbpm.sp.gov.br
              </Link>
              .
            </Text>

            <Text>
            Para dúvidas e maiores informações, favor entrar em contato através dos telefones (11) 3315-3197 ou (11) 3315-3059
            </Text>
          </VStack>
        </HStack>
      </Container>
    </Fragment>
  );
};

export default ExtractMedicalBills;
