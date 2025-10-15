import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { GoClock, GoLocation, GoMail } from 'react-icons/go';

export const ContactsWideVersion = () => {
  return (
    <VStack
      align="flex-start"
      maxW="700px"
      w="100%"
      mb={10}
      m={{ md: '0 auto', xl: '0' }}
    >
      <Text fontWeight="700" alignSelf="flex-end">
        Assessorias Técnicas:
      </Text>

      <HStack justify="space-between" align="flex-start" w="100%">
        <HStack>
          <Text fontWeight="700">PABX/Troncos: </Text>
          <Text fontSize="sm">(11) 3315-3000</Text>
          <Text fontSize="sm">(11) 3315-3100</Text>
        </HStack>

        <HStack>
          <Text fontWeight="700">Cadastro: </Text>
          <Text fontSize="sm">(11) 3315-3097</Text>
          <Text fontSize="sm">(11) 3315-3159</Text>
        </HStack>
      </HStack>

      <HStack
        border="1px"
        borderColor="blue.default"
        borderRadius="2xl"
        justify="space-between"
        p={2}
        w="100%"
      >
        <HStack>
          <Text fontWeight="700">Finanças: </Text>
          <Text fontSize="sm">(11) 3315-3059</Text>
        </HStack>

        <HStack>
          <Text fontWeight="700">Termo de Colaboração: </Text>
          <Text fontSize="sm">(11) 3315-3096</Text>
          <Text fontSize="sm">(11) 3315-3070</Text>
        </HStack>
      </HStack>

      <HStack justify="space-between" w="100%">
        <HStack>
          <Text fontWeight="700">Recepção:</Text>
          <Text fontSize="sm">(11) 3315-3025 /</Text>
          <Text fontSize="sm">(11) 3315-3031</Text>
        </HStack>

        <HStack>
          <Text fontWeight="700">Jurídica:</Text>
          <Text fontSize="sm">(11) 3315-3009 /</Text>
          <Text fontSize="sm">(11) 3315-3005</Text>
        </HStack>
      </HStack>

      <HStack
        border="1px"
        borderColor="blue.default"
        borderRadius="2xl"
        p={2}
        justify="space-between"
        w="100%"
      >
        <HStack>
          <Text fontWeight="700">Portaria:</Text>
          <Text fontSize="sm">(11) 3315-3041</Text>
        </HStack>

        <HStack>
          <Text fontWeight="700">Finanças:</Text>
          <Text fontSize="sm">(11) 3315-3197 /</Text>
          <Text fontSize="sm">(11) 3315-3017</Text>
        </HStack>
      </HStack>

      <HStack justify="space-between" w="100%">
        <HStack>
          <Text fontWeight="700">Contabilidade:</Text>
          <Text fontSize="sm">(11) 3315-3067</Text>
        </HStack>

        <HStack>
          <Text fontWeight="700">Patrimônio:</Text>
          <Text fontSize="sm">(11) 3315-3116 /</Text>
          <Text fontSize="sm">(11) 3315-3042</Text>
        </HStack>
      </HStack>

      <HStack
        border="1px"
        borderColor="blue.default"
        borderRadius="2xl"
        p={2}
        justify="space-between"
        w="100%"
      >
        <HStack>
          <Text fontWeight="700">Recursos Humanos:</Text>
          <Text fontSize="sm">(11) 3315-3060</Text>
        </HStack>

        <HStack>
          <Text fontWeight="700">
            Presidência <br /> Chefia de Gabinete
          </Text>

          <Text fontSize="sm">(11) 3315-3170</Text>
        </HStack>
      </HStack>

      <HStack>
        <HStack>
          <Text fontWeight="700">Serviços:</Text>
          <Text fontSize="sm">(11) 3315-3003</Text>
        </HStack>
      </HStack>

      <HStack
        border="1px"
        borderColor="blue.default"
        borderRadius="2xl"
        p={2}
        justify="space-between"
        w="100%"
      >
        <HStack>
          <Text fontWeight="700">Informática</Text>
          <Text fontSize="sm">(11) 3315-3163</Text>
          <Text fontSize="sm">(11) 3315-3127</Text>
        </HStack>

        <HStack>
          <GoMail size="28px" />
          <Text fontWeight="700">
            E-mails: <br />
          </Text>

          <VStack align="flex-start">
            <Text fontSize="sm">faleconosco@cbpm.sp.gov.br</Text>
            <Text fontSize="sm">cadastro@cbpm.sp.gov.br</Text>
          </VStack>
        </HStack>
      </HStack>

      <HStack
        justify="space-between"
        w="100%"
        fontWeight="bold"
        align="flex-start"
      >
        <HStack>
          <Box alignSelf="flex-start">
            <GoLocation size="28px" />
          </Box>

          <div>
            <Text>
              Localização: <br />
              R. Alfredo Maia, 218 – Luz <br />
              São Paulo/SP – CEP: 01106 – 010
            </Text>
          </div>
        </HStack>

        <HStack fontWeight="bold" align="flex-start" pb={8}>
          <Box alignSelf="flex-start">
            <GoClock size="28px" />
          </Box>

          <div>
            <Text>
              Horário de atendimento <br />
              Dias úteis, das 8h às 17h
            </Text>
          </div>
        </HStack>
      </HStack>
    </VStack>
  );
};
