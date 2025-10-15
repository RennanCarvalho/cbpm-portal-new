import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { formatDate } from '../../utils/formatDate';
import { formatMoney } from '../../utils/formatMoney';
import ExtractHeader from './ExtractHeader';

export const MedicalExpenseStatementC800TableData = (props: any): any => {
  return (
    <Box w="100%">
      <ExtractHeader />

      <Box overflowX="scroll">
        <Table
          variant="simple"
          size="sm"
          mt={10}
          mb={10}
          maxW="1280px"
          w="100%"
        >
          <Thead>
            <Tr whiteSpace="nowrap">
              <Th>ATENDIMENTO</Th>
              <Th>FATURA</Th>
              <Th>NOME PACIENTE</Th>
              <Th>DESCRIÇÃO DO PROCEDIMENTO</Th>
              <Th>QUANTIDADE</Th>
              <Th>VALOR</Th>
              <Th>RESSARCIMENTO</Th>
            </Tr>
          </Thead>

          <Tbody>
            {props.data.map((item: any, index: any) => {
              return (
                <Tr key={index}>
                  <Td>{formatDate(item.DataAtendimento)} </Td>
                  <Td>{item.Fatura}</Td>
                  <Td>{item.NomePac}</Td>
                  <Td>{item.Procedimento}</Td>
                  <Td>{item.Quantidade}</Td>
                  <Td>{formatMoney(item.Valor)}</Td>
                  <Td>{formatMoney(item.Ressarcim)}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default MedicalExpenseStatementC800TableData;
