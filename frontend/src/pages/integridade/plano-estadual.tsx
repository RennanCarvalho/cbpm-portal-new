import { Fragment } from "react";
import Header from "../../components/Header";
import { Box, Button, Center, Container, Heading, HStack, Link, Text } from "@chakra-ui/react";


const StateIntegrityPromotionPlan = () => {
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
          textAlign="center"
          mt={10}
          mb={5}
        >
          PLANO ESTADUAL DE PROMOÇÃO DE INTEGRIDADE
        </Heading>
        <Box>
          <HStack
            mb={2}
            justify={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'flex-start',
            }}
            gap={10}
            flexWrap="wrap"
          >
            <Text>
              O Governo do Estado de São Paulo, por meio do{' '}
              <Link
              target="_blank"
                href={
                  'https://www.al.sp.gov.br/repositorio/legislacao/decreto/2023/decreto-67683-03.05.2023.html'
                }
              >
                Decreto nº 67.683
              </Link>
              , de 3 de maio de 2023, instituiu o Plano Estadual de Promoção de
              Integridade que define as diretrizes e sistematiza ações voltadas
              ao fortalecimento dos mecanismos internos de prevenção de
              irregularidades administrativas, de práticas de corrupção e de
              desvios éticos, promovendo um ambiente de trabalho íntegro no
              âmbito dos órgãos e entidades do Poder Executivo estadual. Para a
              concretização de sua finalidade, o decreto também estabelece que
              os órgãos e entidades da Administração Pública paulista elaborem e
              implementem seus Programas de Integridade.
            </Text>

            <Text>
              O Programa de Integridade é um conjunto estruturado de medidas
              institucionais voltadas para a prevenção, detecção e punição de
              práticas de corrupção, fraudes, irregularidades e desvios éticos e
              de conduta. Instituir um programa de integridade não significa
              lidar com um assunto novo, mas valer-se de temas já conhecidos
              pelas organizações de maneira mais sistematizada.
            </Text>

            <Text>
              A Controladoria Geral do Estado de São Paulo (CGE) é o órgão
              responsável por coordenar e disciplinar as atividades relacionadas
              à promoção da integridade pública. Além disso, atua em diversas
              frentes para cumprir essa competência, fazendo a interlocução com
              os órgãos, promovendo capacitações, publicando material
              informativo e normativos referentes ao assunto.
            </Text>

            <Link href="/integridade/pdfs/manual-plano-estadual-de-promocao-de-integridade.pdf" target='_blank'>
            <Button
              type="submit"
              bg="blue.default"
              borderRadius="3xl"
              color="white.default"
              alignSelf="center"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              _hover={{ color: 'none' }}
            >
              Para saber mais, acesse o Manual do Plano Estadual de Promoção de Integridade
            </Button>
              
                
            </Link>
            <Center w="100%" mt={10}>
          <Link href="/integridade">
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
          </HStack>
        </Box>
      </Container>
    </Fragment>
  );
};

export default StateIntegrityPromotionPlan;
