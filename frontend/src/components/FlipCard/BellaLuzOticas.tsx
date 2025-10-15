import { Heading, Text, VStack } from '@chakra-ui/react';
import Link from '../Link';

export const BellaLuzOticas = () => {
  return (
    <VStack
      maxW="450px"
      w="100%"
      bg="#1A80B6"
      color="white.default"
      display="flex"
      flexDir="column"
      justify="center"
      align="center"
      p={5}
    >
      <Heading as="h2" size="md">
        BELLA LUZ ÓTICAS
      </Heading>

      <Text>
        Planos odontológicos com tabela especial, a partir de R$ 12,90/mês!
      </Text>

      <Text>27% para pagamento à vista e em espécie</Text>

      <Text>
        22% para pagamento à vista no cartão de débito/crédito ou cheque
      </Text>

      <Text>
        12% para pagamento parcelado em até 5x no cartão de crédito, cheque ou
        boleto
      </Text>

      <Text>
        7% para pagamento parcelado de 5 a 10x no cartão de crédito, cheque ou
        boleto
      </Text>

      <Text>Essencial Plus Familiar</Text>

      <Text>(11) 3104-9165</Text>

      <Text>Av. Rangel Pestana, 237 – Centro – São Paulo/SP</Text>

      <Link
        href="https://www.facebook.com/oticabellaluz/"
        isExternal
        color="white.default"
        fontWeight="700"
        wordBreak="break-word"
      >
        www.facebook.com/oticabellaluz/
      </Link>
    </VStack>
  );
};
