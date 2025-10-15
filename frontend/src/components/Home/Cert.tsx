import { Box, Image, Link } from '@chakra-ui/react';
import { useState } from 'react';

export const Cert = ({ topPosition }: any) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Box>
      <Link
        position="absolute"
        href="https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=W&v_shortname=CL1&v_search=https://www.cbpm.sp.gov.br/&x=6&y=5"
        isExternal
        zIndex="5"
      >
        <Box w={{ base: '50px', sm: '70px' }}>
          <Image
            w="100%"
            p={2}
            alt="Certificado SSL"
            src="/logos/cert.png"
            onMouseEnter={() => setShow(true)}
            onMouseOut={() => setShow(false)}
          />
        </Box>
      </Link>

      <Box
        position="absolute"
        visibility={show ? 'visible' : 'hidden'}
        left="20"
        zIndex="5"
        top={topPosition}
        w={{ base: '80px', sm: '130px', md: '200px', lg: '250px', xl: '300px' }}
      >
        <Image w="100%" src="/cert.jpg" alt="Certificado SSL" />
      </Box>
    </Box>
  );
};
