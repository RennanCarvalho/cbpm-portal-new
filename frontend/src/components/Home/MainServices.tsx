import { Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { AiOutlineFileDone, AiOutlineReload } from 'react-icons/ai';
import { FaFileMedical, FaRegAddressCard, FaRegEdit } from 'react-icons/fa';
import Link from '../Link';

export const MainService = () => {
  return (
    <Container
      bg="blue.default"
      p={5}
      maxW="container.xl"
      centerContent
      mt={10}
    >
      <Heading
      as={"h1"}
        color="white.default"
        fontSize="30px"
        fontWeight={'bold'}
        mb={2}
        p={8}
        whiteSpace="nowrap"
      >
        Principais Serviços
      </Heading>

      <SimpleGrid
        columns={5}
        maxW="1280px"
        w="100%"
        spacing="22px"
        minChildWidth="200px"
        justifyItems="center"
      >
        <VStack
          bg="white.default"
          borderRadius="lg"
          maxW="200px"
          w="100%"
          h="170px"
          p={3}
          justify="center"
        >
          <FaRegAddressCard size="50px" color="#1048A0" />
          <Link href="/emissao-de-credencial">
            <Text color="blue.default" fontWeight="700" whiteSpace="nowrap">
              Credencial CBPM
            </Text>
          </Link>
        </VStack>

        <VStack
          bg="white.default"
          borderRadius="lg"
          maxW="200px"
          w="100%"
          h="170px"
          p={3}
          justify="center"
        >
          <FaFileMedical size="50px" color="#1048A0" />
          <Link href="/extrato-contas-medicas">
            <Text color="blue.default" fontWeight="700" align="center">
              Extratos de Contas Médicas
            </Text>
          </Link>
        </VStack>

        <VStack
          bg="white.default"
          borderRadius="lg"
          maxW="200px"
          w="100%"
          h="170px"
          p={3}
          justify="center"
        >
          <FaRegEdit size="50px" color="#1048A0" />
          <Link href="/formularios-declaracao">
            <Text color="blue.default" fontWeight="700" whiteSpace="nowrap">
              Formulários
            </Text>
          </Link>
        </VStack>

        <VStack
          bg="white.default"
          borderRadius="lg"
          maxW="200px"
          w="100%"
          h="170px"
          p={3}
          justify="center"
        >
          <AiOutlineFileDone size="50px" color="#1048A0" />
          {/* <Link href="/area-restrita/servicos/carencias"> */}
          <Link href="/carencias">
            <Text color="blue.default" fontWeight="700" whiteSpace="nowrap">
              Carências
            </Text>
          </Link>
        </VStack>

        <VStack
          bg="white.default"
          borderRadius="lg"
          maxW="200px"
          w="100%"
          h="170px"
          p={3}
          justify="center"
        >
          <AiOutlineReload size="50px" color="#1048A0" />
          <Link href="/area-restrita/servicos/atualizar-dados">
            <Text textAlign="center" color="blue.default" fontWeight="700">
              Atualização de dados cadastrais
            </Text>
          </Link>
        </VStack>
      </SimpleGrid>
    </Container>
  );
};
