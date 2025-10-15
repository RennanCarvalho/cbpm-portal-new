import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export const Form = () => {
  const { register } = useForm();

  return (
    <HStack alignItems="flex-start" spacing="4rem">
      <VStack>
        <FormControl id="cpf" isRequired>
          <FormLabel fontWeight="700" fontSize="md">
            CPF
          </FormLabel>

          <Input
            placeholder="Digite seu CPF"
            bg="gray.200"
            borderRadius="15px"
            borderColor="blue.default"
            w="350px"
            h="40px"
            fontSize="md"
            _placeholder={{ color: 'black.default', fontSize: 'md' }}
            _hover={{ borderColor: 'none' }}
            {...register('cpf')}
          />
        </FormControl>

        <FormControl id="re" isRequired>
          <FormLabel fontWeight="700" fontSize="md">
            RE
          </FormLabel>

          <Input
            placeholder="Digite seu RE"
            bg="gray.200"
            borderRadius="15px"
            borderColor="blue.default"
            w="350px"
            h="40px"
            fontSize="md"
            _placeholder={{ color: 'black.default', fontSize: 'md' }}
            _hover={{ borderColor: 'none' }}
            {...register('re')}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel fontWeight="700" fontSize="md">
            E-mail
          </FormLabel>

          <Input
            placeholder="Digite seu e-mail"
            bg="gray.200"
            borderRadius="15px"
            borderColor="blue.default"
            w="350px"
            h="40px"
            fontSize="md"
            _placeholder={{ color: 'black.default', fontSize: 'md' }}
            _hover={{ borderColor: 'none' }}
            {...register('email')}
          />
        </FormControl>

        <FormControl id="confirmaEmail" isRequired>
          <FormLabel fontWeight="700" fontSize="md">
            Confirmar E-mail
          </FormLabel>

          <Input
            placeholder="Confirme seu e-mail"
            bg="gray.200"
            borderRadius="15px"
            borderColor="blue.default"
            w="350px"
            h="40px"
            fontSize="md"
            _placeholder={{ color: 'black.default', fontSize: 'md' }}
            _hover={{ borderColor: 'none' }}
            {...register('confirmaEmail')}
          />
        </FormControl>

        <FormControl id="celular" isRequired>
          <FormLabel fontWeight="700" fontSize="md">
            Celular
          </FormLabel>

          <Input
            placeholder="Digite seu Celular"
            bg="gray.200"
            borderRadius="15px"
            borderColor="blue.default"
            w="350px"
            h="40px"
            fontSize="md"
            _placeholder={{ color: 'black.default', fontSize: 'md' }}
            _hover={{ borderColor: 'none' }}
            {...register('telCelular')}
          />
        </FormControl>
      </VStack>

      <VStack>
        <FormControl id="rg" isRequired>
          <FormLabel fontWeight="700" fontSize="md">
            RG
          </FormLabel>

          <Input
            placeholder="Digite seu RG"
            bg="gray.200"
            borderRadius="15px"
            borderColor="blue.default"
            w="350px"
            h="40px"
            fontSize="md"
            _placeholder={{ color: 'black.default', fontSize: 'md' }}
            _hover={{ borderColor: 'none' }}
            {...register('rg')}
          />
        </FormControl>

        <FormControl id="dtnascimento" isRequired>
          <FormLabel fontWeight="700" fontSize="md">
            Data de Nascimento
          </FormLabel>

          <Input
            placeholder="Digite sua data de nascimento"
            bg="gray.200"
            borderRadius="15px"
            borderColor="blue.default"
            w="350px"
            h="40px"
            fontSize="md"
            _placeholder={{ color: 'black.default', fontSize: 'md' }}
            _hover={{ borderColor: 'none' }}
            {...register('dtnascimento')}
          />
        </FormControl>

        <FormControl id="senha" isRequired>
          <FormLabel fontWeight="700" fontSize="md">
            Senha
          </FormLabel>

          <Input
            placeholder="Digite sua senha"
            bg="gray.200"
            borderRadius="15px"
            borderColor="blue.default"
            w="350px"
            h="40px"
            fontSize="md"
            _placeholder={{ color: 'black.default', fontSize: 'md' }}
            _hover={{ borderColor: 'none' }}
            {...register('senha')}
          />
        </FormControl>

        <FormControl id="confirmaSenha" isRequired>
          <FormLabel fontWeight="700" fontSize="md">
            Confirmar Senha
          </FormLabel>

          <Input
            placeholder="Confirme sua senha"
            bg="gray.200"
            borderRadius="15px"
            borderColor="blue.default"
            w="350px"
            h="40px"
            fontSize="md"
            _placeholder={{ color: 'black.default', fontSize: 'md' }}
            _hover={{ borderColor: 'none' }}
            {...register('confirmaSenha')}
          />
        </FormControl>
      </VStack>
    </HStack>
  );
};
