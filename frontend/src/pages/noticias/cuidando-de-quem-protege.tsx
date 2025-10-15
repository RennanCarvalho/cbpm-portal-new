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
          <Text>O programa <i>Cuidando de Quem Protege</i> busca aprimorar serviços de saúde para dependentes de Policiais Militares do Estado de São Paulo e Pensionistas</Text>
        </Heading>

        <Text mb={2}
          fontSize={{ base: '2xl', sm: '1xl', md: '1xl' }}
          textAlign="center">
          <b><i>Sua Opinião é Fundamental para Aprimorarmos os Serviços de Saúde!</i></b>
          <br /><br />
        </Text>

        <Text mb={10}
        textAlign="justify">
        A Secretaria da Segurança Pública e a Caixa Beneficente da Polícia Militar, em colaboração com o Hospital Sírio Libanês, lançaram o <b><i>“Programa Cuidando de Quem Protege”</i></b> com o objetivo de melhorar significativamente os serviços de saúde oferecidos aos dependentes dos Policiais Militares e pensionistas em toda a região da Capital e do Estado de São Paulo.
          <br /><br />A iniciativa está atualmente em andamento, conduzindo uma pesquisa detalhada para avaliar e aprimorar a oferta e a qualidade dos serviços de saúde disponíveis para essa comunidade tão importante. O programa visa coletar informações essenciais que irão moldar as mudanças necessárias para beneficiar a família policial-militar.
          <br /><br />A participação da comunidade é fundamental para o sucesso deste projeto. Os organizadores solicitam apenas 7 minutos do tempo dos participantes para responderem à pesquisa, que será vital na estruturação das melhorias propostas. Cada resposta contribuirá para o desenvolvimento de um sistema de saúde mais eficaz e acessível para nossos beneficiários.
          <br /><br />Esta é uma oportunidade ímpar para os membros da família policial-militar, em todo Estado, fazerem ouvir suas vozes e influenciarem positivamente a saúde e o bem-estar daqueles que trabalham incansavelmente para garantir a segurança de todos. Todos são encorajados a participar e colaborar com esta importante iniciativa.
          <br /><br /><b>Se você estiver disposto(a) a participar deste projeto, clique no link abaixo ou acesse o QR Code:</b>
        </Text>
        <Text mb={2}
          fontSize={{ base: '2xl', sm: '1xl', md: '1xl' }}
          textAlign="left"><Link href="https://forms.office.com/r/ZCN6Bj7KE3?origin=lprLink" target="_blank">
            <b><u>Acessar formulário</u></b>
            </Link>
            </Text>

        <Center w="15%">
        <Link href="https://forms.office.com/r/ZCN6Bj7KE3?origin=lprLink" target="_blank">
          <Img src="/noticias/cuidando-de-quem-protege/qr-code.png" alt='imagem do qrcode de acesso ao formulário'/>
          <VisuallyHidden>acesso ao formulário</VisuallyHidden>
          </Link>
        </Center>

        <Text textAlign="center">
        <br />
          <b>Agradecemos imensamente a sua participação e contribuição para o sucesso deste programa.</b>
        </Text>
      </Container>
    </Fragment>
  );
};

export default PharmacyBenefit;
