import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { formatMoney } from '../../utils/formatMoney';
import { ExtractHeader } from './ExtractHeader';

export const CheckingAccountStatementTableData = (props: any): any => {
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
              <Th>Competência</Th>
              <Th>Saldo Anterior</Th>
              <Th>Gastos do Mês</Th>
              <Th>Débito/Crédito</Th>
              <Th>Contribuição</Th>
              <Th>Limite Desconto</Th>
              <Th>Limite Atualizado</Th>
              <Th>à Descontar</Th>
              <Th>Descontado</Th>
              <Th>Saldo do Mês</Th>
            </Tr>
          </Thead>

          <Tbody>
            {props.data.map((item: any, index: any) => {
              return (
                <Tr key={index}>
                  <Td>
                    {item.MesCompetencia <= 9
                      ? `0${item.MesCompetencia}/${item.AnoCompetencia}`
                      : `${item.MesCompetencia}/${item.AnoCompetencia}`}
                  </Td>
                  <Td>{formatMoney(item.SaldoAnterior)}</Td>
                  <Td>{formatMoney(item.DebitosDoMes)}</Td>
                  <Td>{formatMoney(item.Ajustes)}</Td>
                  <Td>{formatMoney(item.ValorDaContribuicaoParaCBPM)}</Td>
                  <Td>{formatMoney(item.Limite)}</Td>
                  <Td>{formatMoney(item.LimiteAtualizado)}</Td>
                  <Td>{formatMoney(item.ADescontar)}</Td>
                  <Td>{formatMoney(item.jaDescontado)}</Td>
                  <Td>{formatMoney(item.SaldoAtual)}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default CheckingAccountStatementTableData;
