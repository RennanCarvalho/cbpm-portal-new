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

const PartnershipExpenseStatement = () => {
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
          PLANO DIRETOR
        </Heading>

        <HStack mb={2}>
          <Link
            href="/pdfs/portal_transparencia/plano-diretor-2023_2026.pdf"
            fontWeight="700"
            fontSize="lg"
            isExternal
          >
            <FaFilePdf size="50px" />
            <VisuallyHidden>arquivo plano diretor 2023 - 2026 em pdf</VisuallyHidden>
          </Link>
          <Link
            href="/pdfs/portal_transparencia/plano-diretor-2023_2026.xlsx"
            fontWeight="700"
            fontSize="lg"
            isExternal
          >
            <FaFileExcel size="50px" />
            <VisuallyHidden>arquivo plano diretor 2023 - 2026 em xlsx</VisuallyHidden>
          </Link>

          <VStack align="flex-start">
            <Text fontWeight="700">Plano Diretor - TIC—CBPM—2023/2026 - Revisado</Text>
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

export default PartnershipExpenseStatement;
