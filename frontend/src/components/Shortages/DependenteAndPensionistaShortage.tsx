import {
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import FormShowUserData from '../FormShowUserData';

const DependenteAndPensionistaShortage = (props: any) => {
  return (
    <Fragment>
      <Flex
        mt={5}
        flexWrap={{ base: 'wrap', sm: 'wrap', md: 'wrap', lg: 'nowrap' }}
      >
        <FormShowUserData
          formLabel="Nome"
          userProps={props.data.nome}
          width={'650px'}
        />

        <FormShowUserData formLabel="CPF" userProps={props.data.cpf} />

        <FormShowUserData formLabel="Status" userProps={props.data.status} />
      </Flex>

      <Flex flexWrap={{ base: 'wrap', sm: 'wrap', md: 'wrap', lg: 'nowrap' }}>
        <FormShowUserData
          formLabel="Nome Social"
          userProps={props.data.nomeSocial}
          width={'650px'}
        />

        <FormShowUserData formLabel="Sexo" userProps={props.data.sexo} />

        <FormShowUserData
          formLabel="Categoria"
          userProps={props.categoria[0].Categoria}
        />
      </Flex>

      <Flex flexWrap={{ base: 'wrap', sm: 'wrap', md: 'wrap', lg: 'nowrap' }}>
        <FormShowUserData
          formLabel="Data de Nascimento"
          userProps={props.data.dataNascimento}
        />

        <FormShowUserData formLabel="Idade" userProps={props.data.idade} />

        <FormShowUserData
          formLabel="Parentesco"
          userProps={props.data.parentesco}
        />

        <FormShowUserData
          formLabel="Filho Inválido"
          userProps={props.data.invalido}
        />

        <FormShowUserData
          formLabel="Credencial"
          userProps={props.data.credencial}
        />
      </Flex>

      {props.carencias.length !== 0 ? (
        <HStack justify="space-between" mt={10}>
          <VStack>
            <Text alignSelf="flex-start" fontWeight="700">
              CARÊNCIA
            </Text>
            <List spacing={3}>
              <ListItem>
                {props.carencias[0].DESCRICAO1 ? (
                  <ListIcon as={FaCheckCircle} color="green.500" />
                ) : (
                  <ListIcon as={BsFillXCircleFill} color="red.500" />
                )}
                URGÊNCIA E EMERGÊNCIA (24 HORAS)
              </ListItem>

              <ListItem>
                {props.carencias[0].DESCRICAO2 ? (
                  <ListIcon as={FaCheckCircle} color="green.500" />
                ) : (
                  <ListIcon as={BsFillXCircleFill} color="red.500" />
                )}
                DOENÇAS E LESÕES PREEXISTENTES (24 MESES)
              </ListItem>

              <ListItem>
                {props.carencias[0].DESCRICAO3 ? (
                  <ListIcon as={FaCheckCircle} color="green.500" />
                ) : (
                  <ListIcon as={BsFillXCircleFill} color="red.500" />
                )}
                PARTOS A TERMO (300 DIAS)
              </ListItem>

              <ListItem>
                {props.carencias[0].DESCRICAO4 ? (
                  <ListIcon as={FaCheckCircle} color="green.500" />
                ) : (
                  <ListIcon as={BsFillXCircleFill} color="red.500" />
                )}
                DEMAIS CASOS (180 DIAS)
              </ListItem>
            </List>
          </VStack>

          <VStack>
            <Text alignSelf="flex-start" fontWeight="700">
              TERMINO DA CARÊNCIA
            </Text>
            <List spacing={3}>
              <ListItem>{props.carencias[0].TERMINO_1}</ListItem>
              <ListItem>{props.carencias[0].TERMINO_2}</ListItem>
              <ListItem>{props.carencias[0].TERMINO_3}</ListItem>
              <ListItem>{props.carencias[0].TERMINO_4}</ListItem>
            </List>
          </VStack>
        </HStack>
      ) : (
        <Tag colorScheme="green" mt={5} fontSize="md" fontWeight="700">
          NÃO POSSUI CARÊNCIA
        </Tag>
      )}

      <VStack mt={10} align="flex-start" mb={10}>
        <Text fontWeight="700">POLICIAL</Text>

        <Flex
          w="100%"
          flexWrap={{ base: 'wrap', sm: 'wrap', md: 'wrap', lg: 'nowrap' }}
        >
          <FormShowUserData
            formLabel="Nome"
            userProps={props.data.nomeContribuinte}
          />

          <FormShowUserData formLabel="RE" userProps={props.data.re} />

          <FormShowUserData
            formLabel="Posto/Graduação"
            userProps={props.data.posto}
          />

          <FormShowUserData
            formLabel="Contribuinte"
            userProps={props.data.contribuinte ? 'SIM' : 'NÃO'}
          />
        </Flex>
      </VStack>
    </Fragment>
  );
};

export default DependenteAndPensionistaShortage;
