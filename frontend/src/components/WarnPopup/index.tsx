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
// import Link from '../Link';

const WarnPopup = () => {
  const [notAccepted, setNotAccepted] = useState<boolean>();

  useEffect(() => {
    // Busca o cook no navegador
    const { WarnPopup: warn } = parseCookies();

    // Caso o cook não exista, ativa o política de privacidade
    if (!warn) {
      setNotAccepted(true);
    }
  }, [notAccepted]);

  // Adiciona o cook de aceite da política de privacidade
  function handleWarn() {
    setCookie(undefined, 'WarnPopup', 'accepted', {
      // Tempo máximo do cook é de 1 ano
      maxAge: 3,
      path: '/',
    });
    setNotAccepted(false);
  }

  return (
    <Container
      centerContent
      bgColor="gray.default"
      fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
      alignItems={"center"}

    >
      <Slide in={notAccepted} style={{ zIndex: 10 }}>
        <Flex justify="center">
          <Box
            p="50px"
            color="black.default"
            mt="4"
            bg="lightyellow"
            rounded="md"
            shadow="md"
            maxW="700px"
            w="100%"
            
          >
            <Text textAlign="justify">
            <b>Prezados Srs (as) Contribuintes e Beneficiários CBPM</b>
            <br /><br />Informamos que estamos com problemas técnicos junto a operadora de telefonia impossibilitando o recebimento de ligações
            telefônicas externas ao Serviço de Atendimento ao Cliente – SAC.CBPM, para contato solicitamos a utilização do E-mail: <b><u>cadastro@cbpm.sp.gov.br</u></b>
            <br /><br /> Agradecemos a compreensão e estamos trabalhando para o restabelecimento deste canal de comunicação.
            <br /><br /><b>Superintendência</b>
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
                onClick={handleWarn}
              >
                Ok
              </Button>
            </Center>
          </Box>
        </Flex>
      </Slide>
    </Container>
  );
};

export default WarnPopup;
