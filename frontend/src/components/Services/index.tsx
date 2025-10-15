import {
  Container,
  Flex,
  Heading,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { parseCookies } from 'nookies';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineFileDone, AiOutlineReload } from 'react-icons/ai';
import { FaFileMedical, FaRegAddressCard, FaRegEdit } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthContext';
import Link from '../Link';

const Services = () => {
  const [hasCategory, setHasCategory] = useState<string | undefined>();
  const { signOut } = useContext(AuthContext);

  useEffect(() => {
    const { 'nextauth.category': category } = parseCookies();

    if (category) {
      setHasCategory(category);
    } else {
      signOut();
    }
  }, [signOut, hasCategory]);

  const iconSize = useBreakpointValue({ base: 40, sm: 40, md: 50, lg: 50 });

  const isDependent = hasCategory === 'DEPENDENTE' ? 1 : 2;

  return (
    <Container
      maxW="1280px"
      w="100%"
      bgImage="url('/bg_cbpm.png')"
      bgSize="650px 650px"
      bgRepeat="no-repeat"
      bgPosition="top right"
      fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
      mb={10}
    >
      <Heading
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '3xl' }}
        as="h1"
        textDecor="underline"
        textAlign="center"
        mt={10}
        mb={10}
      >
        SERVIÇOS ONLINE
      </Heading>

      <Flex justifyContent="space-around" flexWrap="wrap" gap={5}>
        <VStack spacing={5}>
          <VStack
            w={{ base: '200px', sm: '200px', md: '270px', lg: '270px' }}
            h="180px"
            bg="white.default"
            boxShadow="xl"
            rounded="xl"
            alignItems="center"
            justify="center"
            textAlign="center"
          >
            <AiOutlineReload size={iconSize ? iconSize : 40} color="#1048A0" />

            <Link
              href="/area-restrita/servicos/atualizar-dados"
              fontWeight="700"
            >
              Atualização de dados Cadastrais
            </Link>
          </VStack>

          <VStack
            w={{ base: '200px', sm: '200px', md: '270px', lg: '270px' }}
            h="180px"
            bg="white.default"
            boxShadow="xl"
            rounded="xl"
            alignItems="center"
            justify="center"
            textAlign="center"
          >
            <FaRegAddressCard size={iconSize ? iconSize : 40} color="#1048A0" />

            <Link
              href="/area-restrita/servicos/credencial-cbpm"
              fontWeight="700"
            >
              Credencial CBPM
            </Link>
          </VStack>

          <VStack
            w={{ base: '200px', sm: '200px', md: '270px', lg: '270px' }}
            h="180px"
            bg="white.default"
            boxShadow="xl"
            rounded="xl"
            alignItems="center"
            justify="center"
            textAlign="center"
          >
            <AiOutlineFileDone
              size={iconSize ? iconSize : 40}
              color="#1048A0"
            />

            <Link href="/area-restrita/servicos/carencias" fontWeight="700" aria-label="acesse carencias no caminho servicos/carencias">
              Carências
            </Link>
          </VStack>
        </VStack>

        {(hasCategory && hasCategory === 'CONTRIBUINTE') ||
        (hasCategory && hasCategory === 'PENSIONISTA') ? (
          <VStack spacing={5}>
            <VStack
              w={{ base: '200px', sm: '200px', md: '270px', lg: '270px' }}
              h="180px"
              bg="white.default"
              boxShadow="xl"
              rounded="xl"
              alignItems="center"
              justify="center"
              textAlign="center"
            >
              <FaFileMedical size={iconSize ? iconSize : 40} color="#1048A0" />

              <Link href="/area-restrita/servicos/extratos" fontWeight="700">
                Extratos de Contas Médicas
              </Link>
            </VStack>

            <VStack
              w={{ base: '200px', sm: '200px', md: '270px', lg: '270px' }}
              h="180px"
              bg="white.default"
              boxShadow="xl"
              rounded="2xl"
              alignItems="center"
              justify="center"
              textAlign="center"
            >
              <FaRegEdit size={iconSize ? iconSize : 40} color="#1048A0" />

              <Link href="/area-restrita/servicos/formularios" fontWeight="700">
                Formulários
              </Link>
            </VStack>
          </VStack>
        ) : (
          ''
        )}
      </Flex>
    </Container>
  );
};

export default Services;
