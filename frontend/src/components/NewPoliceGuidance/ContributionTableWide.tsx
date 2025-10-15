import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const ContributionTableWide = () => {
  return (
    <Table variant="simple" maxW="600px" w="100%">
      <Thead>
        <Tr>
          <Th>CBPM: contribuição média para a assistência da família</Th>
          <Th>Plano privado 1: atendimento de 1 adulto e 2</Th>
          <Th>Plano privado 2: atendimento de 1 adulto e 2 ﬁlhos</Th>
        </Tr>
      </Thead>

      <Tbody>
        <Tr>
          <Td>R$ 126/mês</Td>
          <Td>R$ 900/mês</Td>
          <Td>R$ 1100/mês</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default ContributionTableWide;
