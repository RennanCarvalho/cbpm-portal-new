import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';

const SuperintendenceWideVersion = () => {
  return (
    <Fragment>
      <Box>
        <Heading
          as="h1"
          fontSize="xl"
          color="blue.default"
          textAlign="left"
          mt={10}
          mb={5}
        >
          Chefe de Gabinete
        </Heading>
        <Text fontWeight="700" fontSize="xl">
          MÔNICA PULITI DIAS FERREIRA
        </Text>
        <Text>Coronel PM</Text>
        <Text pb={5}>
          Doutora em Segurança Pública pelo Centro de Aperfeiçoamento e Estudos
          Superiores da Polícia Militar do Estado de São Paulo, Bacharel em
          Ciências de Segurança e Ordem Pública pela Academia Militar do Barro
          Branco e Bacharel em Administração de Empresas pela Universidade
          Mackenzie. Atuou na Polícia Militar do Estado de São Paulo por 32
          anos. Integrou o Conselho de Administração da SPPrev, Conselho
          Deliberativo da Cruz Azul São Paulo, é atualmente Presidente do
          Instituto Pró PM e, desde 2023 assumiu a Chefia de Gabinete da Caixa
          Beneficente da Polícia Militar do Estado – CBPM.
        </Text>
      </Box>
      <HStack
        border="1px"
        spacing="60px"
        borderColor="blue.default"
        p={3}
        borderRadius="3xl"
        align="flex-start"
      >
        <Box>
          <Text fontWeight="700">Superintendentes</Text>
        </Box>
      </HStack>
      <HStack align="flex-start" spacing="60px">
        <VStack align="flex-start" p={2}>
          <Box>
            <Text fontWeight="700">
              Superintendente de Gestão de Assistência Médico-Hospitalar
            </Text>
            <Text>EDUARDO HENRIQUE BRICIUG MARTINEZ</Text>
            <Text>Coronel PM</Text>
          </Box>

          <Box>
            <Text fontWeight="700">
              Superintendente de Tecnologia e Comunicação Corporativa
            </Text>
            <Text>ROGÉRIO CABRAL CAMARGO</Text>
            <Text>Tenente Coronel PM</Text>
          </Box>

          <Box>
            <Text fontWeight="700">Superintendente de Demandas Judiciais</Text>
            <Text>LUCIANE SORAYA PEREIRA DIAS</Text>
            <Text>Tenente Coronel PM</Text>
          </Box>

          <Box>
            <Text fontWeight="700">Superintendente de Gestão Corporativa</Text>
            <Text>MÁRCIO CECILIO FRASSON</Text>
            <Text>Tenente Coronel PM</Text>
          </Box>

          <Box>
            <Text fontWeight="700">
              Superintendente de Gestão de Programas Governamentais
            </Text>
            <Text>DONIZETE AREIS SOARES</Text>
            <Text>Major PM</Text>
          </Box>
        </VStack>
      </HStack>
    </Fragment>
  );
};

export default SuperintendenceWideVersion;
