import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaFileExcel, FaFilePdf, FaFileWord } from 'react-icons/fa';
import Header from '../components/Header';
import Link from '../components/Link';

const Forms = () => {
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
          FORMULÁRIOS
        </Heading>

        <Text fontWeight="700">
          <Link
            href="/pdfs/portarias/portaria_cbpm_66_01_2023.pdf"
            fontWeight="700"
            fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
            color="blue.default"
            isExternal
          >
            Portaria Nº CBPM - 66/01/2023{' '}
          </Link>
          {/* e{' '}
          <Link
            href="/pdfs/portarias/portaria_cbpm_17_01_2022.pdf"
            fontWeight="700"
            fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
            color="blue.default"
            isExternal
          >
            Portaria Nº CBPM - 17/01/2022
          </Link> */}
        </Text>

        <Text
          fontWeight="700"
          fontSize={{ base: 'sm', sm: 'md', md: 'xl', lg: 'xl' }}
          mb={2}
          mt={5}
        >
          PREENCHA DIGITALMENTE OU BAIXE OS FORMULÁRIOS – FICHAS DE DECLARAÇÃO DE FAMÍLIA
        </Text>

        <SimpleGrid columns={{ md: 1, lg: 2 }} mt={10}>
          <VStack align="flex-start" maxW={{ lg: '550px' }} mb={6}>
            <Text>
            Os formulários podem ser preenchidos  e enviados digitalmente através  do acesso à <Link href="/login" fontWeight="700">Área de Serviço do Usuário do Portal</Link> ou baixados na <Link href="/formularios-declaracao" fontWeight="700">Área Pública do Portal</Link>
            </Text>

            <Text>Pode ser enviado ou entregues também pelos seguintes meios:</Text>
            <Text>- Na sede da CBPM na Rua Alfredo Maia, 218 – Luz, de segunda a sexta-feira, em dias úteis, das 8h às 17h.</Text>
            <Text>
              E-mail{' '}
              <Link href="mailto:cadastro@cbpm.sp.gov.br" fontWeight="700">
                cadastro@cbpm.sp.gov.br.
              </Link>
            </Text>

            <Text>Para dúvidas e maiores informações, favor entrar em contato através dos telefones  (11) 3315-3000 ou (11) 3315-3100.</Text>
          </VStack>

          <SimpleGrid columns={{ lg: 2 }} w="100%" spacingY={3}>
            <VStack align="flex-start">
              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>

                <Link
                  isExternal
                  href="/forms/01_inclusao_de_conjuge.pdf"
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de inclusão de cônjuge – C.01
                </Link>
              </HStack>

              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>

                <Link
                  href="/forms/02_inclusao_de_companheiro.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de inclusão de companheira(o) – União estável – C.02
                </Link>
              </HStack>

              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>

                <Link
                  href="/forms/03_inclusao_de_filhos.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de inclusão de filhos – C.03
                </Link>
              </HStack>

              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>

                <Link
                  href="/forms/04_inclusao_de_genitores.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de inclusão de genitores – C.04
                </Link>
              </HStack>

              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>

                <Link
                  href="/forms/05_inclusao_menor_sob_guarda_tutela_curatela.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de inclusão de menor so guarda – Tutela – Curatela - C.05
                </Link>
              </HStack>

              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>

                <Link
                  href="/forms/05_inclusao_menor_sob_guarda_tutela_curatela_complemento.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de inclusão de menor so guarda – Tutela – Curatela - C.05 - Complemento
                </Link>
              </HStack>

              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>

                <Link
                  href="/forms/06_inclusao_beneficiario_com_invalidez.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de inclusão de beneficiário(a) por invalidez – C.06
                </Link>
              </HStack>
              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>

                <Link
                  href="/forms/07_exclusao_de_dependentes.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de requerimento de exclusão de dependentes – C.07
                </Link>
              </HStack>
            </VStack>

            <VStack align="flex-start">
              

              {/* <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>

                <Link
                  href="/forms/08_exclusao_de_companheira_enteado.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Requerimento para exclusão de companheira(o)/enteado(a)/dissolução de união estável
                </Link>
              </HStack> */}

              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>

                <Link
                  href="/forms/09_inclusao_e_atualizacao_de_pensionista.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de requerimento de inclusão e/ou atualização de pensionista – C.09
                </Link>
              </HStack>

              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>

                <Link
                  href="/forms/10_solicitacao_geral.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de solicitação em geral – C.10
                </Link>
              </HStack>
              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>
              <Link
                  href="/forms/F1_formulario_de_atualizacao_cadastral.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de atualização cadastral - C.11
                </Link>
              </HStack>


              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>

                <Link
                  href="/forms/R1_reinclusao_de_contribuinte.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de reinclusão de contribuinte R.01
                </Link>
              </HStack>
              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>
              <Link
                  href="/forms/R2_declaracao_de_saude_de_beneficiario.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de declaração de saúde de beneficiário(a) – R.02
                </Link>
              </HStack>

              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>
              <Link
                  href="/forms/F1_reembolso_despesas_medicas.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de reembolso despesas médicas – F.01
                </Link>
              </HStack>

              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>
              <Link
                  href="/forms/F2_devolucao_de_coparticipacao.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de devolução de coparticipação – F.02
                </Link>
              </HStack>






              <HStack>
                <Box>
                  <FaFilePdf size="30px" />
                </Box>
              <Link
                  href="/forms/F1_formulario_de_atualizacao_cadastral.pdf"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de atualização cadastral - FAC.01
                </Link>
              </HStack>
              <HStack>
                <Box>
                  <FaFileWord size="30px" />
                </Box>
              <Link
                  href="/forms/F1_formulario_de_atualizacao_cadastral.docx"
                  isExternal
                  color="blue.default"
                  fontWeight="700"
                >
                  Formulário de atualização cadastral - FAC.01
                </Link>
              </HStack>

            </VStack>
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Fragment>
  );
};

export default Forms;
