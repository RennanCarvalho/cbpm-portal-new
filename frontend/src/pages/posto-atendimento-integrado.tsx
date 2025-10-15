import {
  Box,
  Container,
  Heading,
  HStack,
  Link as ChakraLink,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import {
  FaBuilding,
  FaRegHandPointRight,
  FaShieldAlt,
  FaUserShield,
} from 'react-icons/fa';
import Header from '../components/Header';

const IntegratedServiceStation = () => {
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
          POSTO DE ATENDIMENTO INTEGRADO
        </Heading>

        <Box mb={2}>
          <Text>
            O Posto de Atendimento Integrado (P.A.I.) agiliza a prestação de
            serviços da CBPM, da Central de Serviços da PM e da SPPrev.
          </Text>
        </Box>

        <HStack
          justify="space-around"
          align="flex-start"
          mt={10}
          flexWrap="wrap"
          fontSize={{ sm: 'md', md: 'lg' }}
        >
          <VStack>
            <Text fontWeight="700">Atendimento pessoal</Text>
            <Text>R. Alfredo Maia, 218 – Luz – São Paulo/SP</Text>
          </VStack>

          <VStack>
            <Text fontWeight="700" mt={{ sm: '20px', md: '0' }}>
              Serviços online
            </Text>

            <Text textAlign="center" fontSize={{ sm: 'md' }}>
              Acesse os sites das respectivas instituições para conferir <br />
              os serviços disponíveis via internet .
            </Text>
          </VStack>
        </HStack>

        <HStack>
          <Tabs isFitted variant="enclosed" w="100%" mt={10}>
            <TabList fontSize={{ sm: 'md', md: 'lg' }}>
              <Tab>
                <VStack>
                  <FaBuilding size="22px" />
                  <Text>CBPM</Text>
                </VStack>
              </Tab>

              <Tab>
                <VStack>
                  <FaShieldAlt size="22px" />
                  <Text>Central de Serviços da PMESP</Text>
                </VStack>
              </Tab>

              <Tab>
                <VStack>
                  <FaUserShield size="22px" />
                  <Text>SPPREV</Text>
                </VStack>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel fontSize={{ sm: 'md' }}>
                <Text fontWeight="700">
                  Serviços para contribuintes e beneﬁciários
                </Text>

                <HStack mb={2} mt={4}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>
                    Atendimento (11) 3315-3000/ (11) 3315-3100 | Funcionamento
                    8h às 17h
                  </Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Certidões de dependência</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Emissão de credencial*</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>
                    Extrato de despesas da Assistência Médico - Hospitalar
                  </Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Inclusão e exclusão de beneficiários dependentes</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Renegociação de dívidas</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>
                    Reinclusão no regime Assistência Médico - Hospitalar
                  </Text>
                </HStack>

                <VStack align="flex-start" mt={4}>
                  <Text>
                    * Mantenha seu cadastro atualizado. Não é necessário renovar
                    a credencial CBPM. A carteirinha pode ser usada normalmente,
                    desconsiderando o campo da validade.
                  </Text>

                  <Text>
                    IMPORTANTE: os contribuintes devem manter os dados
                    cadastrais atualizados (endereço, e-mail, telefone e
                    beneﬁciários) via e-mail{' '}
                    <ChakraLink href="mailto:cadastro@cbpm.sp.gov.br">
                      cadastro@cbpm.sp.gov.br.
                    </ChakraLink>
                  </Text>
                </VStack>
              </TabPanel>

              <TabPanel fontSize={{ sm: 'md' }}>
                <Text fontWeight="700">Serviços da Diretoria de Pessoal</Text>
                <Text>
                  Atendimento: (11) 3227-2300 | Funcionamento: dias úteis, das
                  8h às 17h
                </Text>
                <ChakraLink
                  href="https://www.policiamilitar.sp.gov.br"
                  isExternal
                >
                  www.policiamilitar.sp.gov.br
                </ChakraLink>

                <HStack mb={2} mt={4}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Atualização de fotos para policiais ativos</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Certidões criminais</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Consulta SIRH, Sis Pec e Folha</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Emissão de funcional</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>
                    Holerite para policiais ativos, ex-policiais e pensionistas
                    de militares ativos
                  </Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>
                    Informe de rendimentos: Imposto de Renda, Auxílio Reclusão,
                    Auxílio Funeral e Espólio
                  </Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>
                    Ofícios: pensão alimentícia, reforma por incapacidade física
                    etc.
                  </Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>
                    Requerimentos: CIAF, carta patente para veteranos,
                    insalubridade etc.
                  </Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>
                    Reset de senhas: consignado, e-mail, holerite etc.
                  </Text>
                </HStack>
              </TabPanel>

              <TabPanel fontSize={{ sm: 'md' }}>
                <Text fontWeight="700">
                  Serviços para inativos militares, pensionistas militares,
                  aposentados civis e pensionistas civis
                </Text>
                <Text>
                  Atendimento: 0800 777 7738 | Funcionamento: dias úteis, das 9h
                  às 16h
                </Text>
                <ChakraLink href="https://www.spprev.sp.gov.br" isExternal>
                  www.spprev.sp.gov.br
                </ChakraLink>

                <HStack mb={2} mt={4}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Consignações</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>
                    Emissão de declarações: beneficiários dependentes,
                    aposentadoria e inatividade
                  </Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Exclusão por óbito</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Informe de Rendimentos</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>
                    Isenção de Imposto de Renda e contribuição previdenciária
                  </Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Pensão alimentícia</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Pensão para pensionistas de militares e civis</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Recadastramento</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Revalorização de gratificações</Text>
                </HStack>

                <HStack mb={2}>
                  <Box>
                    <FaRegHandPointRight size="30px" />
                  </Box>
                  <Text>Revisão de benefícios</Text>
                </HStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </HStack>
      </Container>
    </Fragment>
  );
};

export default IntegratedServiceStation;
