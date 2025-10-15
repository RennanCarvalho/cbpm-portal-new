import { Box, Container, Heading, Img, Text, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';
import Link from '../components/Link';

const CredentialIssue = () => {
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
          EMISSÃO DE CREDENCIAL
        </Heading>

        <VStack align="flex-start">
          <Link
            href="/pdfs/portarias/portaria_cbpm_049_01_2020.pdf"
            fontWeight="700"
            fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
            color="blue.default"
            isExternal
          >
            Portaria CBPM – 36, de 22-4-2021
          </Link>

          <Text>
          Novas credenciais CBPM são emitidas no ato de inclusão dos beneficiários dependentes, mediante preenchimento do formulário por parte dos contribuintes e entrega da documentação comprobatória relativa a cada beneficiário dependente.
          </Text>

          <Text>
          Para solicitar a emissão da Credencial, o contribuinte ou beneficiário dependente pode solicitar através na página da CBPM na internet, Área de Serviço do Usuário- – Formulário Digital - <Link href="/login" fontWeight="700">https://www.cbpm.sp.gov.br/login</Link> ou comparecer presencialmente ao Posto de Atendimento Integrado na sede da CBPM (PAI-CBPM), ou no Posto de Atendimento Integrado na sede da Cruz Azul (PAI-Cambuci), para fins de atualização cadastral do Contribuinte e dos Beneficiários Dependentes, e requerer a emissão das respectivas credenciais.
          </Text>
        </VStack>

        <VStack mb={2} mt={7} align="flex-start">
          <Text fontWeight="700" fontSize={{ base: 'md', md: 'xl' }} mt={2}>
            Credencial de recém-nascidos
          </Text>

          <Text>
          Para filhos de contribuintes nascidos na Maternidade da Cruz Azul de São Paulo, a emissão da credencial da CBPM pode ser realizada diretamente no Pai Cambuci, mediante a apresentação da certidão de nascimento e do CPF.
          </Text>
        </VStack>

        <Box float={{ md: 'none', lg: 'right' }} maxW="325px">
          <Img src="/credencial_cbpm.jpg" w="100%" alt="imagem exemplo de credencial"/>
        </Box>

        <VStack mb={2} mt={7} align="flex-start">
          <Text>
          A Credencial pode ser solicitado através do Acesso à{' '}<br />
            <Link href="/login" fontWeight="700">
              Área de Serviço do Usuário
            </Link>
            {' '}do Portal
          </Text>
          <Text>Pode ser solicitado também pelos seguintes meios:</Text>
          <Text>
           - Endereço PAI-CBPM: R. Alfredo Maia, 218 - Luz, São Paulo - SP <br />
            Horário: Dias úteis, das 8h às 17h
          </Text>

          <Text>
          - Endereço PAI-Cambuci: Av. Lins Vasconcelos, 356 - Cambuci,
            São Paulo - SP <br />
            Horário: Dias úteis, das 8h às 17h
          </Text>
          <Text>- E-mail: <Link href="mailto:cadastro@cbpm.sp.gov.br">cadastro@cbpm.sp.gov.br.</Link></Text>

          <Text>
          Para maiores informações, favor entrar em contato através do telefone <Link href="tel:01133153000">(11) 3315-3000</Link>         
          </Text>
        </VStack>
      </Container>
    </Fragment>
  );
};

export default CredentialIssue;
