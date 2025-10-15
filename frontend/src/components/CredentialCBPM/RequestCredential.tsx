import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { Fragment, useState } from 'react';
import { setupAPIClient } from '../../services/setupAPIClient';

const RequestCredential = (credentialData: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [close, setClose] = useState<any>(onClose);

  const api = setupAPIClient();

  const toast = useToast();

  const { ID: id } = credentialData;
  const payload = { id };

  async function requestCredencial(payload: any): Promise<any> {
    try {
      await api.post('/user/request-credential', payload);

      toast({
        title: 'Confirmação de Envio',
        description:
          'Confirmamos o envio de mensagens através do Portal "Solicitar Credencial"',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });

      setClose(onClose);
    } catch (error: any) {
      toast({
        description: 'Ocorreu um erro inesperado. Tente novamente mais tarde',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  }

  return (
    <Fragment>
      <Button onClick={onOpen}>Solicitar Credencial para envio pelo correio</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={{ base: 'lg', sm: 'lg', md: 'xl', lg: 'xl' }}>
            Solicitar Credencial
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}>
            Antes de confirmação a solicitação, por favor certifique-se que os
            dados cadastrais estão atualizados.
          </ModalBody>

          <ModalFooter>
            <Button
              bg="blue.default"
              color="white.default"
              mr={3}
              onClick={() => setClose(onClose)}
            >
              Fechar
            </Button>
            <Button variant="ghost" onClick={() => requestCredencial(payload)}>
              Confirmar Solicitação
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default RequestCredential;
