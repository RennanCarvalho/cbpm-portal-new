import { Heading, Text, VStack } from '@chakra-ui/react';
import Link from '../Link';

export const DrogariaSaoPaulo = () => {
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
        DROGARIA SÃO PAULO
      </Heading>

      <Text>
        Descontos de 30% em medicamentos genéricos tarjados, 20% em medicamentos
        de marca tarjados, 5% em itens de perfumaria, 5% em Teste COVID–19
        IGG/IGM ECO kit com 40 testes, 10% em COVID-19 IGG/IGM ECO teste, 10% em
        Teste Diagnóstico COVID–19, 10% em Teste COV-2 em soro, 10% em Teste de
        anticorpo SARS–COV–2 Imunocromatografia – Ouro C, 20% em OTC – Over the
        counter, 20% em Alimentos Vitamínicos.
      </Text>

      <Text>Apresente a credencial CBPM ou informe CPF e RE (sem dígito).</Text>

      <Link
        href="https://www.drogariasaopaulo.com.br"
        isExternal
        color="white.default"
        fontWeight="700"
        wordBreak="break-word"
      >
        Acesse: www.drogariasaopaulo.com.br
      </Link>
    </VStack>
  );
};
