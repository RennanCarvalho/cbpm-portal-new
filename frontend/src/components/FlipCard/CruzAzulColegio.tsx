import { Heading, Text, VStack } from '@chakra-ui/react';
import Link from '../Link';

export const CruzAzulColegio = () => {
  return (
    <VStack
      maxW="450px"
      w="100%"
      h="500px"
      bg="#1A80B6"
      color="white.default"
      display="flex"
      flexDir="column"
      justify="center"
      align="center"
      p={5}
    >
      <Heading as="h2" size="md">
        COLÉGIO PM
      </Heading>

<Text>Concessões especiais nas 10 Unidades do Colégio PM:</Text>

<Text>Descontos progressivos de até 40% nas matrículas, para ter acesso consulte a unidade educacional pretendida.</Text>

      {/* <Text>Concessões especiais nas 11 Unidades do Colégio PM:</Text>

      <Text>
        Cobertura assistencial ambulatorial, hospitalar com obstetrícia,
        incluindo pronto atendimento de urgência e emergência.
      </Text>

      <Text>Descontos progressivos de até 40% nas matrículas</Text>

      <Text>Bolsa integral para filhos de policiais falecidos em serviço</Text> */}

      <Text>
        Acesse:{' '}
        <Link
          href="https://www.colegiopm.com.br/"
          isExternal
          color="white.default"
          fontWeight="700"
          wordBreak="break-word"
        >
          https://www.colegiopm.com.br/
        </Link>
      </Text>
    </VStack>
  );
};
