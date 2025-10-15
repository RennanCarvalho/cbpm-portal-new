import {
  Box,
  Button,
  Container,
  Center,
  Flex,
  Slide,
  Text,
} from '@chakra-ui/react';
import { parseCookies, setCookie } from 'nookies';
import { useEffect, useState } from 'react';
import Link from '../Link';

const PrivacyPolicy = () => {
  const [notAccepted, setNotAccepted] = useState<boolean>();

  useEffect(() => {
    // Busca o cook no navegador
    const { privacyPolicy: privacy } = parseCookies();

    // Caso o cook não exista, ativa o política de privacidade
    if (!privacy) {
      setNotAccepted(true);
    }
  }, [notAccepted]);

  // Adiciona o cook de aceite da política de privacidade
  function handlePrivacity() {
    setCookie(undefined, 'privacyPolicy', 'accepted', {
      // Tempo máximo do cook é de 1 ano
      maxAge: 60 * 60 * 24 * 30 * 12,
      path: '/',
    });
    setNotAccepted(false);
  }

  return (
    <Container
      centerContent
      bgColor="gray.default"
      fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
    >
      <Slide direction="bottom" in={notAccepted} style={{ zIndex: 10 }}>
        <Flex justify="center">
          <Box
            p="20px"
            color="black.default"
            mt="4"
            bg="gray.default"
            rounded="md"
            shadow="md"
            maxW="1280px"
            w="100%"
          >
            <Text textAlign="left">
              Nós usamos cookies para melhorar sua experiência de navegação no
              portal. Ao utilizar o cbpm.sp.gov.br, você concorda com a política
              de monitoramento de cookies. Para ter mais informações sobre como
              isso é feito, acesse{' '}
              <Link
                href="/pdfs/politica_privacidade.pdf"
                isExternal
                fontWeight="700"
                color="black.default"
              >
                Política de Privacidade
              </Link>
              . Se você concorda, clique em ACEITO.
            </Text>

            <Center>
              <Button
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                bg="blue.default"
                color="white.default"
                mt={4}
                px={{ base: 7, sm: 7, md: 8, lg: 10 }}
                py={5}
                borderRadius="3xl"
                _hover={{ bgColor: 'none', color: 'none' }}
                onClick={handlePrivacity}
              >
                Aceito
              </Button>
            </Center>
          </Box>
        </Flex>
      </Slide>
    </Container>
  );
};

export default PrivacyPolicy;
