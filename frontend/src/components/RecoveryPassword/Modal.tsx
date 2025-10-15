import {
  Box,
  Button,
  HStack,
  Image,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

type Toggle = {
  toggle: boolean;
};

export const Modal = ({ toggle }: Toggle) => {
  const { onClose } = useDisclosure();

  const router = useRouter();

  return (
    <Fragment>
      <ChakraModal onClose={onClose} isOpen={toggle ? true : false} isCentered>
        <ModalOverlay />
        <ModalContent
          p={5}
          borderColor="black.default"
          border="7px"
          borderRadius="2xl"
        >
          <HStack justify="center">
            <Box
              w="60px"
              h="60px"
              display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
            >
              <Image src="/logos/cbpm_logo.png" alt="Logo CBPM" />
            </Box>

            <ModalHeader whiteSpace="nowrap">Confirmação de Envio</ModalHeader>
          </HStack>

          <ModalCloseButton onClick={() => router.push('/login')} />

          <ModalBody mt={10}>
            <Text
              textAlign="center"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
            >
              Confirmamos o envio de mensagens através do Portal
              &quot;Recuperação de Senha&quot;
            </Text>
          </ModalBody>

          <ModalFooter m="0 auto">
            <Button
              onClick={() => router.push('/login')}
              w="250px"
              bgColor="blue.default"
              color="white.default"
              borderRadius="2xl"
              _hover={{ bgColor: 'blue.default' }}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </Fragment>
  );
};
