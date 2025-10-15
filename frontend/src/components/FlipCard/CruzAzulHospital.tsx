import { Heading, Text, VStack } from '@chakra-ui/react';
import Link from '../Link';

export const CruzAzulHospital = () => {
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
        CRUZ AZUL DE SÃO PAULO
      </Heading>

      <Text>
        Sem carência para Assistência Médico - Hospitalar no Complexo Hospitalar
        e nos 10 Ambulatórios Descentralizados (exceto para os reingressantes no
        regime).
      </Text>

      <Text>
        Cobertura assistencial ambulatorial, hospitalar com obstetrícia,
        incluindo pronto atendimento de urgência e emergência.
      </Text>

      <Text>
        Acesse:{' '}
        <Link
          href="https://www.cruzazulsp.com.br/"
          isExternal
          color="white.default"
          fontWeight="700"
          wordBreak="break-word"
        >
          www.cruzazulsp.com.br
        </Link>
      </Text>
    </VStack>
  );
};
