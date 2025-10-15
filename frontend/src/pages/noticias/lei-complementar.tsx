import {
  Button,
  Center,
  Container,
  Heading,
  Link as ChakraLink,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';

const ComplementaryLaw = () => {
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
        fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
      >
        <Heading
          as="h1"
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          color="blue.default"
          textAlign="left"
          mt={10}
          mb={5}
        >
          LEI COMPLEMENTAR Nº 1.353, DE 10-01-2020
        </Heading>

        <Text mb={2}>
          Aprovada nova lei que permite equilibrar financeiramente a assistência
          à saúde dos beneficiários dependentes da CBPM.
        </Text>

        <VStack align="flex-start" justify="flex-start" mb={10}>
          <VStack>
            <Text fontWeight="700" alignSelf="flex-start">
              Principais mudanças nos dispositivos da Lei nº 452/74:
            </Text>
          </VStack>

          <UnorderedList pl={10}>
            <ListItem>
              Ampliação no rol de beneficiários dependentes, incluindo os
              menores sob guarda judicial, tutela e curatela, além de não haver
              a necessidade do requisito temporal ou filho em comum para
              inclusão de companheiro(a).
            </ListItem>

            <ListItem>
              Novos serviços de assistência odontológica e psicológica para
              contribuintes, respectivos beneficiários dependentes e
              funcionários da CBPM, mediante adesão facultativa.
            </ListItem>

            <ListItem>
              Regulamentação de ferramenta de equilíbrio econômico, financeiro e
              atuarial do regime, o que dará maior sustentabilidade para a
              assistência à saúde.
            </ListItem>

            <ListItem>
              Possibilidade de reingresso no regime assistencial, via processo
              administrativo e cumprimento de prazos de carência: 24 horas para
              urgências e emergências, 24 meses para doenças e lesões
              preexistentes, 300 dias para partos a termo e 180 dias para os
              demais casos.
            </ListItem>
          </UnorderedList>

          <Text pt={5}>
            <ChakraLink
              href="https://www.al.sp.gov.br/norma/?id=192880"
              isExternal
              fontWeight="700"
            >
              Clique aqui para acesso de todos os textos completos da Lei.
            </ChakraLink>            
          </Text>
        </VStack>

        <Center w="100%" p={10}>
          <Link href="/noticias">
            <Button
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              bg="blue.default"
              color="white.default"
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              borderRadius="3xl"
              isFullWidth
              _hover={{ color: 'none' }}
            >
              Voltar
            </Button>
          </Link>
        </Center>
      </Container>
    </Fragment>
  );
};

export default ComplementaryLaw;
