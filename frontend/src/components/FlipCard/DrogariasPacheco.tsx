import { Heading, Text, VStack } from '@chakra-ui/react';
import Link from '../Link';

export const DrogariasPacheco = () => {
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
        DROGARIA PACHECO
      </Heading>

      <Text>
        Descontos de 30% em medicamentos genéricos tarjados, 20% em medicamentos
        de marca tarjados e 5% em itens de perfumaria.
      </Text>

      <Text>Apresente a credencial CBPM ou informe CPF e RE (sem dígito).</Text>

      <Link
        href="https://www.drogariaspacheco.com.br"
        isExternal
        color="white.default"
        fontWeight="700"
        wordBreak="break-word"
      >
        Acesse: www.drogariaspacheco.com.br
      </Link>
    </VStack>
  );
};
