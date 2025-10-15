import {
  Button,
  Center,
  Container,
  Heading,
  Img,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';

const PharmacyBenefit = () => {
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
          textAlign="justify"
          
          mt={10}
          mb={5}
        >
          <Text>Sua Opinião é Fundamental – Participe da Pesquisa de Satisfação CBPM</Text>
        </Heading>

        <Text mb={10}
        textAlign="justify">
        Prezados beneficiários e pensionista da Caixa Beneficente da Polícia Militar do Estado, estamos comprometidos em oferecer serviços de excelência para atender às suas necessidades. Como parte desse compromisso, A CBPM está conduzindo uma pesquisa de satisfação para entender melhor como podemos melhorar ainda mais o atendimento.
          <br /><br />Sua participação é de extrema importância para nós. Queremos ouvir sua opinião e suas sugestões para que possamos continuar aprimorando os serviços de acordo com suas expectativas.
          <br /><br />Para acessar a pesquisa, clique no link abaixo ou escaneie o QR CODE fornecido: <b><Link href="https://pesquisa-cbpm.global3.com.br/">https://pesquisa-cbpm.global3.com.br/</Link></b>
          <br /><br />Você recebera um e-mail através do Remetente: <b>Pesquisa-cbpm@cbpm-pesquisa.global3.com.br</b>, com o link para responder a pesquisa que está sendo realizada pela empresa Global 3 Soluções e Pesquisas, especializada em coletar pesquisas de opinião.
          <br /><br />Caso não receba o e-mail acesse a pelo QRCode ou acesse o link: <b><Link href="https://form.jotform.com/241303675306653">https://form.jotform.com/241303675306653</Link></b>.
          <br /><br />Em caso de dúvidas entre em contato conosco pelo e-mail: <b>sac@cbpm.sp.gov.br</b>
        </Text>
        <Text mb={2}
          fontSize={{ base: '2xl', sm: '1xl', md: '1xl' }}
          textAlign="left"><Link href="https://pesquisa-cbpm.global3.com.br/" target="_blank">
            <b><u>Se você estiver disposto(a) a participar, clique no link ou acesse o QR Code:</u></b>
            </Link>
            </Text>

        <Center w="15%">
        <Link href="https://pesquisa-cbpm.global3.com.br/" target="_blank">
          <Img src="/noticias/pesquisa-satisfacao/qr-code.png" alt='qr code para pesquisa de satisfação'/>
          <VisuallyHidden>acesso a pesquisa cbpm</VisuallyHidden>
          </Link>
        </Center>


        {/* <Center w="100%" p={10}>
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
        </Center> */}
      </Container>
    </Fragment>
  );
};

export default PharmacyBenefit;
