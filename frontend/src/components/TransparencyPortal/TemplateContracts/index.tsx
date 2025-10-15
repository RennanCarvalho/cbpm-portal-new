import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import Link from '../../Link';

type Contracts = {
  title: string;
  number?: string;
  process?: string;
  emission?: string;
  opening?: string;
  object?: string;
  advertising?: string;
  pdfLink?: Array<string>;
  status?: string;
};

type ContractsData = {
  contracts: Contracts[];
};

const TemplateContracts = ({ contracts }: ContractsData) => {
  return (
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
        {contracts[0].title}
      </Heading>

      <Center>
        <Box w="100%" overflowY="scroll">
          <Table variant="simple">
            <Thead>
              <Tr bgColor="#9ab7e0">
                <Fragment>
                  <Th color="black.default">NÚMERO</Th>
                  <Th color="black.default">PROCESSO</Th>
                  <Th color="black.default">EMISSÃO</Th>
                  <Th color="black.default">ABERTURA</Th>
                  <Th color="black.default">OBJETO</Th>
                  <Th color="black.default">PUBLICIDADE</Th>
                  <Th color="black.default">VISUALIZAR</Th>
                  <Th color="black.default">STATUS</Th>
                </Fragment>
              </Tr>
            </Thead>

            <Tbody>
              {contracts.map((contract, index) => {
                return (
                  <Tr key={index}>
                    <Td textAlign="justify">{contract.number}</Td>
                    <Td textAlign="justify">{contract.process}</Td>
                    <Td textAlign="justify">{contract.emission}</Td>
                    <Td textAlign="justify">{contract.opening}</Td>
                    <Td textAlign="justify">{contract.object}</Td>
                    <Td textAlign="justify">{contract.advertising}</Td>
                    <Td>
                      <VStack spacing={5}>
                        {contract.pdfLink ? (
                          contract.pdfLink.map((item, index) => {
                            return (
                              <Link href={`${item}`} key={index} isExternal>
                                <FaFilePdf size="30px" />
                                <VisuallyHidden>Link Contrato {contract.number}</VisuallyHidden>
                              </Link>
                            );
                          })
                        ) : (
                            <VisuallyHidden>Sem registros</VisuallyHidden>
                        )}
                      </VStack>
                    </Td>
                    <Td textAlign="justify">{contract.status}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </Center>

      <Center w="100%" mt={10}>
        <Link href="/portal-da-transparencia">
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

export default TemplateContracts;
