import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';
import Link from '../components/Link';

const InclusionExclusionBeneficiaries = () => {
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
          INCLUSÃO E EXCLUSÃO DE BENEFICIÁRIOS DEPENDENTES
        </Heading>

        <Text
          fontWeight="700"
          fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
          mb={10}
        >
          <Link href="/pdfs/portarias/portaria_cbpm_22_04_2021.pdf" isExternal>
            Portaria CBPM – 36, de 22–04–2021
          </Link>
        </Text>

        <VStack align="flex-start">
          <Text>
            Para a inclusão/exclusão/atualização de dados de beneficiário
            dependente como beneficiário da Assistência Médico - Hospitalar
            (AMH) da CBPM, o contribuinte deve preencher o formulário denominado
            Ficha de Declaração de Família correspondente ao tipo de
            beneficiário dependente que deseja incluir/excluir/atualizar dados.
          </Text>

          <Text>
            Acesse o{' '}
            <Link href="/contribuintes-e-beneficiarios" fontWeight="700">
              link{' '}
            </Link>
            para conferir os beneficiários dependentes do regime de Assistência
            Médico - Hospitalar (AMH).
          </Text>

          <Text>
            Os formulários estão disponíveis na página da CBPM na internet, que
            pode ser acessada no seguinte{' '}
            <Link href="/formularios-declaracao" fontWeight="700">
              link
            </Link>
          </Text>

          <Text>
            Após preenchimento do formulário correspondente ao beneficiário
            dependente que desejar incluir/excluir/atualizar dados, o
            contribuinte deve apresentar pessoalmente no Posto de Atendimento da
            CBPM, na R. Alfredo Maia, 218 – Luz, São Paulo – SP, CEP 01106-010,
            das 08h às 17Hs, nos dias úteis de segunda a sexta-feira, ou enviar
            pelo Correio por Carta Registrada (AR) para o endereço da CBPM aqui
            mencionado.
          </Text>

          <Box>
            <Text fontSize="xl" fontWeight="700">
              MAIS INFORMAÇÕES
            </Text>

            <Text>Setor de Cadastro</Text>

            <Text>(11) 3315-3000</Text>

            <Link href="mailto:cadastro@cbpm.sp.gov.br">
              cadastro@cbpm.sp.gov.br
            </Link>
          </Box>
        </VStack>
      </Container>
    </Fragment>
  );
};

export default InclusionExclusionBeneficiaries;
