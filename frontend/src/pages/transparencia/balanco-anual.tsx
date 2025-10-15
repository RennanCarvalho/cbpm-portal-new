import {
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Text,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaFileExcel, FaFilePdf } from 'react-icons/fa';
import Header from '../../components/Header';
import Link from '../../components/Link';

const BudgetBalance = () => {
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
        fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
      >
        <Heading
          as="h1"
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          color="blue.default"
          textAlign="left"
          mt={10}
          mb={5}
        >
          BALANÇO ANUAL
        </Heading>

        <HStack mb={2}>
          <Link
            href="/pdfs/portal_transparencia/balanco_orcamentario_2020.pdf"
            fontWeight="700"
            fontSize="lg"
            isExternal
          >
            <FaFilePdf size="50px" />
            <VisuallyHidden>Arquivo balanço orçamentário 2020</VisuallyHidden>
          </Link>

          <VStack align="flex-start">
            <Text fontWeight="700">
              Balanço Orçamentário - Exercício de 2020
            </Text>
          </VStack>
        </HStack>


        <HStack mb={2}>
        <Link
            href="/pdfs/BALANCOS-2022- anexos 12-13-14-15- LEI 4.320-64.pdf"
            fontWeight="700"
            fontSize="lg"
            isExternal
          >
            <FaFilePdf size="50px" />
            <VisuallyHidden>Arquivo balanços 2022</VisuallyHidden>
          </Link>          

          <VStack align="flex-start">
            <Text fontWeight="700">
              Balanço Orçamentário - Exercício de 2022
            </Text>
          </VStack>
        </HStack>

        <HStack mb={2}>
        <Link
            href="/pdfs/Balanço Orçamentário - Exercício de 2023.pdf"
            fontWeight="700"
            fontSize="lg"
            isExternal
          >
            <FaFilePdf size="50px" />
            <VisuallyHidden>Arquivo Exercícios 2023 em pdf</VisuallyHidden>
          </Link>
          <Link
            href="/pdfs/Balanço Orçamentário - Exercício de 2023.xls"
            fontWeight="700"
            fontSize="lg"
          >
            <FaFileExcel size="50px" />
            <VisuallyHidden>Arquivo Exercícios 2023 em xls</VisuallyHidden>
          </Link>

          <VStack align="flex-start">
            <Text fontWeight="700">
              Balanço Orçamentário - Exercício de 2023
            </Text>
          </VStack>
        </HStack>
        
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
    </Fragment>
  );
};

export default BudgetBalance;
