import {
  Button,
  FormErrorMessage,
  Img,
  Input,
  Text,
  VStack,
  FormLabel,
  Box,
} from '@chakra-ui/react';
import Link from '../Link';
import React from 'react';

export const CreateAccount = () => {
  const [cpf, setCpf] = React.useState('');

  const persistCPF = () => {
    localStorage.removeItem('persisted-cpf');
    localStorage.setItem('persisted-cpf', cpf);
  };
  return (
    <VStack
      spacing="2rem"
      alignItems="center"
      justifyContent="center"
      maxW="350px"
      w="100%"
    >
      <Text fontSize="1.4rem" textAlign={'center'}>
        Crie sua conta
      </Text>
      <Box width={'100%'}>
        <FormLabel
          fontWeight="700"
          fontSize={{ base: 'md', sm: 'md', md: 'md', lg: 'lg' }}
        >
          CPF
        </FormLabel>
        <Input
          id="cpf"
          placeholder="Digite seu CPF"
          bg="gray.200"
          borderRadius="15px"
          borderColor="blue.default"
          h="40px"
          _placeholder={{ color: 'black.default' }}
          _hover={{ borderColor: 'none' }}
          type="number"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </Box>

      <Link href="/cadastrar" color="white.default" width={'100%'}>
        <Button
          type="submit"
          fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
          bg={'blue.crystal' }
          color="white.default"
          px={{ base: 7, sm: 7, md: 8, lg: 10 }}
          py={5}
          width={'100%'}
          borderRadius="3xl"
          _hover={{ color: 'none' }}
          onClick={persistCPF}
          disabled={!(cpf.length == 11)}
          _disabled={{
            bg: 'blue.clear',  // Background color when button is disabled
            cursor: 'not-allowed',  // Change the cursor to indicate the button is disabled
          }}
        >
          CRIAR
        </Button>
      </Link>
    </VStack>
  );
};
