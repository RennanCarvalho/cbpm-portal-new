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
import { FaFileCsv, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import Header from '../../components/Header';
import Link from '../../components/Link';

const PhysicalFinancialReport = () => {
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
          PORTAL DA TRANSPARÊNCIA
        </Heading>

        <HStack mb={2}>
        <Link
            href="/pdfs/portal_transparencia/relatorio_fisico_financeiro/2020.pdf"
            fontWeight="700"
            fontSize="lg"
            isExternal
          >
            <FaFilePdf size="50px" />
            <VisuallyHidden>arquivo relatório fisico financeiro de 2020 em pdf</VisuallyHidden>

          </Link>

          <VStack align="flex-start">
            <Text fontWeight="700">RELATÓRIO FÍSICO FINANCEIRO 2020</Text>
          </VStack>
        </HStack>

        <HStack mb={2}>
        <Link
            href="/pdfs/portal_transparencia/relatorio_fisico_financeiro/2021.pdf"
            fontWeight="700"
            fontSize="lg"
            isExternal
          >
            <FaFilePdf size="50px" />
            <VisuallyHidden>arquivo relatório fisico financeiro de 2021 em pdf</VisuallyHidden>

          </Link>

          <VStack align="flex-start">
            <Text fontWeight="700">RELATÓRIO FÍSICO FINANCEIRO 2021</Text>
          </VStack>
        </HStack>

        <HStack mb={2}>
        <Link
            href="/pdfs/portal_transparencia/relatorio_fisico_financeiro/2022.pdf"
            fontWeight="700"
            fontSize="lg"
            isExternal
          >
            <FaFilePdf size="50px" />
            <VisuallyHidden>arquivo relatório fisico financeiro de 2022 em pdf</VisuallyHidden>

          </Link>

          <VStack align="flex-start">
            <Text fontWeight="700">RELATÓRIO FÍSICO FINANCEIRO 2022</Text>
          </VStack>
        </HStack>

        <HStack mb={2}>
          <Link
            href="/pdfs/portal_transparencia/relatorio_fisico_financeiro/2023.pdf"
            fontWeight="700"
            fontSize="lg"
            isExternal
          >
            <FaFilePdf size="50px" />
            <VisuallyHidden>arquivo relatório fisico financeiro de 2023 em pdf</VisuallyHidden>

          </Link>
          <Link
            href="/pdfs/portal_transparencia/relatorio_fisico_financeiro/2023.xlsx"
            fontWeight="700"
            fontSize="lg"
          >
            <FaFileExcel size="50px" />
            <VisuallyHidden>arquivo relatório fisico financeiro de 2023 em xlsx</VisuallyHidden>
          </Link>

          <VStack align="flex-start">
            <Text fontWeight="700">RELATÓRIO FÍSICO FINANCEIRO 2023</Text>
          </VStack>
        </HStack>


        <HStack mb={2}>
          <Link href="/pdfs/portal_transparencia/relatorio_fisico_financeiro/2022-2025.pdf" fontWeight="700" fontSize="lg" isExternal >
            <FaFilePdf size="50px" />
            <VisuallyHidden>arquivo relatório fisico financeiro de 2022 à 2025 em pdf</VisuallyHidden>
          </Link>
          <Link href="/pdfs/portal_transparencia/relatorio_fisico_financeiro/2022-2025.xlsx" fontWeight="700" fontSize="lg" >
            <FaFileExcel size="50px" />
            <VisuallyHidden>arquivo relatório fisico financeiro de 2022 à 2025 em xlsx</VisuallyHidden>
            </Link>
          <Link href="/pdfs/portal_transparencia/relatorio_fisico_financeiro/2022-2025.csv" fontWeight="700" fontSize="lg" >
            <FaFileCsv size="50px" />
            <VisuallyHidden>arquivo relatório fisico financeiro de 2022 à 2025 em csv</VisuallyHidden>
            </Link>
          <VStack align="flex-start"></VStack>
          <Text fontWeight="700">RELATÓRIO FÍSICO FINANCEIRO 2022 à 2025</Text>
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

export default PhysicalFinancialReport;
