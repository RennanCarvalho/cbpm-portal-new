import {
  Button,
  Center,
  Container,
  Heading,
  Img,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';

const Realtors = () => {
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
          CORRETORES AVALIARÃO IMÓVEIS DA CAIXA BENEFICENTE DA PM
        </Heading>

        <Center w="100%">
          <Img src="/noticias/corretores/noticia_corretores_jornal.jpg" alt='imagem sobre noticia corretores jornal'/>
        </Center>

        <VStack align="flex-start" mt={5} mb={5}>
          <Text mb={2} fontWeight="700">
            Matéria publicada no jornal O Estado de S. Paulo em 25/09/2021
          </Text>

          <Text>
            A Caixa Beneficente da Polícia Militar (CBPM) é uma instituição
            criada em 1905, vinculada à Secretaria de Segurança Pública do
            Estado de São Paulo, com a principal função de assegurar a
            Assistência Médico - Hospitalar e odontológica aos policiais
            militares e seus beneficiários dependentes, por meio de um termo de
            colaboração assinado com a Cruz Azul.
          </Text>

          <Text>
            Sendo uma autarquia pública, a CBPM tem por obrigação a prestação de
            contas ao Tribunal de Contas do Estado de SP, apresentando com total
            transparência os recursos provenientes dos descontos dos vencimentos
            dos policiais, assim como os oriundos de locações de seu patrimônio
            imobiliário.
          </Text>

          <Text>
            Por essa razão, o Superintendente da instituição, Cel. Paulo Marino
            Lopes, celebrou com muita satisfação o acordo de cooperação técnica
            entre a CBPM e o CRECISP, no último dia 22 de setembro. Por meio
            dessa parceria, a Caixa poderá contar com a avaliação adequada de
            seus imóveis, feita por corretores membros do Grupo de Avaliadores
            Mercadológicos do CRECISP, especialmente em momentos de renovação de
            contratos de aluguel.
          </Text>

          <Text>
            Segundo o Superintendente, é de suma importância que essas
            propriedades estejam em linha com o valor de mercado, haja vista que
            os valores recebidos com essas locações integram um percentual
            significativo das receitas da entidade. “O convênio com o CRECISP
            traz segurança às avaliações e reitera a importância dessa prestação
            de serviços a toda a sociedade”, comentou o coronel.
          </Text>

          <Text>
            Para o presidente do CRECISP, José Augusto Viana Neto, a parceria
            resgata a real função social dos órgãos públicos que é a de
            desenvolverem ações em benefício da comunidade. “Nossos conveniados
            incluem instituições como o Tribunal de Justiça, o Tribunal Regional
            do Trabalho, e diversas prefeituras. São cerca de 2 mil corretores
            que integram o grupo e que já elaboraram mais de 1.300 avaliações.”
          </Text>

          <Text>
            O termo de cooperação foi assinado pelo superintendente da Caixa e
            por Viana, na sede da CBPM, com a presença dos coronéis Joviano Lima
            e José Paulo Meneguzzi, da tenente-coronel Luciane Soraya Dias, do
            diretor secretário do Conselho Federal de Corretores de Imóveis,
            Sérgio Sobral, e do assessor de Relações Institucionais do Conselho,
            Mardiros Marcos Burunsizian.
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

export default Realtors;
