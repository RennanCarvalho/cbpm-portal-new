import {
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  VStack,
  Link,
  Text,
  Img,
  Box,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaBars } from 'react-icons/fa';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Login } from './Login';

const Header = () => {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Fragment>
      <Box
        w={'100%'}
        h="30px"
        display={{ base: 'flex', lg: 'none' }}
        justifyContent={'center'}
        alignItems={'center'}
        background={'#000'}
        boxSizing="border-box"
        // hidden={useBreakpointValue({ base: false, lg: true })}
      >
        <Img src="/logos/logo-gov-branco.png" w="90px" h="12px" />
      </Box>
      <Container maxW="container.xl" centerContent>
        <HStack
          w="100%"
          p={{ base: '20px', lg: '30px 52px' }}
          justifyContent="space-between"
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'center', lg: 'center' }}
          gap={{ base: 6, lg: 0 }}
        >
          <HStack
            spacing={{ base: 4, lg: 6 }}
            alignItems="center"
            justifyContent="center"
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Link
              href={`${
                process.env.NEXT_PUBLIC_HOME || 'https://www.cbpm.sp.gov.br/'
              }`}
            >
              <Img
                src="/logos/logo-main.png"
                // maxH={{ base: '100px', lg: '136px' }}
                h="136px"
                w="164px"
                objectFit="contain"
              />
            </Link>
            <Text
              paddingLeft={{ base: 0, lg: '6px' }}
              fontFamily="Rawline, sans-serif"
              m="0"
              color="#333"
              fontWeight="100"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Caixa Beneficente da

              <Box display={{ base: 'none', lg: 'block' }} h={'0'} w={'0'}><br /></Box>

              <strong> Polícia Militar do Estado de São Paulo</strong>
            </Text>
          </HStack>

          <Img
            src="/logos/logo-gov.png"
            maxH={{ base: '80px', lg: '100px' }}
            w="auto"
            h="auto"
            objectFit="contain"
            p={'0 20px'}
            pt={{ base: 4, lg: 0 }}
            display={{ base: 'none', lg: 'inline-block' }}

          />
        </HStack>

        <Login />
      </Container>
    </Fragment>
  );
};

export default Header;
