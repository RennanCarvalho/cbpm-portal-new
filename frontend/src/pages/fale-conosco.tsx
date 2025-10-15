import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  Textarea,
  useBreakpointValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactsSmallVersion } from '../components/ContactUs/ContactsSmallVersion';
import { ContactsWideVersion } from '../components/ContactUs/ContactsWideVersion';
import Header from '../components/Header';
import Link from '../components/Link';
import { setupAPIClient } from '../services/setupAPIClient';

const ContactUs = () => {
  const [wideVersion, setWideVersion] = useState<any>();

  const api = setupAPIClient();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  useEffect(() => {
    setWideVersion(isWideVersion);
  }, [isWideVersion]);

  return (
    <Fragment>
      <Header />

      <Container
        maxW="1280px"
        w="100%"
        minH="100vh"
        bgImage="url('/bg_cbpm.png')"
        bgSize="650px 650px"
        bgRepeat="no-repeat"
        bgPosition="top right"
        fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
      >
        <Heading
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          as="h1"
          color="blue.default"
          textAlign="left"
          whiteSpace="nowrap"
          mt={10}
          mb={5}
        >
          FALE CONOSCO
        </Heading>

        <VStack align="flex-start">
          <Text>
            Conﬁra as{' '}
            <Link href="/duvidas-frequentes" fontWeight="700">
              Perguntas Frequentes
            </Link>
          </Text>
          <Text>e veja se sua dúvida já está contemplada.</Text>

          <Text
            fontWeight="700"
            textAlign="center"
            alignSelf="center"
            pt={3}
            pb={5}
          >
            Para receber mais informações, tirar dúvidas ou enviar sugestões,
            <br />
            entre em contato conosco através dos telefones ou formulário abaixo.
            <br />
            Será um prazer atendê-lo!
          </Text>
        </VStack>

        <HStack
          justify="space-between"
          maxW="1280px"
          w="100%"
          mt="30px"
          flexWrap="wrap"
        >
          {wideVersion ? <ContactsWideVersion /> : <ContactsSmallVersion />}

          <Box
            alignSelf="flex-start"
            w={{ sm: '100%', lg: '100%', xl: '500px' }}
            pt="30px"
            pb={5}
          >
          </Box>
        </HStack>
      </Container>
    </Fragment>
  );
};

export default ContactUs;
