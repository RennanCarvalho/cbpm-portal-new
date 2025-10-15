import { Fragment } from 'react';
import Header from '../../components/Header';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Img,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaFilm, FaInfoCircle, FaRegFileAlt, FaVideo } from 'react-icons/fa';

const IntegrityCampaign = () => {
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
          Campanha de Integridade - CBPM
        </Heading>
        <Box>
          <HStack
            mb={3}
            justify={'center'}
            flexWrap="wrap"
            gap={'10px'}
          >
            <Flex
              border="1px"
              borderColor="blue.default"
              boxSizing='border-box'
              // p={5}
              w={"400px"}
              h={"100%"}
              borderRadius="2xl"
              // spacing="22px"
              align="flex-start"
              flexDirection={"column"}
              padding={0}
            >
              <Img alt="banner representando assédio moral com título" filter="brightness(0.7) contrast(150%);" borderRadius="2xl" borderBottomRadius={"0"} objectFit="cover" src="/integridade/imgs/banner-informativo-assedio.png" height="190px" width="448px"/> 
              
              <Flex alignContent="left" flexDirection={"column"}gap="15px" padding="15px" height={"450px"}>
                
                <Link isExternal href='https://www.controladoriageral.sp.gov.br/cge'><Button borderRadius="3xl" bg="blue.clear" color="blue.default">CGE-SP</Button></Link>
                <Text fontWeight="bold" fontSize="19px" height={"60px"}>Prevenção e combate ao assédio moral</Text>
                <Text>Estes documentos abordam prevenção e combate ao assédio moral no setor público de São Paulo, explicando o que configura o assédio, seus tipos e os procedimentos adequados para denúncia.</Text>
                <Text fontWeight="bold" fontSize="17px" height={"50px"}>Saiba mais clicando nas opções abaixo:</Text>
                <HStack>
                  <Link isExternal href='/integridade/pdfs/cartilha-assedio.pdf'><Button w="100%" borderRadius="md" bg="green.800" color="white.default" display={'flex'} gap="5px"><FaRegFileAlt /> Cartilha</Button></Link>
                  <Link isExternal href='/integridade/pdfs/sobre-assedio.pdf'><Button w="100%" borderRadius="md" bg="green.500" color="white.default" display={'flex'} gap="5px"><FaInfoCircle /> Sobre</Button></Link>
                  <Link isExternal href='https://www.youtube.com/watch?v=Rn4GECsY_xM'><Button w="100%" borderRadius="md" bg="blue.crystal" color="white.default" display={'flex'} gap="5px"><FaFilm /> Vídeo</Button></Link>
                </HStack>

              </Flex>

            </Flex>

            <Flex
              border="1px"
              borderColor="blue.default"
              boxSizing='border-box'
              // p={5}
              w={"400px"}
              borderRadius="2xl"
              // spacing="22px"
              align="flex-start"
              flexDirection={"column"}
              padding={0}
            >
              <Img alt="banner representando assédio sexual com título" filter="brightness(0.7) contrast(150%);" borderRadius="2xl" borderBottomRadius={"0"} objectFit="cover" src="/integridade/imgs/banner-informativo-assedio-2.png" height="190px" width="448px"/> 
              
              <Flex alignContent="left" flexDirection={"column"}gap="15px" padding="15px" height={"450px"}>
                
                <Link isExternal href='https://www.controladoriageral.sp.gov.br/cge'><Button borderRadius="3xl" bg="blue.clear" color="blue.default">CGE-SP</Button></Link>
                <Text fontWeight="bold" fontSize="20px"  height={"60px"}>Prevenção e combate ao assédio sexual</Text>
                <Text>Estes documentos abordam prevenção e combate ao assédio sexual no setor público de São Paulo, explicando o que configura o assédio, seus tipos e os procedimentos adequados para denúncia.</Text>
                <Text fontWeight="bold" fontSize="17px" height={"50px"}>Saiba mais clicando nas opções abaixo:</Text>
                <HStack>
                  <Link isExternal w="30%" href='/integridade/pdfs/guia-de-enfrentamento-ao-assedio-sexual.pdf'><Button w="100%" borderRadius="md" bg="green.800" color="white.default" display={'flex'} gap="5px"><FaRegFileAlt /> Guia</Button></Link>
                  <Link isExternal w="30%" href='https://www.youtube.com/watch?v=hH1VSoe7kic'><Button w="100%" borderRadius="md" bg="blue.crystal" color="white.default" display={'flex'} gap="5px"><FaFilm /> Vídeo</Button></Link>
                </HStack>

              </Flex>

            </Flex>

            <Flex
              border="1px"
              borderColor="blue.default"
              boxSizing='border-box'
              // p={5}
              w={"400px"}
              h={"100%"}
              borderRadius="2xl"
              // spacing="22px"
              align="flex-start"
              flexDirection={"column"}
              padding={0}
            >
              <Img alt="banner com título - Contra a Corrupção" filter="brightness(0.7) contrast(150%);" borderRadius="2xl" borderBottomRadius={"0"} objectFit="cover" src="/integridade/imgs/banner-contra-corrupcao.png" height="190px" width="448px"/> 
              
              <Flex alignContent="left" flexDirection={"column"}gap="15px" padding="15px" height={"450px"}>
                
                <Link isExternal href='https://www.educacaofiscal.sp.gov.br/'><Button borderRadius="3xl" bg="blue.clear" color="blue.default">GEFESP</Button></Link>
                <Text fontWeight="bold" fontSize="20px"  height={"60px"}>Contra a Corrupção</Text>
                <Text>A criação do programa cumpre compromisso assumido pelo Governo do Estado para oferecer mais integridade e transparência à gestão estadual e criar diretrizes permanentes de compliance para a administração paulista.</Text>
                <Text fontWeight="bold" fontSize="17px" height={"50px"}>Assista aos vídeos clicando nas opções abaixo:</Text>

                <Box height={"90px"}>
                <HStack marginBottom={"4px"}>
                  <Link isExternal href='https://www.youtube.com/shorts/562nkwBLbbs'><Button borderRadius="md" bg="blue.crystal" color="white.default" display={'flex'} gap="5px"><FaFilm /> Parte 1</Button></Link>
                  <Link isExternal href='https://www.youtube.com/shorts/73P6Tqv8_Sc'><Button borderRadius="md" bg="blue.crystal" color="white.default" display={'flex'} gap="5px"><FaFilm /> Parte 2</Button></Link>
                  <Link isExternal href='https://www.youtube.com/shorts/q5oDg0Z3tMk'><Button borderRadius="md" bg="blue.crystal" color="white.default" display={'flex'} gap="5px"><FaFilm /> Parte 3</Button></Link>
                </HStack>
                <HStack>
                  <Link isExternal href='https://www.youtube.com/shorts/x-0evUCG6Qg'><Button borderRadius="md" bg="blue.crystal" color="white.default" display={'flex'} gap="5px"><FaFilm /> Parte 4</Button></Link>
                  <Link isExternal href='https://www.youtube.com/shorts/EaJc87x22yM'><Button borderRadius="md" bg="blue.crystal" color="white.default" display={'flex'} gap="5px"><FaFilm /> Parte 5</Button></Link>
                </HStack>
                </Box>
                

              </Flex>

            </Flex>

<Flex
              border="1px"
              borderColor="blue.default"
              boxSizing='border-box'
              // p={5}
              w={"400px"}
              h={"100%"}
              borderRadius="2xl"
              // spacing="22px"
              align="flex-start"
              flexDirection={"column"}
              padding={0}
            >
              <Img alt="banner com título - Código de Ética" filter="brightness(0.7) contrast(150%);" borderRadius="2xl" borderBottomRadius={"0"} objectFit="cover" src="/integridade/imgs/banner-codigo-de-etica.png" height="190px" width="448px"/> 
              
              <Flex alignContent="left" flexDirection={"column"}gap="15px" padding="15px" height={"450px"}>
                
                <Link isExternal href='https://www.controladoriageral.sp.gov.br/cge'><Button borderRadius="3xl" bg="blue.clear" color="blue.default">CGE-SP</Button></Link>
                <Text fontWeight="bold" fontSize="20px"  height={"60px"}>Ética da Administração Pública</Text>
                <Text>O novo decreto estabelece diretrizes permanentes para a conduta dos agentes públicos, reforçando os princípios éticos na administração direta e autárquica.</Text>
                <Text fontWeight="bold" fontSize="17px" height={"50px"}>Saiba mais clicando nas opções abaixo:</Text>

                <SimpleGrid columns={2} spacing={1}>
                  <Link isExternal href='https://www.al.sp.gov.br/repositorio/legislacao/decreto/2025/decreto-69328-22.01.2025.html'><Button w='100%' borderRadius="md" bg="green.800" color="white.default" display={'flex'} gap="5px">Decreto nº 69.328</Button></Link>
                  <Link isExternal href='/integridade/pdfs/codigo-etica-decreto.pdf'><Button w='100%' borderRadius="md" bg="green.800" color="white.default" display={'flex'} gap="5px">Decreto nº 69.328</Button></Link>
                  <Link isExternal href='/integridade/pdfs/codigo-etica-resolucao.pdf'><Button w='100%' borderRadius="md" bg="green.800" color="white.default" display={'flex'} gap="5px">Resolução nº 08</Button></Link>
                  <Link isExternal href='/integridade/pdfs/plano-integridade.pdf'><Button w='100%' borderRadius="md" bg="green.800" color="white.default" display={'flex'} gap="5px">Plano Integridade</Button></Link>
                  <Link isExternal href='/integridade/pdfs/codigo-etica-autarquia.pdf'><Button w='100%' borderRadius="md" bg="green.800" color="white.default" display={'flex'} gap="5px">Código de Ética</Button></Link>
                  <Link isExternal href='/integridade/codigo-etica-autarquia.mp4'><Button w='100%' borderRadius="md" bg="blue.crystal" color="white.default" display={'flex'} gap="5px">Vídeo</Button></Link>
                </SimpleGrid>
                

              </Flex>

            </Flex>

</HStack>



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
        </Box>
      </Container>
    </Fragment>
  );
};

export default IntegrityCampaign;
