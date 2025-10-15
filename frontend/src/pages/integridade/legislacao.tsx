import {
  Box,
  Container,
  Heading,
  Text,
  Center,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  VisuallyHidden,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';
import { FaFilePdf } from 'react-icons/fa';

const Law = () => {
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
        mb={10}
      >
        <Heading
          as="h1"
          size="lg"
          color="blue.default"
          textAlign="left"
          whiteSpace="nowrap"
          mt={10}
          mb={5}
        >
          Legislação relacionada ao Programa de Integridade
        </Heading>

        <Center>
          <Box w="100%" overflowY="scroll">
            <Table variant="simple">
              <Thead>
                <Tr bgColor="#9ab7e0">
                  <Fragment>
                    <Th color="black.default">Legislação</Th>
                    <Th color="black.default">Descrição</Th>
                    <Th color="black.default">Ver</Th>
                  </Fragment>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>
                    <Text>
                      Resolução CGE nº 19/2023, de 11-09-2023
                    </Text>
                  </Td>
                  <Td>
                    <Text>
                      Dispõe sobre a composição da Unidade de Gestão de
                      Integridade no âmbito da Controladoria Geral do Estado.
                    </Text>
                  </Td>

                  <Td>
                    <Link isExternal href="/integridade/pdfs/1.0-legislacao.pdf">
                    <FaFilePdf size="30px" />
                    <VisuallyHidden>arquivo 1.0</VisuallyHidden>
                    </Link>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Text>
                      Resolução CGE nº 17/2023, de 17-08-2023
                    </Text>
                  </Td>
                  <Td>
                    <Text>
                      Atualiza ações do Plano Anticorrupção do Estado de São
                      Paulo constantes do Decreto nº 67.682, de 03 de maio de
                      2023.
                    </Text>
                  </Td>

                  <Td>
                    <Link isExternal href="/integridade/pdfs/1.1-legislacao.pdf">
                    <FaFilePdf size="30px" />
                    <VisuallyHidden>arquivo 1.1</VisuallyHidden>
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>
                      Decreto nº 67.883, de 15/08/2023
                    </Text>
                  </Td>
                  <Td>
                    <Text>
                      Altera o § 3° do artigo 7° do Decreto n° 67.683, de 3 de
                      maio de 2023, que institui o Plano Estadual de Promoção de
                      Integridade e dá providências correlatas.
                    </Text>
                  </Td>

                  <Td>
                    <Link
                     isExternal 
                      href="/integridade/pdfs/1.2-legislacao.pdf"
                      target="_blank"
                    ><FaFilePdf size="30px" />
                    <VisuallyHidden>arquivo 1.2</VisuallyHidden>
                    </Link>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Text>
                      Resolução CGE nº 10/2023, de 15-06-2023
                    </Text>
                  </Td>
                  <Td>
                    <Text>
                      Institui a Unidade de Gestão de Integridade no âmbito da
                      Controladoria Geral do Estado.
                    </Text>
                  </Td>

                  <Td>
                    <Link
                     isExternal 
                      href="/integridade/pdfs/1.3-legislacao.pdf"
                      >
                      <FaFilePdf size="30px" />
                      <VisuallyHidden>arquivo 1.3</VisuallyHidden>
                    </Link>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Text>
                      Resolução CGE nº 09/2023, de 13-06-2023
                    </Text>
                  </Td>
                  <Td>
                    <Text>
                      Altera o artigo 5º e o Anexo da Resolução CGE nº 04, de 30
                      de maio de 2023.
                    </Text>
                  </Td>

                  <Td>
                    <Link
                     isExternal 
                      href="/integridade/pdfs/1.4-legislacao.pdf"
                      >
                        <FaFilePdf size="30px" />
                        <VisuallyHidden>arquivo 1.4</VisuallyHidden>
                    </Link>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Text>
                      Resolução CGE nº 07/2023, de 13-06-2023
                    </Text>
                  </Td>
                  <Td>
                    <Text>
                      Atualiza ações do Plano Anticorrupção do Estado de São
                      Paulo constantes do Decreto nº 67.682, de 03 de maio de
                      2023.
                    </Text>
                  </Td>

                  <Td>
                    <Link
                     isExternal 
                      href="/integridade/pdfs/1.5-legislacao.pdf"
                      >
                        <FaFilePdf size="30px" />
                        <VisuallyHidden>arquivo 1.5</VisuallyHidden>
                    </Link>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Text>
                      Resolução CGE nº 04/2023, de 30/05/2023
                    </Text>
                  </Td>
                  <Td>
                    <Text>
                      Estabelece orientações para que os órgãos e as entidades
                      da Administração Pública direta e autárquica do Estado de
                      São Paulo adotem os procedimentos para a estruturação, a
                      elaboração, a implementação e o monitoramento de seus
                      programas de integridade e dá outras providências.
                    </Text>
                  </Td>

                  <Td>
                    <Link
                     isExternal 
                      href="/integridade/pdfs/1.6-legislacao.pdf"
                      >
                        <FaFilePdf size="30px" />
                        <VisuallyHidden>arquivo 1.6</VisuallyHidden>
                    </Link>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Text>
                      Decreto nº 67.683, de 03/05/2023
                    </Text>
                  </Td>
                  <Td>
                    <Text>
                      Institui o Plano Estadual de Promoção de Integridade e dá
                      providências correlatas.
                    </Text>
                  </Td>

                  <Td>
                    <Link
                     isExternal 
                      href="/integridade/pdfs/1.7-legislacao.pdf"
                      >
                        <FaFilePdf size="30px" />
                        <VisuallyHidden>arquivo 1.7</VisuallyHidden>
                    </Link>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Text>
                      Decreto nº 67.682, de 03/05/2023
                    </Text>
                  </Td>
                  <Td>
                    <Text>
                      Aprova o Plano Anticorrupção do Estado de São Paulo e dá
                      providências correlatas.
                    </Text>
                  </Td>

                  <Td>
                    <Link
                     isExternal 
                      href="/integridade/pdfs/1.8-legislacao.pdf"
                      >
                        <FaFilePdf size="30px" />
                        <VisuallyHidden>arquivo 1.8</VisuallyHidden>
                    </Link>
                  </Td>
                </Tr>



                <Tr>
                  <Td>
                    <Text>
                     Decreto nº 69.122, de 9/12/2024
                    </Text>
                  </Td>
                  <Td>
                    <Text>
                    Dispõe sobre a apuração preliminar e o termo de ajustamento de
conduta a que se referem os artigos 265 e 267-E a 267-M da Lei nº
10.261.
                    </Text>
                  </Td>

                  <Td>
                    <Link isExternal href="/integridade/pdfs/1.9-legislacao.pdf">
                    <FaFilePdf size="30px" />
                    <VisuallyHidden>arquivo 1.9</VisuallyHidden>
                    </Link>
                  </Td>
                </Tr><Tr>
                  <Td>
                    <Text>
                      Resolução CGE nº 08, de 24/03/2025
                    </Text>
                  </Td>
                  <Td>
                    <Text>
                    Dispõe sobre a forma, conteúdo e a periodicidade das informações
que deverão ser prestadas à Corregedoria Geral do Estado pelas
unidades de apuração preliminar.
                    </Text>
                  </Td>

                  <Td>
                    <Link isExternal href="/integridade/pdfs/2.0-legislacao.pdf">
                    <FaFilePdf size="30px" />
                    <VisuallyHidden>arquivo 2.0</VisuallyHidden>
                    </Link>
                  </Td>
                </Tr>





                
              </Tbody>
            </Table>
          </Box>
        </Center>

        <Center w="100%" mt={10}>
          <Link href="/integridade">
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
    </Fragment>
  );
};

export default Law;
