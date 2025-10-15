import { Box, Img } from '@chakra-ui/react';
import Link from '../Link';

export const Logo = () => {
  return (
    <Box w="265px" minW="220px" h="60px" minH="50px">
      <Link href="/">
        <Img src="/logos/cover.png" alt="Logo CBPM" w="100%"/>
      </Link>
    </Box>
  );
};
