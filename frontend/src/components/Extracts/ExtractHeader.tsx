import { Box, Container, Flex, Img, VStack } from '@chakra-ui/react';

export const ExtractHeader = () => {
  return (
    <Container centerContent mt="30px" mb="30px" maxW="1280px" w="100%">
      <Flex
        justify={{
          base: 'center',
          sm: 'center',
          md: 'space-between',
          lg: 'space-between',
        }}
        align="center"
        w="100%"
      >
        <Box display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}>
          <Img
            src="/logos/sp_logo.png"
            boxSize="150px"
            objectFit="fill"
            alt="Logo de São Paulo"
          />
        </Box>

        <VStack
          spacing="1rem"
          fontWeight="700"
          textAlign="center"
          fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
        >
          <p>
            GOVERNO DO ESTADO DE SÃO PAULO <br /> SECRETARIA DE SEGURANÇA
            PÚBLICA
          </p>

          <p>
            CAIXA BENEFICENTE DA POLÍCIA MILITAR DO ESTADO <br />
            SUPERINTENDÊNCIA
          </p>
        </VStack>

        <Box display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}>
          <Img
            src="/logos/cbpm_logo.png"
            boxSize="150px"
            objectFit="fill"
            alt="Logo CBPM"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default ExtractHeader;
