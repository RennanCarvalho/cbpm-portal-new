import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import Link from '../Link';

export const TechnicalNote = () => {
  return (
    <VStack spacing={8}>
      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">NOTA TÉCNICA - JULHO DE 2024</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/notas_tecnicas/07 - Nota Técnica 01.01.2024 - Julho de 2024 - Assinada.pdf"
            isExternal
          >
            Parecer técnico analisando a forma de aplicação da Sequência 12 da tabela do Anexo B, do Plano
            de Trabalho do... (ler mais)
          </Link>
        </Box>
      </Box>


      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">NOTA TÉCNICA SN - ABRIL DE 2020</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/notas_tecnicas/01 - Nota Técnica SN - Abril de 2020 - Ajustes a minuta do Termo de Colaboração GS 10370.18.pdf"
            isExternal
          >
            Ajustes a minuta do Termo de Colaboração GS... (ler mais)
          </Link>
        </Box>
      </Box>

      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">NOTA TÉCNICA 05.01.2020 - MAIO DE 2020</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/notas_tecnicas/02 - Nota Técnica 05.01.2020 - Maio de 2020 - Remuneração da Equipe Encarregada da Execução do Plano de Trabalho.pdf"
            isExternal
          >
            Remuneração da Equipe Encarregada da Execução do Plano de Trabalho... (ler mais)
          </Link>
        </Box>
      </Box>

      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">NOTA TÉCNICA 07.01.2020 - JUNHO DE 2020</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/notas_tecnicas/03 - Nota Técnica 07.01.2020 - Junho de 2020 - Instrução para Contratação de Terceiros ou atuação em rede"
            isExternal
          >
            Instrução para Contratação de Terceiros ou atuação em rede... (ler mais)
          </Link>
        </Box>
      </Box>

      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">NOTA TÉCNICA 20.01.2020 - NOVEMBRO DE 2020</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/notas_tecnicas/04 - Nota Técnica 20.01.2020 - Novembro de 2020 - Termo Aditivo nº 01_20.pdf"
            isExternal
          >
            Termo Aditivo nº 01_20... (ler mais)
          </Link>
        </Box>
      </Box>

      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">NOTA TÉCNICA 21.01.2020 - DEZEMBRO DE 2020</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/notas_tecnicas/05 - Nota Técnica 21.01.2020 - Dezembro de 2020 - Termo Aditivo 01.2020"
            isExternal
          >
            Termo Aditivo 01.2020... (ler mais)
          </Link>
        </Box>
      </Box>

      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">NOTA TÉCNICA 03.01.2022 - JULHO DE 2022</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/notas_tecnicas/06 - Nota Técnica 03.01.2022 - Julho de 2022 - Termo Aditivo 03.2022.pdf"
            isExternal
          >
            Termo Aditivo 03.2022... (ler mais)
          </Link>
        </Box>
      </Box>

      <Box border="2px" borderColor="blue.default" w="100%">
        <Box p={3}>
          <Text fontWeight="700">NOTA TÉCNICA Nº CBPM-07/01/2020</Text>
        </Box>

        <Divider />
        <Divider />

        <Box p={3}>
          <Link
            href="/pdfs/notas_tecnicas/nota_tecnica_07_01_2020.pdf"
            isExternal
          >
            Instrução para contratação de serviços de... (ler mais)
          </Link>
        </Box>
      </Box>
    </VStack>
  );
};
