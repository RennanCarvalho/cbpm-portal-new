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
      <Container maxW="container.xl" centerContent>
        <HStack
          w={'100%'}
          height={'196px'}
          p={'30px 52px'}
          justifyContent={'space-between'}
        >
          <HStack>
            <Link
              href={`${
                process.env.NEXT_PUBLIC_HOME || 'https://www.cbpm.sp.gov.br/'
              }`}
            >
              <Img src="/logos/logo-main.png" h={'136px'} />
            </Link>
            <Text paddingLeft={'22px'} fontFamily={'Rawline, sans-serif'} m='0' color={'#333'}>
              Caixa Beneficente da
              <br />
              <strong>Polícia Militar do Estado de São Paulo</strong>
            </Text>
          </HStack>
          <Img src="/logos/logo-gov.png" padding='0 20px'/>
        </HStack>
        <Login />
      </Container>
    </Fragment>
  );
};

export default Header;
