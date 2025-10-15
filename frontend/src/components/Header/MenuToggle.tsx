import { Link, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';

export const MenuToggle = () => {
  return (
    <VStack display="flex" w="100%" justify="flex-start" align="flex-start">
      <Text fontWeight="700">CONTATO COM A CBPM</Text>

      <UnorderedList
        borderColor="gray.500"
        listStyleType="none"
        w="100%"
        pl="20px"
      >
        <ListItem fontSize="sm" borderBottom="1px" borderColor="gray.500">
          <Link href="/fale-conosco" color="black.default">
            Fale Conosco
          </Link>
        </ListItem>

        <ListItem fontSize="sm">
          <Link href="/posto-atendimento-integrado" color="black.default">
            Posto de Atendimento Integrado
          </Link>
        </ListItem>

        <ListItem
          fontSize="sm"
          borderTop="1px"
          borderBottom="1px"
          borderColor="gray.500"
        >
          <Link href="/duvidas-frequentes" color="black.default">
            Dúvidas Frequentes
          </Link>
        </ListItem>
      </UnorderedList>

      <Text fontSize="sm" fontWeight="700" whiteSpace="nowrap">
        ASSISTÊNCIA MÉDICA
      </Text>

      <UnorderedList
        borderColor="gray.500"
        listStyleType="none"
        w="100%"
        pl="20px"
      >
        <ListItem fontSize="sm">
          <Link href="/assistencia-medico-hospitalar" color="black.default">
            Assistência Médico - Hospitalar
          </Link>
        </ListItem>

        <ListItem fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/contribuicao-mensal" color="black.default">
            Contribuição Mensal
          </Link>
        </ListItem>

        <ListItem fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/contribuintes-e-beneficiarios" color="black.default">
            Contribuintes e Beneficiários Dependentes
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/mutualismo" color="black.default">
            Mutualismo
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link
            href="https://www.cruzazulsp.com.br/category/palavra-de-especialista+saude/"
            isExternal
            color="black.default"
          >
            Artigos de Saúde
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/atendimento-cbpm-cruz-azul" color="black.default">
            Atendimento pela CBPM / Cruz Azul SP
          </Link>
        </ListItem>

        <ListItem
          fontSize="sm"
          borderTop="1px"
          borderBottom="1px"
          borderColor="gray.500"
        >
          <Link href="/extrato-contas-medicas" color="black.default">
            Extrato de Contas Médicas
          </Link>
        </ListItem>

        {/* <ListItem
          fontSize="sm"
          borderTop="1px"
          borderBottom="1px"
          borderColor="gray.500"
        >
          <Link href="/pdfs/ATENDIMENTO-MÉDICO.pdf" color="black.default">
            Expansão do Atendimento Médico Hospital - AMH
          </Link>
        </ListItem> */}
      </UnorderedList>

      <Text fontSize="sm" fontWeight="700">
        SERVIÇOS
      </Text>

      <UnorderedList
        borderColor="gray.500"
        listStyleType="none"
        w="100%"
        pl="20px"
      >
        <ListItem w="100%" fontSize="sm">
          <Link href="/emissao-de-credencial" color="black.default">
            Credencial CBPM
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/extrato-contas-medicas" color="black.default">
            Extratos de Contas Médicas
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/formularios-declaracao" color="black.default">
            Formulários
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/carencias" color="black.default">
            Carências
          </Link>
        </ListItem>

        <ListItem
          fontSize="sm"
          borderTop="1px"
          borderBottom="1px"
          borderColor="gray.500"
        >
          <Link
            href="/area-restrita/servicos/atualizar-dados"
            color="black.default"
          >
            Atualização de Dados Cadastrais
          </Link>
        </ListItem>
      </UnorderedList>

      <Text fontSize="sm" fontWeight="700">
        CADASTRO
      </Text>

      <UnorderedList
        borderColor="gray.500"
        listStyleType="none"
        w="100%"
        pl="20px"
      >
        <ListItem w="100%" fontSize="sm">
          <Link href="/formularios-declaracao" color="black.default">
            Formulários
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/emissao-de-credencial" color="black.default">
            Emissão de Credencial
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/orientacao-novos-policiais" color="black.default">
            Orientação para Novos Policiais
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/reinclusao-administrativa" color="black.default">
            Reinclusão Administrativa
          </Link>
        </ListItem>

        <ListItem
          fontSize="sm"
          borderTop="1px"
          borderBottom="1px"
          borderColor="gray.500"
        >
          <Link href="/inclusao-exclusao-beneficiarios" color="black.default">
            Inclusão e Exclusão de Beneficiários Dependentes
          </Link>
        </ListItem>
      </UnorderedList>

      <Text fontSize="sm" fontWeight="700">
        BENEFÍCIOS
      </Text>

      <UnorderedList
        borderColor="gray.500"
        listStyleType="none"
        w="100%"
        pl="20px"
      >
        <ListItem
          fontSize="sm"
          borderTop="1px"
          borderBottom="1px"
          borderColor="gray.500"
        >
          <Link href="/clube-de-beneficios" color="black.default">
            Clube de Benefícios
          </Link>
        </ListItem>
      </UnorderedList>

      <Text fontSize="sm" fontWeight="700">
        TRANSPARÊNCIA
      </Text>

      <UnorderedList
        borderColor="gray.500"
        listStyleType="none"
        w="100%"
        pl="20px"
      >
        {/* <ListItem w="100%" fontSize="sm">
          <Link href="/cbpm-em-numeros " color="black.default">
            CBPM em Números
          </Link>
        </ListItem> */}

        {/* <ListItem w="100%" fontSize="sm" borderColor="gray.500">
          <Link href="/servico-informacao-cidadao" color="black.default">
            Serviço de Informação ao Cidadão
          </Link>
        </ListItem> */}
                <ListItem w="100%" fontSize="sm" borderColor="gray.500">
          <Link href="/fala-sp" color="black.default">
          Portal Fala.SP
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/portal-da-transparencia" color="black.default">
            Portal da Transparência
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/termo-colaboracao" color="black.default">
            Termo de Colaboração
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/termo-de-convenio-cbpm-crecisp" color="black.default">
            Termo de Convênio e Cooperação <br />
            Técnica CBPM CRECISP
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/termo-de-convenio-cbpm-defensoria" color="black.default">
            Termo de Convênio CBPM/Defensoria <br /> Pública do Estado
          </Link>
        </ListItem>

        <ListItem
          fontSize="sm"
          borderTop="1px"
          borderBottom="1px"
          borderColor="gray.500"
        >
          <Link
            href="/pdfs/politica_privacidade.pdf"
            isExternal
            color="black.default"
          >
            Política de Privacidade
          </Link>
        </ListItem>
      </UnorderedList>

      <Text fontSize="sm" fontWeight="700">
        INSTITUCIONAL
      </Text>

      <UnorderedList
        borderColor="gray.500"
        listStyleType="none"
        w="100%"
        pl="20px"
      >
        <ListItem w="100%" fontSize="sm">
          <Link href="/presidencia" color="black.default">
            Presidência
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/sobre-a-cbpm" color="black.default">
            Sobre a CBPM
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/resumo-historico" color="black.default">
            Resumo Histórico
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/video-historico" color="black.default">
            Vídeo Histórico
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/medalha" color="black.default">
            Medalha
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/marco-regulatorio" color="black.default">
            Marco Regulatório (Legislação)
          </Link>
        </ListItem>

        <ListItem w="100%" fontSize="sm" borderTop="1px" borderColor="gray.500">
          <Link href="/artigos" color="black.default">
            Artigos
          </Link>
        </ListItem>

        <ListItem
          fontSize="sm"
          borderTop="1px"
          borderBottom="1px"
          borderColor="gray.500"
        >
          <Link href="/noticias" color="black.default">
            Notícias
          </Link>
        </ListItem>
      </UnorderedList>
    </VStack>
  );
};
