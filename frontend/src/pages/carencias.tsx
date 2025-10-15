import { Box, Container, HStack, Heading, Img, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';
import Link from '../components/Link';

const CredentialIssue = () => {
    return (
        <Fragment>
            <Header />

            <Container
                maxW="1280px"
                w="100%"
                minH="100vh"
                bgImage="url('/bg_cbpm.png')"
                bgSize="650px 650px"
                bgRepeat="no-repeat"
                bgPosition="top right"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                    color="blue.default"
                    textAlign="left"
                    mt={10}
                    mb={5}
                >
                    CARÊNCIAS DA REINCLUSÃO ADMISTRATIVA
                </Heading>

                <VStack align="flex-start">
                    <HStack> <Link
                        href="https://www.al.sp.gov.br/repositorio/legislacao/lei/1974/lei-452-02.10.1974.html"
                        fontWeight="700"
                        fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                        color="blue.default"
                        isExternal
                    >
                        Lei nº 452, de 02-10-1974
                    </Link>
                        <span>e</span>
                        <Link
                            href="/pdfs/portarias/Portaria n. Cbpm-017-01-22 - reinclusão administrativa (Fa).pdf"
                            fontWeight="700"
                            fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                            color="blue.default"
                            isExternal
                        >
                            Portaria CBPM - 17, de 23-03-2022
                        </Link>
                    </HStack>

                    <Text>
                    Os titulares que por qualquer motivo deixaram de contribuir para a Assistência Médico Hospital – CBPM, poderão requerer sua reinclusão, desde que tenham permanecido no rol previsto no artigo 32 da Lei nº 452, de 02-10-1974 e cumpram os seguintes prazos de carência:
                    </Text>
                </VStack>

                <VStack mb={2} mt={7} align="flex-start">
                    <UnorderedList>
                        <ListItem pb={4}>24 (vinte e quatro) horas para casos de urgência e emergência;</ListItem>
                        <ListItem pb={4}>24 (vinte e quatro) meses para doenças e lesões preexistentes;</ListItem>
                        <ListItem pb={4}>300 (trezentos) dias para partos a termo;</ListItem>
                        <ListItem pb={4}>180 (cento e oitenta) dias para os demais casos. (NR)</ListItem>
                    </UnorderedList>

                    <Text>
                    Para os PM que são contribuintes desde o ingresso na Polícia Militar, e assim permanecem, não existe carência, podendo seus beneficiários utilizarem a assistência médico-hospitalar a qualquer tempo, desde o referido ingresso.
                    </Text>
                    <Text>A inclusão, atualização e exclusão dos beneficiários é responsabilidade do contribuinte.</Text>
                    <Text>
Os <u>atendimentos de emergência</u> (PS) estão <u>limitados até as primeiras 12 horas do atendimento</u>. A realização de procedimentos exclusivos da cobertura hospitalar, ainda cumprindo período de carência,  fica sob responsabilidade do beneficiário, mesmo sendo feito na mesma unidade de prestação de serviços e em tempo menor que 12 horas.
</Text>
<Text>
Em caso de necessidade de assistência médico-hospitalar decorrente da <u>condição gestacional de pacientes</u> ainda <u>cumprindo período de carência</u>, o regime AMH irá seguir com a cobertura do segmento ambulatorial, não garantindo, portanto, <u>internação além das 12 horas iniciais</u>.
</Text>
<Text>
Para solicitar a reinclusão administrativa , o contribuinte ou beneficiário dependente deverá comparecer presencialmente ao Posto de Atendimento Integrado na sede da CBPM (PAI-CBPM), ou no Posto de Atendimento Integrado na sede da Cruz Azul (PAI-Cambuci), ou acessar o Portal de Serviços CBPM- área de Serviço do Usuário, preencher o Requerimento Digital para Reinclusão à Condição de Contribuinte e anexar a documentação comprobatória da condição de contribuinte.
</Text>

<Text>
O Formulários para a solicitação de Reinclusão Administrativa podem ser preenchidos  e enviados digitalmente através  do acesso à <Link href="/login" fontWeight="700">Área de Serviço do Usuário</Link> do Portal ou baixados na <Link href="/login" fontWeight="700">Área Pública do Portal</Link>
</Text>




</VStack>
<VStack mb={2} mt={7} align="flex-start">
	<Text>Pode ser solicitado também pelos seguintes meios: <br />
	</Text>
	<Text>- Endereço PAI-CBPM: R. Alfredo Maia, 218 - Luz, São Paulo – SP<br/>
		Horário: Dias úteis, das 8h às 17h
    </Text>
	<Text>- Endereço PAI-Cambuci: Av. Lins Vasconcelos, 356 - Cambuci, São Paulo – SP<br />
		Horário: Dias úteis, das 8h às 17h
    </Text>
	<Text>- E-mail: <Link href="mailto:cadastro@cbpm.sp.gov.br">cadastro@cbpm.sp.gov.br</Link>.</Text>
	<Text>Para dúvidas e maiores informações, favor entrar em contato através do telefone <Link href="tel:01133153000">(11) 3315-3000</Link><br />
	</Text>
</VStack>
                
            </Container>
        </Fragment>
    );
};

export default CredentialIssue;
