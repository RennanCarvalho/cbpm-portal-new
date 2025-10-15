import {
  HStack,
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import Link from '../Link';
export const Menu = () => {
  return (
    <HStack
      spacing={{ md: 1, lg: 5, xl: 5 }}
      display="flex"
      zIndex="10"
      w="100%"
    >
      <ChakraMenu>
        <MenuButton fontSize="sm" fontWeight="700">
          CONTATO COM A CBPM
        </MenuButton>

        <MenuList
          bg="gray.default"
          border="1px"
          borderColor="gray.500"
          fontSize="sm"
        >
          <MenuItem borderBottom="1px" borderColor="gray.500">
            <Link w="100%" href="/fale-conosco" color="black.default">
              Fale Conosco
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              w="100%"
              href="/posto-atendimento-integrado"
              color="black.default"
            >
              Posto de Atendimento Integrado
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/duvidas-frequentes " color="black.default">
              Dúvidas Frequentes
            </Link>
          </MenuItem>
        </MenuList>
      </ChakraMenu>

      <ChakraMenu>
        <MenuButton fontSize="sm" fontWeight="700" whiteSpace="nowrap">
          ASSISTÊNCIA MÉDICA
        </MenuButton>

        <MenuList
          bg="gray.default"
          border="1px"
          borderColor="gray.500"
          fontSize="sm"
        >
          <MenuItem>
            <Link
              w="100%"
              href="/assistencia-medico-hospitalar"
              color="black.default"
            >
              Assistência Médico - Hospitalar
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/contribuicao-mensal" color="black.default">
              Contribuição Mensal
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link
              w="100%"
              href="/contribuintes-e-beneficiarios"
              color="black.default"
            >
              Contribuintes e Beneficiários Dependentes
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/mutualismo" color="black.default">
              Mutualismo
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link
              w="100%"
              href="https://www.cruzazulsp.com.br/category/palavra-de-especialista+saude/"
              isExternal
              color="black.default"
            >
              Artigos de Saúde
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link
              w="100%"
              href="/atendimento-cbpm-cruz-azul"
              color="black.default"
            >
              Atendimento pela CBPM / Cruz Azul SP
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/extrato-contas-medicas" color="black.default">
              Extrato de Contas Médicas
            </Link>
          </MenuItem>
          {/* <MenuItem borderTop="1px" borderColor="gray.500">
            <Link
              w="100%"
              href="/pdfs/ATENDIMENTO-MÉDICO.pdf"
              color="black.default"
            >
              Expansão do Atendimento Médico Hospital - AMH
            </Link>
          </MenuItem> */}
        </MenuList>
      </ChakraMenu>

      <ChakraMenu>
        <MenuButton fontSize="sm" fontWeight="700">
          SERVIÇOS
        </MenuButton>

        <MenuList
          fontSize="sm"
          bg="gray.default"
          border="1px"
          borderColor="gray.500"
        >
          <MenuItem>
            <Link w="100%" href="/emissao-de-credencial" color="black.default">
              Credencial CBPM
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/extrato-contas-medicas" color="black.default">
              Extratos de Contas Médicas
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/formularios-declaracao" color="black.default">
              Formulários
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/carencias" color="black.default">
              Carências
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link
              w="100%"
              href="/area-restrita/servicos/atualizar-dados"
              color="black.default"
            >
              Atualização de Dados Cadastrais
            </Link>
          </MenuItem>
        </MenuList>
      </ChakraMenu>

      <ChakraMenu>
        <MenuButton fontSize="sm" fontWeight="700">
          CADASTRO
        </MenuButton>

        <MenuList
          fontSize="sm"
          bg="gray.default"
          border="1px"
          borderColor="gray.500"
        >
          <MenuItem>
            <Link w="100%" href="/formularios-declaracao" color="black.default">
              Formulários
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/emissao-de-credencial" color="black.default">
              Emissão de Credencial
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link
              w="100%"
              href="/orientacao-novos-policiais"
              color="black.default"
            >
              Orientação para Novos Policiais
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link
              w="100%"
              href="/reinclusao-administrativa"
              color="black.default"
            >
              Reinclusão Administrativa
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link
              w="100%"
              href="/inclusao-exclusao-beneficiarios"
              color="black.default"
            >
              Inclusão e Exclusão de Beneficiários Dependentes
            </Link>
          </MenuItem>
        </MenuList>
      </ChakraMenu>

      <ChakraMenu>
        <MenuButton
          fontSize="sm"
          fontWeight="700"
          as={Link}
          href="/clube-de-beneficios"
          color="black.default"
        >
          BENEFÍCIOS
        </MenuButton>
      </ChakraMenu>

      <ChakraMenu>
        <MenuButton fontSize="sm" fontWeight="700">
          TRANSPARÊNCIA
        </MenuButton>

        <MenuList
          fontSize="sm"
          bg="gray.default"
          border="1px"
          borderColor="gray.500"
        >
          {/* <MenuItem>
            <Link w="100%" href="/cbpm-em-numeros " color="black.default">
              CBPM em Números
            </Link>
          </MenuItem> */}

          {/* <MenuItem borderColor="gray.500">
            <Link
              w="100%"
              href="/servico-informacao-cidadao"
              color="black.default"
            >
              Serviço de Informação ao Cidadão
            </Link>
          </MenuItem> */}
          <MenuItem borderColor="gray.500">
            <Link w="100%" href="/fala-sp" color="black.default">
              Portal Fala.SP
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link
              w="100%"
              href="/portal-da-transparencia"
              color="black.default"
            >
              Portal da Transparência
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/termo-colaboracao" color="black.default">
              Termo de Colaboração
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link
              w="100%"
              href="/termo-de-convenio-cbpm-crecisp"
              color="black.default"
            >
              Termo de Convênio e Cooperação <br />
              Técnica CBPM CRECISP
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link
              w="100%"
              href="/termo-de-convenio-cbpm-defensoria"
              color="black.default"
            >
              Termo de Convênio CBPM/Defensoria <br /> Pública do Estado
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link
              w="100%"
              href="/pdfs/politica_privacidade.pdf"
              isExternal
              color="black.default"
            >
              Política de Privacidade
            </Link>
          </MenuItem>
        </MenuList>
      </ChakraMenu>

      <ChakraMenu>
        <MenuButton fontSize="sm" fontWeight="700">
          INSTITUCIONAL
        </MenuButton>

        <MenuList
          fontSize="sm"
          bg="gray.default"
          border="1px"
          borderColor="gray.500"
        >
          <MenuItem>
            <Link w="100%" href="/presidencia" color="black.default">
              Presidência
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/sobre-a-cbpm" color="black.default">
              Sobre a CBPM
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/resumo-historico" color="black.default">
              Resumo Histórico
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/video-historico" color="black.default">
              Vídeo Histórico
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/medalha" color="black.default">
              Medalha
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/marco-regulatorio" color="black.default">
              Marco Regulatório (Legislação)
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/integridade" color="black.default">
              Portal de Integridade
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/artigos" color="black.default">
              Artigos
            </Link>
          </MenuItem>

          <MenuItem borderTop="1px" borderColor="gray.500">
            <Link w="100%" href="/noticias" color="black.default">
              Notícias
            </Link>
          </MenuItem>
        </MenuList>
      </ChakraMenu>
    </HStack>
  );
};
