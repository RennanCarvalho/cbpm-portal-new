import {
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  VStack,
  Link
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
        <VStack spacing="2rem" w="100%">
          <HStack
            w="100%"
            spacing="20px"
            justify={'space-between'}
            align="center"
          >
            <HStack>
              <Login />
            </HStack>
          </HStack>

          <Flex justify="space-between" w="100%">
            {!isWideVersion && (
              <Button
                as={IconButton}
                aria-label="Abre o menu de navegação"
                icon={<FaBars />}
                variant="outline"
                onClick={onOpen}
              />
            )}
          </Flex>
        </VStack>
      </Container>
      <Divider id="principal" mt="24px" />
    </Fragment>
  );
};

export default Header;
