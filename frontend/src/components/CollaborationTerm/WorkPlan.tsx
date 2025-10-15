import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import Link from '../Link';

export const WorkPlan = () => {
  return (
    <VStack spacing="22px">
      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">PLANO DE TRABALHO</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/plano_de_trabalho/arquivo.pdf"
            isExternal
          >
            O presente Plano de Trabalho, requisito preliminar e indispensável
            para a celebração do Termo de colaboração... (ler mais)
          </Link>
        </Box>
      </Box>

      {/* <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">
            PROGRAMA ASSISTÊNCIA MÉDICO - HOSPITALAR – AMH
          </Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/plano_de_trabalho/plano-de-trabalho-Anexo-A-e-Anexo-B.pdf"
            isExternal
          >
            Com fulcro na Lei nº 17.244, de 10 de janeiro de 2020, que Orça a
            Receita e fixa a Despesa do Estado para...(ler mais)
          </Link>
        </Box>
      </Box> */}
    </VStack>
  );
};
