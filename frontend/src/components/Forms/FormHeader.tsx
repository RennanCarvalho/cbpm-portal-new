import { Container, Flex, Img, Text, VStack } from '@chakra-ui/react';

type Title = {
  title: string;
  attachment?: string;
  isAttachment?: boolean;
  isDeclararion?: boolean;
};

export const FormHeader = ({
  title,
  attachment,
  isAttachment = true,
  isDeclararion = true,
}: Title) => {
  return (
    <Container
      centerContent
      mt="80px"
      mb="50px"
      fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
      maxW="1280px"
      w="100%"
    >
      <Flex
        justify={{
          base: 'center',
          sm: 'center',
          md: 'space-between',
          lg: 'space-between',
        }}
        w="100%"
      >
        <Img
          src="/logos/sp_logo.png"
          display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
          boxSize="150px"
          objectFit="fill"
          alt="Logo de São Paulo"
        />

        <Text fontWeight="700" textAlign="center">
          <VStack spacing="1rem">
            <p>
              GOVERNO DO ESTADO DE SÃO PAULO <br /> SECRETARIA DE SEGURANÇA
              PÚBLICA
            </p>

            <p>
              CAIXA BENEFICENTE DA POLÍCIA MILITAR DO ESTADO <br />
              SUPERINTENDÊNCIA
            </p>
          </VStack>
        </Text>

        <Img
          src="/logos/cbpm_logo.png"
          display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
          boxSize="150px"
          objectFit="fill"
          alt="Logo CBPM"
        />
      </Flex>

      <div>
        {isDeclararion ? (
          <Text fontWeight="700" textAlign="center">
            FICHA DE DECLARAÇÃO DE FAMÍLIA
          </Text>
        ) : (
          ''
        )}

        <Text fontWeight="700" textAlign="center">
          {title}
        </Text>

        {isAttachment ? (
          <Text fontWeight="700" textAlign="center">
            ANEXO &quot;{attachment}&quot; da Portaria Nº CBPM–16/01/2022
          </Text>
        ) : (
          ''
        )}
      </div>
    </Container>
  );
};

export default FormHeader;
