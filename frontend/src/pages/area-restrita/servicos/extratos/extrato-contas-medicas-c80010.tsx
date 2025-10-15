import { Container } from '@chakra-ui/react';
import MedicalExpenseStatementC80010Component from '../../../../components/Extracts/MedicalExpenseStatementC80010';
import Header from '../../../../components/Header/index';
import { AuthProvider } from '../../../../contexts/AuthContext';

const MedicalExpenseStatementC80010 = () => {
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
        <MedicalExpenseStatementC80010Component
          title={'Extrato Contas Médicas Cruz Azul C80010'}
        />
      </Container>
    </AuthProvider>
  );
};

export default MedicalExpenseStatementC80010;
