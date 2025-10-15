import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Input,
  Link as ChakraLink,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import Header from '../components/Header';
import Link from '../components/Link';

const FrequentlyQuestions = () => {
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
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          as="h1"
          color="blue.default"
          textAlign="left"
          whiteSpace="nowrap"
          mt={10}
          mb={5}
        >
          DÚVIDAS FREQUENTES
        </Heading>

        {/* <Stack w="300px" ml="auto" mb={5} borderColor="blue.default">
          <Input
            placeholder="Buscar"
            borderRadius="2xl"
            _placeholder={{ color: 'black.default' }}
          />
        </Stack> */}

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: Meu filho(a) tem 21 anos e está cursando faculdade,
                  poderá continuar com Assistência Médico - Hospitalar da CBPM,
                  sendo atendido na Cruz Azul?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <b>Resposta</b>: Não pode. Para fins de assistência
              Médico-Hospitalar não há previsão legal para casos de filhos em
              faculdade. De acordo com o inciso II do artigo 34 da Lei Estadual
              nº 452/74, somente os filhos de até 21 anos têm direito à
              Assistência Médico - Hospitalar. A exceção se aplica aos maiores
              de 21 anos que sejam inválidos ou incapazes, ou enquanto estas
              perdurarem conforme o parágrafo 3º do mesmo artigo.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: O contribuinte tem como beneficiário dependente um
                  filho maior de 18 anos e que não completou 21 anos ainda, mas
                  ingressou na Polícia Militar. Ele pode continuar sendo
                  beneficiário dependente da Assistência Médico - Hospitalar da
                  CBPM, sendo atendido na Cruz Azul?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <b>Resposta</b>: Sim, ele mesmo sendo agora um Policial Militar,
              pode continuar sendo beneficiário dependente da Assistência Médico
              - Hospitalar até a idade limite de 21 anos. A Procuradoria Geral
              do Estado já se manifestou no seguinte sentido: “Já o filho maior
              de 18 e menor de 21, que se enquadrar nas situações do art. 5º do
              CC continua sendo obrigatório porque não existe mais a emancipação
              após os 18 anos porque hoje a maioridade civil é adquirida aos 18
              anos. A emancipação é a antecipação da maioridade”. Assim sendo,
              fica afastada a possibilidade de se interpretar que o filho(a) de
              contribuinte, beneficiário(a) que for maior de 18 anos e menor que
              21, deixe de ser beneficiário dependente obrigatório por ter se
              emancipado ao ingressar como Policial Militar. Por tal razão, ele
              continua atendido pela Assistência Médico - Hospitalar.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: Posso inscrever meus pais na Assistência Médico -
                  Hospitalar da CBPM?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <b>Resposta</b>: Sim, desde que seus pais vivam sob sua
              dependência econômica, e você não tenha esposa, companheira ou
              filhos, que sejam beneficiários dependentes obrigatórios conforme
              os Incisos I e II do artigo 34 da Lei Estadual Nº 452/74, sendo
              certo que a simples existência destes beneficiários dependentes
              obrigatórios impede a inscrição dos seus pais.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: Posso tirar meus filhos, esposa(o) ou companheira(o)
                  de beneficiários dependentes obrigatórios na Assistência
                  Médico - Hospitalar da CBPM para atendimento na Cruz Azul e
                  colocar no lugar deles os meus pais, para serem atendidos na
                  Cruz Azul?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <b>Resposta</b>: Não, você não pode tirar a esposa(o),
              companheira(o) ou filhos de beneficiários dependentes da
              Assistência Médico - Hospitalar para colocar seus pais no lugar.
              Esposa (o), companheira (o) de união estável e filhos menores de
              21 anos são beneficiários dependentes obrigatórios conforme
              incisos I e II da Lei Estadual Nº 452/74. A simples existência
              deles os torna legítimos a este direito, não tendo você a
              faculdade de optar por eles ou por seus pais. Sobre contribuintes
              e beneficiários dependentes, você pode ver mais informações no{' '}
              <Link href="/contribuintes-e-beneficiarios" fontWeight="700">
                link
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: O policial militar pode utilizar a Assistência
                  Médico - Hospitalar da CBPM?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <b>Resposta</b>: O Policial Militar poderá utilizar a Assistência
              Médico - Hospitalar da CBPM somente se o seu cônjuge, esposa(o) ou
              companheira(o) também for Policial Militar, pois em assim sendo,
              um poderá inscrever o outro como seu beneficiário dependente.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: O neto tem direito à Assistência Médico - Hospitalar
                  da CBPM?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <b>Resposta</b>: O neto pode ser incluído como seu beneficiário
              dependente à Assistência Médico - Hospitalar da CBPM desde que
              menor e você obtenha a sua guarda judicial ou obtenha a sua tutela
              ou sua curatela, comprovando também que ele vive sob a sua
              dependência econômica. Assim, eles estarão equiparados aos filhos
              legítimos, conforme nº 03 do parágrafo 2º do artigo 34 da Lei
              Estadual Nº 452/74. Sobre contribuintes e beneficiários
              dependentes, você pode ver mais informações no{' '}
              <Link href="/contribuintes-e-beneficiarios" fontWeight="700">
                link{' '}
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: Entrei com uma ação judicial para cessar os
                  descontos da contribuição mensal para a CBPM. Como faço para
                  cancelar a ação?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <b>Resposta</b>: Sim, Caso o processo ainda não tenha sido
              concluído e não tenha a sentença definitiva, você pode requerer ao
              juízo responsável por tal processo a desistência da ação, para que
              ela não mais tenha prosseguimento, preservando assim todos os seus
              direitos junto à CBPM.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: Ganhei uma ação judicial para cessar os descontos da
                  contribuição mensal para a CBPM, que foi transitada em
                  julgado. Como faço para voltar e restabelecer meus descontos e
                  retornar ao regime de Assistência Médico - Hospitalar para que
                  os meus beneficiários dependentes voltem a ser atendidos na
                  Cruz Azul?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <b>Resposta</b>: A Lei Estadual Nº 452/74 recentemente foi
              alterada com a inclusão do parágrafo único no seu artigo 32,
              permitindo quem por qualquer motivo deixou de ser contribuinte,
              possa requerer sua reinclusão como tal, observados ali os prazos
              de carência. Desta forma, hoje você pode ser reincluído como
              contribuinte da CBPM e voltar a ter o direito de que seus
              beneficiários dependentes sejam atendidos novamente pela Cruz
              Azul, observados os ali previstos prazos de carência de 24 horas
              para casos de urgência e emergência, 24 meses para doenças e
              lesões preexistentes, 300 dias para partos e 180 dias para os
              demais casos, além de voltar a ter condições especiais no Colégio
              da PM e demais benefícios decorrentes. Para tanto, basta você
              pedir por requerimento administrativo na própria CBPM, entrando em
              contato pessoalmente, por telefone{' '}
              <Link href="tel:+5501133153000">(11) 3315-3000</Link> ou por email{' '}
              <Link href="mailto:cadastro@cbpm.sp.gov.br">
                cadastro@cbpm.sp.gov.br
              </Link>
              , a saber maiores detalhes no site.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: Como eu faço para me desligar da CBPM? O que eu
                  perco quando parar de contribuir? Pode ser cancelada ou
                  cessada na folha de pagamento a contribuição para a CBPM?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <b>Resposta</b>: A Caixa Beneficente da Polícia Militar (CBPM) não
              pode atender administrativamente a pedido de cessação da
              contribuição da Assistência Médica, por falta de amparo legal,
              haja vista norma cogente inserta no artigo 32 da Lei Nº 452/74. Ao
              parar de contribuir, você perderá a Assistência Médica pela Cruz
              Azul de São Paulo, e igualmente perderá assistência nos seus
              ambulatórios instalados em Itaquera, Santo Amaro e no Centro
              Médico da Polícia Militar, bem como nas cidades de Santo André,
              Guarulhos, Osasco, Campinas, São Vicente, São José dos Campos e
              Bauru. Outra consequência é a perda de descontos e benefícios nos
              Colégios da Polícia Militar e na aquisição de medicamentos,
              serviços e produtos em nossa rede de parcerias, a exemplo de
              drogarias e demais estabelecimentos relacionados em nosso{' '}
              <Link href="/clube-de-beneficios" fontWeight="700">
                site
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: A CBPM é regulamentada na lei 9656 da Agência
                  Nacional de saúde ? E ao Código de Defesa do Consumidor?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <VStack align="flex-start">
                <Text>
                  <b>Resposta</b>: Não. A CBPM não está sujeita à Lei Federal nº
                  9656 de 03 de junho 1998, que dispõe sobre os planos e seguros
                  privados de assistência à saúde. A CBPM é autarquia do estado
                  regulada pela Lei Estadual Nº 452, de 02 de outubro de 1974,
                  atualizada pela Lei Complementar Nº 1353, de 10 de janeiro de
                  2020. Ao se fazer uma uma análise da Resolução Normativa nº
                  137, de 14 de novembro de 2006, da Agência Nacional de Saúde
                  (ANS), que dispõe sobre as entidades de autogestão no âmbito
                  do sistema de saúde suplementar, observa-se que a estrutura e
                  modalidade de operação da CBPM no que pertine à Assistência
                  Médica se equipara jurídica e economicamente às entidades de
                  autogestão, embora com ressalvas decorrentes da sua
                  personalidade jurídica de direito público.
                </Text>

                <Text>
                  Os conceitos de autogestão e mutualismo levam em consideração
                  elementos como o financiamento, a organização
                  jurídico-institucional e o risco pela variação dos custos da
                  Assistência Médico - Hospitalar.
                </Text>

                <Text fontWeight="700">
                  Enquadrar-se como uma dessas entidades significa:{' '}
                </Text>

                <Text>
                  a) possuir, em sua estrutura organizacional e deliberativa,
                  órgãos de direção superior e coletiva, formado por
                  representantes do segmento corporativo beneficiário dependente
                  do próprio serviço (Lei estadual 452/74, art. 2º);
                </Text>

                <Text>
                  b) dispor de financiamento por um sistema contributivo
                  solidário que envolva a repartição de custos entre os próprios
                  beneficiários dependentes (Lei estadual 452/74, art. 5º);
                </Text>

                <Text>
                  c) ausência de finalidade lucrativa (o que é da essência de
                  uma autarquia).
                </Text>

                <Text>
                  Portanto, respeitadas as notas próprias delineadas pelo seu
                  peculiar regime jurídico de direito público, a CBPM apresenta
                  como características: ausência de finalidade lucrativa,
                  autogestão e o mutualismo, com custeio mediante contribuições
                  dos assistidos em prol de seus beneficiários dependentes, não
                  importando o seu número. A Súmula 608 do STJ reafirma o
                  delineado pela ANS até mesmo no tocante à aplicabilidade do
                  Código de Defesa do Consumidor, uma vez que entidade de
                  autogestão, como a CBPM, não opera em regime de mercado, não
                  tem por objetivo o lucro, há integrantes do grupo de
                  assistidos na sua gestão e objetiva assistir um segmento
                  específico, sem alteração de valores de contribuição não
                  importando o número de beneficiários dependentes. Portanto,
                  também não está a CBPM sujeita ao Código de Defesa do
                  Consumidor. Com todos estes argumentos, há de se considerar
                  que devido a sua regulamentação peculiar como entidade
                  autárquica com personalidade jurídica de direito público,
                  somada a suas características como entidade de autogestão, a
                  CBPM não está regulada pela Lei Federal Nº 9656/98.
                  Igualmente, também não se sujeita ao Código de Defesa do
                  Consumidor.
                </Text>

                <Text>
                  A normatização que regula a CBPM pode ser consultada na
                  internet.
                </Text>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: Como faço para obter um extrato de despesas médicas
                  da CBPM?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <b>Resposta</b>: Entrar em contato com a receita, pelo email{' '}
              <Link href="mailto:receita@cbpm.sp.gov.br">
                receita@cbpm.sp.gov.br
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: Policial Militar, ex contribuinte tem interesse em
                  reingressar como contribuinte da CBPM. Porém tem receio de
                  fazer reinclusão administrativa e futuramente ser prejudicado,
                  pois moveu ação judicial contra a CBPM para não mais ser
                  contribuinte?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <VStack>
                <Text>
                  <b>Resposta</b>: Não há o que temer. No momento ele tem a
                  opção da reintegração administrativa, diante da nova redação
                  da Lei Nº 4523/74, que incluiu o parágrafo único do artigo 32.
                  Maiores informações podem ser vistas no sítio eletrônico da
                  Caixa Beneficente da Polícia Militar, conforme{' '}
                  <Link href="/reinclusao-administrativa" fontWeight="700">
                    link
                  </Link>
                </Text>

                <Text>
                  Com relação a demanda judicial anterior, a Caixa Beneficente,
                  por meio da Procuradoria Geral do Estado, já apresentou suas
                  argumentações de defesa na ocasião, nada mais restando. Caso
                  sentir-se mais seguro, consulte o seu advogado.
                </Text>

                <Text>
                  Portanto, o caminho mais curto, rápido e seguro para sua
                  reinclusão, é solicitar o seu reingresso com base no parágrafo
                  único do artigo 32 da Lei nº 452/74, conforme orientações
                  insertas no link já referido.
                </Text>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: Tenho dúvida a respeito da categoria de
                  beneficiários dependentes do convênio da Cruz Azul
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4}>
              <VStack align="flex-start" fontSize={{ base: 'xs', sm: 'md' }}>
                <Text>
                  <b>Resposta</b>: Existem 04 faixas de categorias, que colocam
                  os beneficiários dependentes em faixas de acomodações para
                  atendimento no sistema de Assistência Médico - Hospitalar, e
                  atualmente estão listadas conforme consta no item 6 do Apenso
                  I do{' '}
                  <Link
                    href="/pdfs/anexos/anexo_a_assistencia_medico_hospitalar.pdf"
                    isExternal
                    fontWeight="700"
                  >
                    Plano de Trabalho{' '}
                  </Link>
                  do atual{' '}
                  <Link
                    href="/pdfs/termos/termo_colaboracao_001_01_2020.pdf"
                    isExternal
                    fontWeight="700"
                  >
                    Termo de colaboração
                  </Link>{' '}
                  Nº 01/20, firmado em 25/03/20, entre a CBPM e a Cruz Azul , e
                  assim, as categorias hoje são definidas na seguinte
                  conformidade:
                </Text>

                <Text> Categoria “A “: oficiais superiores e capitães</Text>

                <Text>
                  {' '}
                  Categoria “B”: demais oficiais e aspirante a oficial
                </Text>

                <Text>
                  Categoria “C”: subtenentes, sargentos e alunos oficiais;
                </Text>

                <Text> Categoria “D”: cabos e soldados.</Text>

                <Text>
                  Pensionistas seguem a categoria que era de seu cônjuge
                  contribuinte.
                </Text>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: Com a possibilidade do reingresso como contribuinte
                  da CBPM de acordo com a Lei Complementar Nº 1353/20, que
                  alterou a Lei Nº 452/74, ele contribuinte militar pode também
                  utilizar a Cruz Azul?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <b>Resposta</b>: Não, o próprio contribuinte não pode utilizar o
              sistema de Assistência Médico - Hospitalar da CBPM, que é feito
              para seus beneficiários dependentes, que na lei são tratados como
              beneficiários dependentes. Assim, quem pode utilizar a Cruz Azul
              são seus beneficiários que se enquadram no artigo 34 da Lei Nº
              452/74, ou seja, cônjuge, pensionistas, filhos até 21 anos, filhos
              inválidos ou incapazes enquanto perdurar a invalidez ou
              incapacidade, mediante processo próprio no Cadastro da CBPM de
              beneficiários dependentes que assim se enquadram. Atende também os
              enteados, tutelados ou curatelados. Na ausência de filhos e
              cônjuge, pode atender os pais, que estejam sob dependência
              econômica do militar. A quantidade de beneficiários dependentes
              não altera o valor do recolhimento da contribuição, contudo, o
              próprio militar não pode ser atendido.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: Existe carência para atendimento dos beneficiários
                  dependentes de contribuinte?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <VStack align="flex-start">
                <Text>
                  <b>Resposta</b>: Para os PM que são contribuintes desde o
                  ingresso na Polícia Militar, e assim permanecem, não existe
                  carência, podendo seus beneficiários dependentes utilizar a
                  Assistência Médico - Hospitalar a qualquer tempo, desde o
                  referido ingresso.
                </Text>

                <Text>
                  A carência existe somente para os PM que deixam de ser
                  contribuintes, e agora, solicitam retorno, no caso pela
                  reinclusão administrativa. Assim, a utilização pelos
                  beneficiários dependentes da Assistência Médico - Hospitalar
                  está vinculada a uma carência estabelecida pelo parágrafo
                  único do artigo 32 da Lei Nº 452/74, na seguinte conformidade
                  da letra legal:
                </Text>

                <Text>
                  Os contribuintes que tenham, por qualquer motivo, perdido essa
                  qualidade, poderão requerer sua reinclusão, desde que tenham
                  permanecido no rol deste artigo e cumpram os seguintes prazos
                  de carência:
                </Text>

                <Text>
                  1. 24 (vinte e quatro) horas para casos de urgência e
                  emergência;
                </Text>

                <Text>
                  2. 24 (vinte e quatro) meses para doenças e lesões
                  preexistentes;
                </Text>

                <Text>3. 300 (trezentos) dias para partos a termo;</Text>

                <Text>
                  4. 180 (cento e oitenta) dias para os demais casos. (NR) –
                  Parágrafo único acrescentado pela Lei{' '}
                </Text>
                <ChakraLink
                  href="https://www.al.sp.gov.br/norma/192880"
                  isExternal
                  fontWeight="700"
                >
                  Lei Complementar nº 1.353, de 10/01/2020.
                </ChakraLink>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          allowToggle
          border="1px"
          borderTop="none"
          borderColor="gray.500"
          mb={5}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: 'sm', sm: 'md' }}
                >
                  Pergunta: Com o reingresso administrativo de contribuinte,
                  quanto tempo de carência poderá seus beneficiários dependentes
                  passar por consultas ou exames?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} fontSize={{ base: 'xs', sm: 'md' }}>
              <b>Resposta</b>: As consultas e os exames se encaixam no item 4 do
              parágrafo único do artigo 32 da Lei 452/74, que trata do período
              de carência no reingresso administrativo de contribuinte. Assim
              sendo, a contar da data de reingresso do contribuinte na CBPM, o
              prazo é de 180 dias de carência para que seus beneficiários
              dependentes possam passar por consultas e exames no sistema de
              Assistência Médico - Hospitalar da CBPM, no caso, na Cruz Azul SP.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Fragment>
  );
};

export default FrequentlyQuestions;
