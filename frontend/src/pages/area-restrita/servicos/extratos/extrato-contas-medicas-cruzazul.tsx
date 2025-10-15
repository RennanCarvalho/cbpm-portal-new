import { Container } from '@chakra-ui/react';
import MedicalExpenseStatementComponent from '../../../../components/Extracts/MedicalExpenseStatement';
import Header from '../../../../components/Header/index';
import { AuthProvider } from '../../../../contexts/AuthContext';

const MedicalExpenseStatement = () => {
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
        <MedicalExpenseStatementComponent
          title={'Detalhamento Mensal das Despesas Médicas - Coparticipação'}
        />
      </Container>
    </AuthProvider>
  );
};

export default MedicalExpenseStatement;
