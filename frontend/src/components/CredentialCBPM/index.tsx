import { Button, Center, Container, Heading } from '@chakra-ui/react';
import Link from '../Link';
import ContribuinteCredentials from './ContribuinteCredentials';
import DependenteAndPensionistaCredential from './DependenteAndPensionistaCredential';

const CredentialCBPM = (props: any) => {
  return (
    <Container
      maxW="1280px"
      w="100%"
      minH="100vh"
      bgImage="url('/bg_cbpm.png')"
      bgSize="650px 650px"
      bgRepeat="no-repeat"
      bgPosition="top right"
      mb={10}
    >
      <Heading
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
        as="h1"
        textAlign="center"
        whiteSpace="nowrap"
        mt={10}
        mb={10}
      >
        CREDENCIAL CBPM
      </Heading>

      {props.props.category[0].Categoria === 'CONTRIBUINTE' ? (
        <ContribuinteCredentials {...props} />
      ) : (
        <DependenteAndPensionistaCredential {...props} />
      )}

      <Center>
        <Link href="/area-restrita/servicos/" mt={10}>
          <Button
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={{ base: 7, sm: 7, md: 8, lg: 10 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
          >
            Voltar
          </Button>
        </Link>
      </Center>
    </Container>
  );
};

export default CredentialCBPM;
