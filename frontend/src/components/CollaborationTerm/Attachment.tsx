import { Box, Divider, Text } from '@chakra-ui/react';
import Link from '../Link';

export const Attachment = () => {
  return (
    <>
      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">
            ANEXO A DO PLANO DE TRABALHO
          </Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link href="/pdfs/anexos/01 - Anexo A do Plano de Trabalho.pdf" isExternal>
            Com fulcro na Lei nº 17.244, de 10 de janeiro de 2020, que Orça a Receita e fixa... (ler mais)
          </Link>
        </Box>
      </Box>


      <Box border="2px" borderColor="blue.default" w="100%" mt={8}>
        <Box p={3}>
          <Text fontWeight="700">
            ANEXO B DO PLANO DE TRABALHO
          </Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link href="/pdfs/anexos/02 - Anexo B do Plano de Trabalho.pdf" isExternal>
            (Atualizado conforme Termo Aditivo nº 02/2020... (ler mais)
          </Link>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link href="/pdfs/anexos/03 - APENSO 1 AO ANEXO B DO PLANO DE TRABALHO.pdf" isExternal>
            APENSO 1 AO ANEXO B DO PLANO DE TRABALHO... (ler mais)
          </Link>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link href="/pdfs/anexos/04 - APENSO 2 AO ANEXO B DO PLANO DE TRABALHO.pdf" isExternal>
            APENSO 2 AO ANEXO B DO PLANO DE TRABALHO... (ler mais)
          </Link>
        </Box>


        <Divider />
        <Divider />

        <Box p={3}>
          <Link href="/pdfs/anexos/05 - APENSO 3 AO ANEXO B DO PLANO DE TRABALHO.pdf" isExternal>
            APENSO 3 AO ANEXO B DO PLANO DE TRABALHO... (ler mais)
          </Link>
        </Box>


        <Divider />
        <Divider />

        <Box p={3}>
          <Link href="/pdfs/anexos/06 - APENSO 4 AO ANEXO B DO PLANO DE TRABALHO.pdf" isExternal>
            APENSO 4 AO ANEXO B DO PLANO DE TRABALHO... (ler mais)
          </Link>
        </Box>

      </Box>


      <Box border="2px" borderColor="blue.default" w="100%" mt={8}>
        <Box p={3}>
          <Text fontWeight="700">
            ANEXO C DO PLANO DE TRABALHO
          </Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link href="/pdfs/anexos/07 - Anexo C do Plano de Trabalho.pdf" isExternal>
            METAS QUANTITATIVAS - AMH... (ler mais)
          </Link>
        </Box>
      </Box>
    </>
  );
};
