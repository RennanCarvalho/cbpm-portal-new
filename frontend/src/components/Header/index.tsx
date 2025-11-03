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
  Img
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
        <HStack width="100%" justifyContent={"space-between"}>
          <Img src='/'></Img>
          <Login />
        </HStack>
      </Container>
    </Fragment>
  );
};

export default Header;

