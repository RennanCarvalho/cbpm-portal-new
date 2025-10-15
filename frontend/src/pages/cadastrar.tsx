import { Fragment } from 'react';
import FormCadastro from '../components/FormCadastro';
import Header from '../components/Header/index';
import { Container, Heading, Center, Image, Text } from '@chakra-ui/react';

const Register = () => {
  return (
    <>
      <Header />
      <Container
        maxW="1280px"
        w="100%"
        minH="100vh"
        bgImage="url('/bg_cbpm.png')"
        bgSize="650px 650px"
        bgRepeat="no-repeat"
        bgPosition="top right"
      >
        <Heading
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          as="h1"
          textDecor="underline"
          textAlign="center"
          mt={10}
        >
          ÁREA DE CADASTRO DO USUÁRIO
        </Heading>
        <Text mt={24}>
          Obs: Os campos <strong>CPF</strong>, <strong>RE</strong>,{' '}
          <strong>Data de Nascimento</strong>, <strong>RE/Matrícula</strong>,
          <strong>E-mail</strong>, <strong>Confirmar E-mail</strong> e{' '}
          <strong>Telefone Celular</strong> devem ser os mesmos dados
          cadastrados na CBPM, em caso de dúvidas ou mensagem de Os dados
          informados estão Inconsistentes,entrar em contato com o setor da
          Cadastro-CBPM - Tels: <strong>11 3315-3159</strong> e{' '}
          <strong>3315-3097</strong>
        </Text>
        <Text
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          as="h1"
          textAlign="center"
          fontWeight={'bolder'}
          mt={10}
        >
          SELECIONE SEU PERFIL
        </Text>
        <FormCadastro />
      </Container>
    </>
  );
};

export default Register;
