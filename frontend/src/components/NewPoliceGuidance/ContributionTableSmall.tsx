import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Fragment } from 'react';

const ContributionTableSmall = () => {
  return (
    <Fragment>
      <Table size="sm" variant="simple" w="100%">
        <Thead>
          <Tr>
            <Th>CBPM: contribuição média para a assistência da família</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>R$ 126/mês</Td>
          </Tr>
        </Tbody>
      </Table>

      <Table size="sm" variant="simple" maxW="600px" w="100%">
        <Thead>
          <Tr>
            <Th>Plano privado 1: atendimento de 1 adulto e 2</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>R$ 900/mês</Td>
          </Tr>
        </Tbody>
      </Table>

      <Table size="sm" variant="simple" maxW="600px" w="100%">
        <Thead>
          <Tr>
            <Th>Plano privado 2: atendimento de 1 adulto e 2 ﬁlhos</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>R$ 1100/mês</Td>
          </Tr>
        </Tbody>
      </Table>
    </Fragment>
  );
};

export default ContributionTableSmall;
