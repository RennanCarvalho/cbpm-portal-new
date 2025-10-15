import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import RequestCredential from './RequestCredential';

const DependenteAndPensionistaCredential = (props: any) => {
  return (
    <VStack justify="center">
      {props.props.credentialData.map((item: any, index: any) => {
        return (
          <VStack key={index} minW="320px" maxW="400px" w="100%" p={2}>
            <VStack border="1px" borderRadius="xl" w="100%" p={5}>
              <Flex justify="space-between" w="100%">
                <Box>
                  <Image
                    alt="Insígnia CBPM"
                    src="/insignia_cbpm_pequena.jpg"
                    h={{ base: '50px', sm: '50px', md: '60px', lg: '70px' }}
                    w="90%"
                  />
                </Box>

                <Box>
                  <Text
                    fontWeight="700"
                    fontSize={{ base: 'md', sm: 'md', md: 'lg', lg: 'lg' }}
                    textAlign="center"
                  >
                    CBPM <br />
                    AMH
                  </Text>
                </Box>
              </Flex>

              <Divider color="black.default" />

              <Fragment>
                <Flex
                  justify="space-between"
                  w="100%"
                  align="center"
                  fontSize="xs"
                >
                  <Box>
                    <Text fontWeight="700">Beneficiário(a)</Text>
                    <Text>{item.BENEFICIARIO}</Text>
                  </Box>

                  <Box>
                    <Image
                      alt="Imagem de um qrcode"
                      src="/qrcode.png"
                      h={{ base: '50px', sm: '50px', md: '60px', lg: '70px' }}
                      w="90%"
                    />
                  </Box>
                </Flex>

                <HStack
                  maxW="600px"
                  w="100%"
                  justify="space-between"
                  fontSize="xs"
                >
                  <VStack w="200px" align="flex-start" maxW="200px">
                    <Box fontSize="xs">
                      <Text fontWeight="700">CPF</Text>
                      <Text>{item.CPF}</Text>
                    </Box>

                    <Box alignSelf="flex-start">
                      <Text fontWeight="700">Credencial</Text>
                      <Text>{item.NUMERO_CREDENCIAL}</Text>
                    </Box>
                  </VStack>

                  <VStack w="200px" align="flex-start" maxW="200px">
                    <Box>
                      <Text fontWeight="700">Data de Nascimento</Text>
                      <Text>{item.DATA_NASCIMENTO}</Text>
                    </Box>

                    <Box>
                      <Text fontWeight="700">Categoria</Text>
                      <Text>{item.CATEGORIA}</Text>
                    </Box>
                  </VStack>

                  <VStack w="200px" align="flex-start" maxW="200px">
                    <Box alignSelf="flex-start">
                      <Text fontWeight="700">Sexo</Text>
                      <Text>{item.SEXO}</Text>
                    </Box>

                    <Box alignSelf="flex-start">
                      <Text fontWeight="700">Re do Contribuinte</Text>
                      <Text>{item.RE_CONTUIBUINTE}</Text>
                    </Box>
                  </VStack>
                </HStack>
              </Fragment>
            </VStack>
          </VStack>
        );
      })}

      <Box mt={5}>
        <RequestCredential {...props.props.credentialData[0]} />
      </Box>
    </VStack>
  );
};

export default DependenteAndPensionistaCredential;
