import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaRegHandPointRight } from 'react-icons/fa';
import Link from '../Link';
import ContribuinteShortages from './ContribuinteShortages';
import DependenteAndPensionistaShortage from './DependenteAndPensionistaShortage';

const Shortages = (props: any) => {
  const categoria = props.categoria[0].Categoria;

  return (
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
        mb={5}
        pt={10}
      >
        DETALHAMENTO DO {categoria}
      </Heading>

      <Text>Por favor, procure a CBPM para atualizar seu cadastro</Text>

      <HStack spacing="22px">
        <VStack alignSelf="flex-start" align="flex-start">
          <HStack mb={2} mt={7}>
            <Box>
              <FaRegHandPointRight size="30px" />
            </Box>

            <Text>Rua Alfredo Maia, 218- Luz- São Paulo, 01106-010</Text>
          </HStack>

          <HStack mb={2}>
            <Box>
              <FaRegHandPointRight size="30px" />
            </Box>

            <Text>
              Telefone: (11) 3315-3063 / (11) 3315-3097 / (11) 3315-3159
            </Text>
          </HStack>

          <HStack mb={2}>
            <Box>
              <FaRegHandPointRight size="30px" />
            </Box>

            <Text>Email: cadastro@cbpm.sp.gov.br</Text>
          </HStack>
        </VStack>
      </HStack>

      {props.categoria[0].Categoria === 'DEPENDENTE' ||
      props.categoria[0].Categoria === 'PENSIONISTA' ? (
        <DependenteAndPensionistaShortage {...props} />
      ) : (
        ' '
      )}

      {props.categoria[0].Categoria === 'CONTRIBUINTE' ? (
        <ContribuinteShortages {...props} />
      ) : (
        ' '
      )}

      <Center mt={5} mb={10}>
        <Link href="/area-restrita/servicos">
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

export default Shortages;
