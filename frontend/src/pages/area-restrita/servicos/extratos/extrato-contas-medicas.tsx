import { Container } from '@chakra-ui/react';
import CheckingAccountStatementComponent from '../../../../components/Extracts/CheckingAccountStatement';
import Header from '../../../../components/Header/index';
import { AuthProvider } from '../../../../contexts/AuthContext';

const CheckingAccountStatement = () => {
  return (
    <AuthProvider>
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
        <CheckingAccountStatementComponent title={'Extrato da Movimentação Financeiro'} />
      </Container>
    </AuthProvider>
  );
};

export default CheckingAccountStatement;
