import {
  Box,
  Button,
  Container,
  Heading,
  Img,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from '../Link';

export const News = () => {
  return (
    <Container maxW="1280px" w="100%" centerContent>
      <Link href="noticias">
      <Button
        color="blue.default"
        bg="white.default"
        fontWeight="700"
        border="1px"
        borderRadius="3xl"
        borderColor="blue.default"
        mb="24px"
        alignSelf="flex-end"
      >
        Mais notícias
      </Button></Link>

      <SimpleGrid
        columns={3}
        spacing="20px"
        minChildWidth="350px"
        w="100%"
        justifyItems="center"
        justifyContent="center"
      >


        <VStack w="300px" h="450px" boxShadow="base">
          <Img src="/carousel/imagem-encontro-rosa.jpeg"
          alt="Cerimônia de posse do Cel PM Levi Clemente"
          h={'300px'}
          w={'300px'}/>
          <Box p={3}>
          <Heading
          as={'h2'}
              size="sm"
              fontWeight="700"
              textAlign="center"
              color="blue.default"
            >
              <Link href="/noticias/encontro-rosa-2025">
                 Conscientização e apoio às mulheres no Hospital Cruz Azul
              </Link>
            </Heading>

            <Text p={5} textAlign="left" mt={2}>
             Participe do Encontro Rosa no dia 24 de outubro, às 8h [...]
            </Text>
          </Box>
        </VStack>






        <VStack w="300px" h="450px" boxShadow="base">
          <Img src="/noticias/nova-gestao-cbpm-2023/1.png"
          alt="Cerimônia de posse do Cel PM Levi Clemente"/>
          <Box p={3}>
          <Heading
          as={'h2'}
              size="sm"
              fontWeight="700"
              textAlign="center"
              color="blue.default"
            >
              <Link href="/noticias/nova-gestao-cbpm-2023">
                Nova gestão na Caixa Beneficente da Polícia Militar
              </Link>
            </Heading>

            <Text p={5} textAlign="left" mt={2}>
             No dia 16 de março de 2023, o Cel PM Levi Clemente [...]
            </Text>
          </Box>
        </VStack>

        <VStack w="300px" h="450px" boxShadow="base">
          <Img src="/noticias/corretores/noticia_corretores_pequena.jpg"
          alt="Imagem de evento oficial na sede da Polícia Militar" />
          <Box p={3}>
          <Heading
          as={'h2'}
              size="sm"
              fontWeight="700"
              textAlign="center"
              color="blue.default"
            >
              <Link href="/noticias/corretores-caixa-beneficente">
                Corretores avaliarão imóveis da Caixa Beneficente da PM
              </Link>
            </Heading>

            <Text p={5} textAlign="left" mt={2}>
              Matéria publicada no jornal O Estado de S. Paulo em 25/09/2021 A
              Caixa Beneficente da Polícia Militar (CBPM) é uma instituição
              criada em 1905, vinculada à Secretaria de Segurança Pública [...]
            </Text>
          </Box>
        </VStack>

        {/* <VStack w="300px" h="450px" boxShadow="base">
          <Img src="/noticias/beneficio-farmacia/beneficio_farmacia_pequena.png"
          alt="Profissional de saúde segurando um frasco de medicamento" />
          <Box p={3}>
          <Heading
          as={'h2'}
              size="sm"
              fontWeight="700"
              textAlign="center"
              color="blue.default"
            >
              <Link href="/noticias/beneficio-farmacia">
                Benefício Farmácia
              </Link>
            </Heading>

            <Text p={5} textAlign="left" mt={2}>
              Prezados contribuintes, pensionistas e beneficiários dependentes
              da CBPM, no mês de maio do corrente ano, firmou novos contratos
              com as empresas[...]
            </Text>
          </Box>
        </VStack> */}

      </SimpleGrid>
    </Container>
  );
};
