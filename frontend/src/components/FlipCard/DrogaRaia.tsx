import { Heading, Text, VStack } from '@chakra-ui/react';
import Link from '../Link';

export const DrogaRaia = () => {
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
        DROGA RAIA
      </Heading>

      <Text>
        Descontos de 40% em medicamentos genéricos tarjados, 20% em medicamentos
        de marca tarjados.
      </Text>

      <Text>Apresente a credencial CBPM ou informe CPF e RE (sem dígito).</Text>

      <Link
        href="https://www.drogaraia.com.br"
        isExternal
        color="white.default"
        fontWeight="700"
        wordBreak="break-word"
      >
        Acesse: www.drogaraia.com.br
      </Link>
    </VStack>
  );
};
