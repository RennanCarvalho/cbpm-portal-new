import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Img,
  Link as ChakraLink,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';

const CitizenInformationService = () => {
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
          SERVIÇO DE INFORMAÇÃO AO CIDADÃO (SIC)
        </Heading>

        <Flex>
          <HStack w="100%" justify="space-evenly" flexWrap="wrap">
            <Box>
              <Img src="/sic.png" w="100%" h="100%" alt='imagem do logo SIC SP'/>
            </Box>

            <VStack w="400px" align="flex-start">
              <Text>
                Trata-se de um serviço gratuito, em cumprimento à Lei
                Complementar da Transparência (nº 131/2009), à Lei de Acesso à
                Informação (nº 12.527/2011) e ao Decreto do Governo de São Paulo
                (nº 58.052/2012), que visa atender e orientar o público; receber
                e gerenciar os pedidos de informações e disponibilizar dados de
                interesse do cidadão, sendo desnecessária a apresentação dos
                motivos da solicitação.
              </Text>

              <Text fontWeight="700">ATENDIMENTO ONLINE</Text>

              <Text>
                <ChakraLink
                  href="http://www.sic.sp.gov.br/"
                  fontWeight="700"
                  isExternal
                >
                  Clique aqui para acessar o Portal SIC
                </ChakraLink>                
              </Text>

              <Text>
                Envie um e-mail para:{' '}
                <ChakraLink href="mailto:cbpm@sic.sp.gov.br" fontWeight="700">
                  cbpm@sic.sp.gov.br
                </ChakraLink>
              </Text>

              <Text fontWeight="700">ATENDIMENTO PRESENCIAL E TELEFÔNICO</Text>

              <Text>
                End.: R. Alfredo Maia, 218 – Luz – São Paulo/SP CEP: 01106–010
              </Text>

              <Text>Tel.: (11) 3315-3043</Text>

              <Text>Responsável: Mônica Puliti Dias Ferreira</Text>

              <Text>Expediente: dias úteis, das 8h às 17h</Text>

              <Text fontWeight="700">IMPORTANTE</Text>

              <Text>
                Na impossibilidade de conceder o acesso imediato à informação, o
                SIC tem até 20 dias para atender à demanda, prazo que pode ser
                prorrogado por mais 10 dias, mediante justiﬁcativa expressa ao
                interessado.
              </Text>
            </VStack>
          </HStack>
        </Flex>
      </Container>
    </Fragment>
  );
};

export default CitizenInformationService;
