import {
  Box,
  Img,
  Text,
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from '../Link';
import { Cert } from './Cert';

export const CarouselComponent = () => {
  return (
    <Box position="relative" maxW="1280px" w="100%" height="500px">
      <Cert />
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={20000}
        swipeable={true}
        emulateTouch={true}
        showThumbs={false}
        stopOnHover={true}
      >
        {/* <Link
          href="https://pt.surveymonkey.com/r/caixabeneficiente"
          target="_blank"
          aria-label="Banner para acessar o a pesquisa da Caixa Beneficente sobre a Cruz azul"
        >
        <Box position="relative">
          <Img
            src="/carousel/pesquisa_satisfacao_craz.png"
            alt="Banner sobre pesquisa de satisfação cruz azul"
            />
          </Box>
        </Link> */}
        <Link
          href="/noticias/encontro-rosa-2025"
          target="_blank"
          aria-label="Saiba mais sobre o Recadastramento de Dependentes"
        >
          <Box position="relative">
            <Img
              src="/carousel/banner-encontro-rosa.png"
              alt="Recadastramento de Dependentes"
            />
            <Link
              href="/noticias/encontro-rosa-2025"
              position="absolute"
              color="white.default"
              bgColor="blue.default"
              width={{ base: '80px', sm: '120px', md: '150px', lg: '200px' }}
              h={{ base: '25px', sm: '35px', md: '50px' }}
              p={1}
              right={{ base: '30' }}
              // top="70%"
              top="80%"
              fontWeight="700"
              target="_blank"
            >
              <Text
                whiteSpace="nowrap"
                fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px' }}
                mt={{ sm: '4px', md: '9px' }}
              >
                SAIBA MAIS
              </Text>
            </Link>
          </Box>
        </Link>









          <Box position="relative">
            <Img
              src="/carousel/banner-servicos.jpg"
              alt="banner serviços CBPM"
            />
            <Link
              href="/carousel/servicos-orientacoes.jpg"
              position="absolute"
              color="white.default"
              bgColor="blue.default"
              width={{ base: '80px', sm: '120px', md: '150px', lg: '200px' }}
              h={{ base: '25px', sm: '35px', md: '50px' }}
              p={1}
              right={{ base: '30' }}
              top="76%"
              fontWeight="700"
              target="_blank"
            >
              <Text
                whiteSpace="nowrap"
                fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px' }}
                mt={{ sm: '4px', md: '9px' }}
              >
                SAIBA MAIS
              </Text>
            </Link>
          </Box>



        <Link
          href="/pdfs/recadastramento-de-dependentes.pdf"
          target="_blank"
          aria-label="Saiba mais sobre o Recadastramento de Dependentes"
        >
          <Box position="relative">
            <Img
              src="/carousel/recadastramento-de-dependentes.png"
              alt="Recadastramento de Dependentes"
            />
            <Link
              href="/pdfs/recadastramento-de-dependentes.pdf"
              position="absolute"
              color="white.default"
              bgColor="blue.default"
              width={{ base: '80px', sm: '120px', md: '150px', lg: '200px' }}
              h={{ base: '25px', sm: '35px', md: '50px' }}
              p={1}
              right={{ base: '30' }}
              // top="70%"
              top="76%"
              fontWeight="700"
              target="_blank"
            >
              <Text
                whiteSpace="nowrap"
                fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px' }}
                mt={{ sm: '4px', md: '9px' }}
              >
                SAIBA MAIS
              </Text>
            </Link>
          </Box>
        </Link>

        <Box position="relative">
          <Img
            src="/carousel/novos_servicos_bg.png"
            alt="Imagem destacando novos serviços oferecidos"
          />
          <Link
            href="#"
            position="absolute"
            color="white.default"
            bgColor="blue.default"
            width={{ base: '80px', sm: '120px', md: '150px', lg: '200px' }}
            h={{ base: '25px', sm: '35px', md: '50px' }}
            p={1}
            right={{ base: '30' }}
            top="76%"
            fontWeight="700"
          >
            <Text
              whiteSpace="nowrap"
              fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px' }}
              mt={{ sm: '4px', md: '9px' }}
            >
              <ChakraMenu>
                <MenuButton fontSize="sm" fontWeight="700">
                  SAIBA MAIS
                </MenuButton>

                <MenuList
                  bg="gray.default"
                  border="1px"
                  borderColor="gray.500"
                  fontSize="sm"
                >
                  <MenuItem borderBottom="1px" borderColor="gray.500">
                    <Link
                      w="100%"
                      href="/emissao-de-credencial"
                      color="black.default"
                    >
                      Emissão de Credencial CBPM
                    </Link>
                  </MenuItem>

                  <MenuItem borderBottom="1px" borderColor="gray.500">
                    <Link
                      w="100%"
                      href="/extrato-contas-medicas"
                      color="black.default"
                    >
                      Extrato de Contas Médicas
                    </Link>
                  </MenuItem>

                  <MenuItem borderBottom="1px" borderColor="gray.500">
                    <Link
                      w="100%"
                      href="/formularios-declaracao"
                      color="black.default"
                    >
                      Emissão de Formulários para inclusão de dependentes
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link w="100%" href="/login" color="black.default">
                      Atualização de dados Cadastrais
                    </Link>
                  </MenuItem>

                  <MenuItem borderTop="1px" borderColor="gray.500">
                    <Link w="100%" href="/carencias " color="black.default">
                      Carência (no caso de reinclusão de contribuinte)
                    </Link>
                  </MenuItem>
                </MenuList>
              </ChakraMenu>
            </Text>
          </Link>
        </Box>

        <Box position="relative">
          <Img
            src="/carousel/banner_craz_100_anos.jpg"
            alt="Banner informativo sobre os 100 anos da cruz azul"
          />
        </Box>

        <Box position="relative">
          <Img
            src="/carousel/acessibilidade_1.png"
            alt="Banner informativo sobre acessibilidade do portal CBPM"
          />
        </Box>

        {/* <Box position="relative">
          <Img
            src="/carousel/acessibilidade_2.png"
            alt="Imagem informativa sobre o recadastramento CBPM"
            height="450px"
          />
        </Box> */}

        {/* <Link
          href="/pdfs/recadastramento_para_2025_SPPREV.pdf"
          target="_blank"
          aria-label="SAIBA MAIS - banner para acessar o documento da PORTARIA SPPREV nº 374, DE 13 DE NOVEMBRO DE 2024"
        >
          <Box position="relative">
            <Img
              src="/carousel/aposentado_pensionista_janeiro.png"
              alt="Imagem informativa sobre o recadastramento"
            />

            <Link
              href="/pdfs/censo_previdenciario_2025.pdf"
              position="absolute"
              color="white.default"
              bgColor="blue.default"
              width={{ base: '80px', sm: '120px', md: '150px', lg: '200px' }}
              h={{ base: '25px', sm: '35px', md: '50px' }}
              p={1}
              right={{ base: '30' }}
              // top="70%"
              top="80%"
              fontWeight="700"
              target="_blank"
              aria-label="Saiba mais sobre o Censo Previdenciário 2025"
            >
              <Text
                whiteSpace="nowrap"
                fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px' }}
                mt={{ sm: '4px', md: '9px' }}
              >
                SAIBA MAIS
              </Text>
            </Link>
          </Box>
        </Link> */}

        <Box position="relative">
          <Img src="/carousel/novas-unidades.png" alt="Novas Unidades" />
        </Box>

        {/* <Link href="/pdfs/RedeCredenciadaInteriorELitoral.pdf" target="_blank">
          <Box position="relative">
            <Img
              src="/carousel/RedeCredenciadaInteriorELitoral.png"
              alt="Expansão do atendimento médico-hospitalar"
            />
            <Link
              aria-label="Saiba mais sobre a rede credenciada"
              href="/pdfs/RedeCredenciadaInteriorELitoral.pdf"
              position="absolute"
              color="white.default"
              bgColor="blue.default"
              width={{ base: '80px', sm: '120px', md: '150px', lg: '200px' }}
              h={{ base: '25px', sm: '35px', md: '50px' }}
              p={1}
              right={{ base: '30' }}
              // top="70%"
              top="76%"
              fontWeight="700"
              target="_blank"
            >
              <Text
                whiteSpace="nowrap"
                fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px' }}
                mt={{ sm: '4px', md: '9px' }}
              >
                SAIBA MAIS
              </Text>
            </Link>
          </Box>
        </Link> */}
      </Carousel>
    </Box>
  );
};
