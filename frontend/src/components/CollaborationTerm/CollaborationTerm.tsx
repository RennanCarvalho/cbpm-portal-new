import { Box, Divider, Text } from '@chakra-ui/react';
import Link from '../Link';

export const CollaborationTermComponent = () => {
  return (
    <Box border="2px" borderColor="blue.default" w="100%">
      <Box p={3}>
        <Text fontWeight="700">TERMO DE COLABORAÇÃO Nº CBPM – 001/01/2020</Text>
      </Box>

      <Divider />
      <Divider />

      <Box p={3}>
        <Link
          href="/pdfs/termos/01 - Termo de Colaboração nº CBPM – 001012020.pdf"
          isExternal
        >
          Termo de Colaboração que entre si celebram a Caixa Beneficente da
          Polícia... (ler mais)
        </Link>
      </Box>

      <Divider />
      <Divider />

      <Box p={3}>
        <Link href="/pdfs/termos/termo-aditivo-06-2025.pdf" isExternal>
          Termo aditivo 06/2025... (ler mais)
        </Link>
      </Box>

      <Divider />
      <Divider />

      <Box p={3}>
        <Link href="/pdfs/termos/termo-aditivo-05-2025.pdf" isExternal>
          Termo aditivo 05/2025... (ler mais)
        </Link>
      </Box>

      <Divider />
      <Divider />
      <Box p={3}>
        <Link href="/pdfs/termos/termo-aditivo-04-01-2024.pdf" isExternal>
          Termo aditivo 04/2024... (ler mais)
        </Link>
      </Box>
      <Divider />
      <Divider />
      <Box p={3}>
        <Link href="/pdfs/termos/04 - TERMO ADITIVO 03012022.pdf" isExternal>
          Termo aditivo 03/2020... (ler mais)
        </Link>
      </Box>

      <Divider />
      <Divider />
      <Box p={3}>
        <Link href="/pdfs/termos/03 - TERMO ADITIVO 02012020.pdf" isExternal>
          Termo aditivo 02/2020... (ler mais)
        </Link>
      </Box>

      <Divider />
      <Divider />

      <Box p={3}>
        <Link href="/pdfs/termos/02 - TERMO ADITIVO 01012020.pdf" isExternal>
          Termo aditivo 01/2020... (ler mais)
        </Link>
      </Box>
      <Divider />
      <Divider />

      <Box p={3}>
        <Link href="/pdfs/termos/termo-aderencia-lgpd.pdf" isExternal>
          Termo de aderência à LGPD (CBPM - Cruz azul)... (ler mais)
        </Link>
      </Box>

      <Divider />
      <Divider />

      <Box p={3}>
        <Link
          href="/pdfs/termos/05 - Relação do Dirigente e Assessores v1.pdf"
          isExternal
        >
          Relação do Dirigente e Assessores... (ler mais)
        </Link>
      </Box>
    </Box>
  );
};
