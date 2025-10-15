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
import { setupAPIClient } from '../../services/setupAPIClient';

type Toggle = {
  toggle: boolean;
  email: string;
  type: string;
};

export const Modal = ({ toggle, email, type }: Toggle) => {
  const { onClose } = useDisclosure();

  const api = setupAPIClient();

  async function resendEmail(email: string): Promise<void> {
    await api.post(`/resendEmail/${email}`);
  }

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

            <ModalHeader whiteSpace="nowrap">
              Confirmação de Cadastro
            </ModalHeader>
          </HStack>

          <ModalCloseButton onClick={() => router.push('/login')} />

          <ModalBody mt={10}>
            {type === 'pendente' ? (
              <Text fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}>
                Nós enviamos um e-mail para você fazer a confirmação da sua
                conta. Se não encontrar na sua caixa de entrada, procure também
                na sua caixa de spam. Esse e-mail tem a válidade de{' '}
                <strong>1 dia</strong>
              </Text>
            ) : (
              <Text fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}>
                Cadastro com chave realizado com sucesso, sua conta já está ativa e
                disponível para acesso.
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            {type === 'pendente' ? (
              <Button
                w="250px"
                bgColor="blue.default"
                color="white.default"
                borderRadius="2xl"
                _hover={{ bgColor: 'blue.default' }}
                onClick={() => resendEmail(email)}
              >
                Reenviar e-mail
              </Button>
            ) : (
              <Button
                w="250px"
                bgColor="blue.default"
                color="white.default"
                borderRadius="2xl"
                _hover={{ bgColor: 'blue.default' }}
                onClick={() => router.push('/login')}
              >
                Ir para login
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </Fragment>
  );
};
