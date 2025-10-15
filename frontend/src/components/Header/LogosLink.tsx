import { Box, HStack, Image } from '@chakra-ui/react';
import Link from '../Link';

export const LogosLink = () => {
  return (
    <HStack
      spacing="10px"
      justifyContent="center"
      alignItems="center"
      display={['none', 'none', 'none', 'flex']}
    >
      <Box
        w="35px"
        h="37px"
        border="2px"
        borderColor="blue.500"
        borderRadius="5px"
        // padding="2px"
        position='relative'
      >
        <Link href="http://www.ssp.sp.gov.br/" position='absolute' isExternal>
          <Image src="/logos/sp_logo.png" alt="Logo Cidade de São Paulo" />
        </Link>
      </Box>

      <Box
        w="35px"
        h="37px"
        border="2px"
        borderColor="blue.500"
        borderRadius="5px"
        position='relative'
      >
        <Link href="https://policiamilitar.sp.gov.br" position='absolute' isExternal>
          <Image
            src="/logos/pmsp_logo.png"
            alt="Logo da Policia Militar "
            mr="auto"
            pt="2px"
          />
        </Link>
      </Box>

      <Box
        w="35px"
        h="37px"
        border="2px"
        borderColor="blue.500"
        borderRadius="5px"
        position='relative'
      >
        <Link href="http://www.spprev.sp.gov.br/" position='absolute' isExternal>
          <Image src="/logos/spprev_logo.png" alt="Logo da SPPREV" />
        </Link>
      </Box>

      <Box
        w="35px"
        h="37px"
        border="2px"
        borderColor="blue.500"
        borderRadius="5px"
        // padding="6px"
        position='relative'
      >
        <Link href="https://cruzazulsp.com.br" position='absolute' isExternal>
          <Image
            src="/logos/logo_cruz_azul.jpg"
            alt="Logo da Cruz Azul Saúde"
          />
        </Link>
      </Box>
    </HStack>
  );
};
