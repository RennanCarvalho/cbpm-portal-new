import { Heading, Text, VStack } from '@chakra-ui/react';
import Link from '../Link';

export const CruzAzulMaisSaude = () => {
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
        CRUZ AZUL SAÚDE
      </Heading>

      <Text>
        Condições especiais para filhos de contribuintes CBPM que, ao completar
        21 anos, deixam de ser beneficiários dependentes do regime assistencial,
        contando com isenção de carência e desconto de 5%, mediante contratação
        no período entre 60 dias antes e 60 dias depois do aniversário de 21
        anos.
      </Text>

      <Text>CONSULTE:</Text>

      <Text>3388-5037</Text>

      <Link
        href="mailto:comercial@cruzazulsaude.com.br"
        color="white.default"
        fontWeight="700"
        wordBreak="break-word"
      >
        comercial@cruzazulsaude.com.br
      </Link>

      <Link
        href="https://www.cruzazulsaude.com.br"
        isExternal
        color="white.default"
        fontWeight="700"
        wordBreak="break-word"
      >
        www.cruzazulsaude.com.br
      </Link>
    </VStack>
  );
};
