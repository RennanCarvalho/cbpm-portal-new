import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export const FormTable = () => {
  return (
    <Table w="100%" textAlign="center">
      <Thead>
        <Tr>
          <Th>PROCEDIMENTO</Th>
          <Th>DATA</Th>
          <Th>NOME</Th>
          <Th>RUBRICA</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Atualizado por</Td>
          <Td>_____/_____/_____</Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>Conferido por</Td>
          <Td>_____/_____/_____</Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>Digitalizado por</Td>
          <Td>_____/_____/_____</Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>Processo SEI por</Td>
          <Td>_____/_____/_____</Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>Concluído por</Td>
          <Td>_____/_____/_____</Td>
          <Td></Td>
          <Td></Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
