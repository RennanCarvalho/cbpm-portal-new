import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { GoClock, GoLocation, GoMail } from 'react-icons/go';

export const ContactsSmallVersion = () => {
  return (
    <Box w="100%" fontSize={{ base: 'xs', sm: 'md' }}>
      <VStack align="flex-start" mb={10} w="100%">
        <VStack justify="space-between" align="flex-start" w="100%">
          <Text fontWeight="700" alignSelf="flex-end">
            Assessorias Técnicas:
          </Text>

          <Flex w="100%" justify="space-between">
            <Text fontWeight="700">PABX/Troncos: </Text>
            <HStack>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3000</Text>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3100</Text>
            </HStack>
          </Flex>

          <HStack
            border="1px"
            borderColor="blue.default"
            borderRadius="2xl"
            justify="space-between"
            p={2}
            w="100%"
          >
            <Text fontWeight="700">Finanças: </Text>
            <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3059</Text>
          </HStack>

          <Flex w="100%" justify="space-between">
            <Text fontWeight="700">Recepção:</Text>
            <HStack>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3025 /</Text>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3031</Text>
            </HStack>
          </Flex>

          <HStack
            border="1px"
            borderColor="blue.default"
            borderRadius="2xl"
            justify="space-between"
            p={2}
            w="100%"
          >
            <Text fontWeight="700">Portaria:</Text>
            <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3041</Text>
          </HStack>

          <Flex w="100%" justify="space-between">
            <Text fontWeight="700">Contabilidade:</Text>
            <HStack>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3067</Text>
            </HStack>
          </Flex>

          <HStack
            border="1px"
            borderColor="blue.default"
            borderRadius="2xl"
            justify="space-between"
            p={2}
            w="100%"
          >
            <Text fontWeight="700">Recursos Humanos:</Text>
            <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3060</Text>
          </HStack>

          <Flex w="100%" justify="space-between">
            <Text fontWeight="700">Serviços:</Text>
            <HStack>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3003</Text>
            </HStack>
          </Flex>

          <HStack
            border="1px"
            borderColor="blue.default"
            borderRadius="2xl"
            justify="space-between"
            p={2}
            w="100%"
          >
            <Text fontWeight="700">Informática</Text>
            <HStack>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3163</Text>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3127</Text>
            </HStack>
          </HStack>
        </VStack>

        <VStack justify="space-between" align="flex-start" w="100%">
          <Flex w="100%" justify="space-between">
            <Text fontWeight="700">Cadastro: </Text>

            <HStack>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3097</Text>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3159</Text>
            </HStack>
          </Flex>

          <HStack
            border="1px"
            borderColor="blue.default"
            borderRadius="2xl"
            justify="space-between"
            p={2}
            w="100%"
          >
            <Text fontWeight="700">Termo de Colaboração: </Text>
            <HStack>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3096</Text>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3070</Text>
            </HStack>
          </HStack>
        </VStack>

        <Flex w="100%" justify="space-between">
          <Text fontWeight="700">Jurídica:</Text>

          <HStack>
            <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3009 /</Text>
            <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3005</Text>
          </HStack>
        </Flex>

        <HStack
          border="1px"
          borderColor="blue.default"
          borderRadius="2xl"
          justify="space-between"
          p={2}
          w="100%"
        >
          <Text fontWeight="700">Finanças:</Text>
          <HStack>
            <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3197 /</Text>
            <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3017</Text>
          </HStack>
        </HStack>

        <Flex w="100%" justify="space-between">
          <Text fontWeight="700">Patrimônio:</Text>

          <HStack>
            <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3116 /</Text>
            <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3042</Text>
          </HStack>
        </Flex>

        <HStack
          border="1px"
          borderColor="blue.default"
          borderRadius="2xl"
          justify="space-between"
          p={2}
          w="100%"
        >
          <Text fontWeight="700">
            Presidência <br /> Chefia de Gabinete
          </Text>

          <Text fontSize={{ base: 'xs', sm: 'sm' }}>(11) 3315-3170</Text>
        </HStack>

        <HStack
          border="1px"
          borderColor="blue.default"
          borderRadius="2xl"
          p={2}
          justify="space-between"
          w="100%"
        >
          <HStack w="100%" justify="space-between">
            <HStack>
              <GoMail size="28px" />
              <Text fontWeight="700">
                E-mails: <br />
              </Text>
            </HStack>

            <VStack align="flex-start">
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>
                faleconosco@cbpm.sp.gov.br
              </Text>
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>
                cadastro@cbpm.sp.gov.br
              </Text>
            </VStack>
          </HStack>
        </HStack>

        <VStack fontWeight="bold" align="flex-start">
          <HStack>
            <GoLocation size="28px" />
            <Text>Localização:</Text>
          </HStack>

          <HStack>
            <GoClock size="28px" />
            <Text>
              R. Alfredo Maia, 218 – Luz <br />
              São Paulo/SP – CEP: 01106 – 010
            </Text>
          </HStack>

          <HStack justify="space-between" w="100%">
            <VStack fontWeight="bold" align="flex-start">
              <Text>Horário de atendimento:</Text>

              <Text>Dias úteis, das 8h às 17h</Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
