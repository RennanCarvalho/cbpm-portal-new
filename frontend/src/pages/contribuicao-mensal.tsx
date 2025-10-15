import { Box, Container, Heading, HStack, Img, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';
import Header from '../components/Header';

const MonthlyContribution = () => {
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
          CONTRIBUIÇÃO MENSAL
        </Heading>

        <Text mb={2}>
          Os serviços prestados pela CBPM e Cruz Azul SP não constituem plano de
          saúde, mas benefício regido por legislação específica (Lei n° 452, de
          02 de outubro de 1974). Bem por isso as contribuições mensais dos
          policiais militares (ativos e inativos) e pensionistas estão
          diretamente ligadas à sustentabilidade do regime assistencial, visando
          manter o equilíbrio financeiros entre a receita arrecadada e as
          despesas geradas pelos beneciários.
        </Text>

        <Box
          maxW="450px"
          w="100%"
          h={{ sm: '230px', md: '270px', lg: '300px' }}
          float={{ md: 'none', lg: 'right' }}
        >
          <Img src="/cbpm_interno.jpg" h="100%" alt='imagem da galeria dos fundadores da CBPM'/>
        </Box>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>
            Taxa de contribuição baseada em percentual fixo dos vencimentos dos
            contribuintes (2% da retribuição-base para policiais militares e 1%
            da pensão para pensionistas).
          </Text>
        </HStack>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>
            Essa contribuição mensal é recolhida diretamente à CBPM e utilizada,
            exclusivamente, nas despesas do regime de Assistência Médico -
            Hospitalar.
          </Text>
        </HStack>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>
            Não há acréscimo periódico em razão da quantidade de beneficiários
            dependentes atendidos, nem das respectivas faixas etárias.
          </Text>
        </HStack>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>Não há correção anual referente à inﬂação.</Text>
        </HStack>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>Não há reajuste decorrente de sinistralidade.</Text>
        </HStack>

        <HStack mb={2}>
          <Box>
            <FaRegHandPointRight size="30px" />
          </Box>

          <Text>
            Para ser habilitado no atendimento Assistência Médico - Hospitalar,
            é necessário o cadastramento Junto a CBPM.
          </Text>
        </HStack>

        <Text>
          O valor médio de contribuição gira em torno de R$ 126,00/mês para a
          assistência da família. Nos planos de saúde privados paga-se valores
          muito superiores, e por vezes individualizados, ao da contribuição
          média supra citada.
        </Text>
      </Container>
    </Fragment>
  );
};

export default MonthlyContribution;
