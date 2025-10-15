import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import Link from '../Link';

export const Manual = () => {
  return (
    <VStack spacing="22px">
      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">MANUAL DE PRESTAÇÃO DE CONTAS 2ª EDIÇÃO</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/manuais/Manual-de-Prestacao-de-Contas-2-Edicao.pdf"
            isExternal
          >
            Termo de colaboração entre Caixa Beneficente da Polícia Militar do
            Estado... (ler mais)
          </Link>
        </Box>
      </Box>

      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">MANUAL DE CUSTOS E RATEIOS 1ª EDIÇÃO</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/manuais/Manual-de-Custos-Rateios-1-Edicao.pdf"
            isExternal
          >
            Termo de colaboração entre Caixa Beneficente da Polícia Militar do
            Estado... (ler mais)
          </Link>
        </Box>
      </Box>

      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">MANUAL DE FORMULAÇÃO E CONTROLE DE METAS 2ª EDIÇÃO</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/manuais/02 - MANUAL DE FORMULAÇÃO E CONTROLE DE METAS 2ª EDIÇÃO.pdf"
            isExternal
          >
            Manual de formulação e controle de metas Caixa Beneficente da Polícia Militar do
            Estado... (ler mais)
          </Link>
        </Box>
      </Box>

      {/* <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">
            MANUAL DE FORMULAÇÃO E CONTROLE DE METAS 1ª EDIÇÃO
          </Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/manuais/Manual-Para-formulacao-e-Controle-de-Metas-1-Edicao.pdf"
            isExternal
          >
            Termo de colaboração entre Caixa Beneficente da Polícia Militar do
            Estado... (ler mais)
          </Link>
        </Box>
      </Box>

      


      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">MANUAL DE CUSTOS E RATEIOS 1ª EDIÇÃO</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/manuais/03 - MANUAL DE CUSTOS E RATEIOS 1ª EDIÇÃO.pdf"
            isExternal
          >
            Manual de custos e rateios da Caixa Beneficente da Polícia Militar do
            Estado... (ler mais)
          </Link>
        </Box>
      </Box>


      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">MANUAL DE PRESTAÇÃO DE CONTAS 2ª EDIÇÃO</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/manuais/04 - MANUAL DE PRESTAÇÃO DE CONTAS 2ª EDIÇÃO.pdf"
            isExternal
          >
            Termo de colaboração entre Caixa Beneficente da Polícia Militar do
            Estado... (ler mais)
          </Link>
        </Box>
      </Box> */}
    </VStack>
  );
};
