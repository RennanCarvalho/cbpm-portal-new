import {
  Box,
  Container,
  HStack,
  Img,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  VStack,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from '../Link';
import { Cert } from './Cert';
import { VisuallyHidden } from '../Accessibility/VisuallyHidden';

export const Footer = () => {
  return (
    <Container
      maxW="1280px"
      w="100%"
      bgColor="blue.default"
      color="white.default"
    >
      <SimpleGrid
        maxW="1280px"
        w="100%"
        columns={5}
        minChildWidth="240px"
        mt={5}
        spacing={{ base: '30px', sm: '20px', md: '10px' }}
      >
        <VStack align="flex-start" w="240px" fontSize="sm">
          <Text fontWeight="700" size="sm">
            Contato Com a CBPM
          </Text>
          <List spacing={2}>
            <ListItem>
              <Link href="/fale-conosco" color="white.default">
                Fale Conosco
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/posto-atendimento-integrado" color="white.default">
                Posto de Atendimento Integrado
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/duvidas-frequentes" color="white.default">
                Dúvidas Frequentes
              </Link>
            </ListItem>
          </List>
        </VStack>

        <VStack align="flex-start" w="240px" fontSize="sm">
        <Text fontWeight="700" size="sm">
            Assistência Médica
          </Text>
          <List spacing={2}>
            <ListItem>
              <Link href="/assistencia-medico-hospitalar" color="white.default">
                Assistência Médico - Hospitalar
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/contribuicao-mensal" color="white.default">
                Contribuição Mensal
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/contribuintes-e-beneficiarios" color="white.default">
                Contribuintes e Beneficiários Dependentes
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/mutualismo" color="white.default">
                Mutualismo
              </Link>
            </ListItem>
            <ListItem>
              <ChakraLink
                href="https://www.cruzazulsp.com.br/institucional/noticias/"
                color="white.default"
                isExternal
              >
                Artigos de Saúde
              </ChakraLink>
            </ListItem>
            <ListItem>
              <Link href="/atendimento-cbpm-cruz-azul" color="white.default">
                Atendimento pela CBPM / Cruz Azul SP
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/extrato-contas-medicas" color="white.default">
                Extrato de Contas Médicas
              </Link>
            </ListItem>
          </List>
        </VStack>

        <VStack align="flex-start" w="240px" fontSize="sm">
        <Text fontWeight="700" size="sm">
            Serviços
          </Text>
          <List spacing={2}>
            <ListItem>
              <Link href="/emissao-de-credencial" color="white.default">
                Credencial CBPM
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/extrato-contas-medicas" color="white.default">
                Extratos de Contas Médicas
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/formularios-declaracao" color="white.default">
                Formulários
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/area-restrita/servicos/carencias" color="white.default">
                Carências
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/area-restrita/servicos/atualizar-dados" color="white.default">
                Atualização de Dados Cadastrais
              </Link>
            </ListItem>
          </List>
        </VStack>

      <VStack align="flex-start" w="240px" fontSize="sm">
      <Text fontWeight="700" size="sm">Cadastro</Text>
          <List spacing={2}>
            <ListItem>
              <Link href="/formularios-declaracao" color="white.default">Formulários</Link>
            </ListItem>
            <ListItem>
              <Link href="/emissao-de-credencial" color="white.default">Emissão de Credencial</Link>
            </ListItem>
            <ListItem>
              <Link href="/orientacao-novos-policiais" color="white.default">Orientação para Novos Policiais</Link>
            </ListItem>
            <ListItem>
              <Link href="/reinclusao-administrativa" color="white.default">Reinclusão Administrativa</Link>
            </ListItem>
            <ListItem>
              <Link href="/inclusao-exclusao-beneficiarios" color="white.default">Inclusão e Exclusão de Beneficiários Dependentes</Link>
            </ListItem>
          </List>
        </VStack>

        <VStack align="flex-start" w="240px" fontSize="sm">
        <Text fontWeight="700" size="sm">Benefícios</Text>
          <List spacing={2}>
            <ListItem>
              <Link href="/clube-de-beneficios" color="white.default">Clube de Benefícios</Link>
            </ListItem>
          </List>
        </VStack>
        <Box w="243px">
          <Img
            src="/logos/cbpm_logo.png"
            alt="Logotipo da Caixa Beneficente SP."
            color="white.default"
            htmlWidth="150px"
          />
        </Box>

        <VStack align="flex-start" w="240px">
        <Text fontWeight="700" size="sm">Transparência</Text>
          <List spacing={2}>
            <ListItem>
              <Link href="/fala-sp" color="white.default">Portal Fala.SP</Link>
            </ListItem>
            <ListItem>
              <Link href="/portal-da-transparencia" color="white.default">Portal da Transparência</Link>
            </ListItem>
            <ListItem>
              <Link href="/termo-colaboracao" color="white.default">Termo de Colaboração</Link>
            </ListItem>
            <ListItem>
              <Link href="/termo-de-convenio-cbpm-crecisp" color="white.default">Termo de Convênio e Cooperação Técnica CBPM CRECISP</Link>
            </ListItem>
            <ListItem>
              <Link href="/pdfs/politica_privacidade.pdf" color="white.default" isExternal>Política de Privacidade</Link>
            </ListItem>
          </List>
        </VStack>

        <VStack align="flex-start" w="240px">
        <Text fontWeight="700" size="sm">Institucional</Text>
          <List spacing={2}>
            <ListItem><Link color="white.default" href="/presidencia">Presidência</Link></ListItem>
            <ListItem><Link color="white.default" href="/sobre-a-cbpm">Sobre a CBPM</Link></ListItem>
            <ListItem><Link color="white.default" href="/resumo-historico">Resumo Histórico</Link></ListItem>
            <ListItem><Link color="white.default" href="/video-historico">Vídeo Histórico</Link></ListItem>
            <ListItem><Link color="white.default" href="/medalha">Medalha</Link></ListItem>
            <ListItem><Link color="white.default" href="/marco-regulatorio">Marco Regulatório (Legislação)</Link></ListItem>
            <ListItem><Link color="white.default" href="/artigos">Artigos</Link></ListItem>
            <ListItem><Link color="white.default" href="/noticias">Notícias</Link></ListItem>
          </List>
        </VStack>
        
        <VStack alignItems="flex-start" w="240px">
          <Box>
            <VStack align="flex-start">
              <Text fontWeight="700">Redes Sociais</Text>
            </VStack>

            <HStack align="center" justify="flex-start">
              <ChakraLink
                href="https://www.facebook.com/caixabeneficentesp/"
                isExternal
                color="white.default"
                aria-label="Visite nosso Facebook"
              >
                <FaFacebookSquare fontSize="40px" />
                <VisuallyHidden>Visite nosso Facebook</VisuallyHidden>
              </ChakraLink>

              <ChakraLink
                href="https://www.instagram.com/caixabeneficente_sp/"
                isExternal
                color="white.default"
                aria-label="Visite nosso Instagram"
              >
                <FaInstagram fontSize="40px" />
                <VisuallyHidden>Visite nosso Instagram</VisuallyHidden>
              </ChakraLink>

              <ChakraLink
                href="https://www.youtube.com/@CaixaBeneficente-CBPM/videos"
                isExternal
                color="white.default"
                aria-label="Visite nosso canal no Youtube"
              >
                <FaYoutube fontSize="40px" />
                <VisuallyHidden>Visite nosso canal no Youtube</VisuallyHidden>
              </ChakraLink>
            </HStack>
          </Box>
        </VStack>
        <VStack align="flex-start" w="240px">
        <Text fontWeight="700" size="sm">
            Endereço
          </Text>

          <Text>
            R. Alfredo Maia , 218 – Luz <br />
            São Paulo / S P
          </Text>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0741347858702!2d-46.63122418441164!3d-23.52983586631538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58f4f8edda5f%3A0x2cbc64afb213697b!2sCBPM!5e0!3m2!1sen!2sbr!4v1637816898429!5m2!1sen!2sbr"
            width="240px"
            title="Mapa do Google mostrando a localização da CBPM, Caixa Beneficente da Polícia Militar de São Paulo."
          />
        </VStack>
        </SimpleGrid>
      <Box w="240px" position="relative" pb={16}>
        <Cert topPosition="-40" />
      </Box>      
      <Box>
        <Text>
          Portal de Serviços – Site Institucional CBPM – Versão nº 23.06.28-002
          <br />
          Autorizado por Cel Mônica Puliti Dias Ferreira; por Ten-Cel Rogerio
          Cabral Camargo e Desenvolvido e Implantado pela Equipe T.I AMH CBPM{' '}
          <br />
          Direitos autorais da CBPM – Caixa Beneficente da Polícia Militar do
          Estado de São Paulo
        </Text>
      </Box>
    </Container>
  );
};

export default Footer;
