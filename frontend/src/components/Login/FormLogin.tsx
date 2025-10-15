import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SignInContext } from '../../contexts/SignInContext';
import Link from '../Link';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(SignInContext);

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');


  async function onSubmit({ cpf, senha }: any) {
    await signIn({ cpf, senha });
  }
  

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isButtonDisabled = !(cpf.length === 11 && senha.length > 1);


  return (
    <Box mt={3} mb={{ base: 10, md: 10, lg: 0 }} maxW="350px" w="100%">
      <Text alignSelf="flex-start" fontSize="1.4rem" textAlign={'center'}>
        Acesse sua conta
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}>
          <FormControl isInvalid={errors.cpf}>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'md', sm: 'md', md: 'md', lg: 'lg' }}
              htmlFor='cpf'
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
              {...register('cpf', {
                required: 'Digite seu CPF',
                minLength: { value: 11, message: 'CPF inválido' },
              })}
              type='number'
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <FormErrorMessage>
              {errors.cpf && errors.cpf.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.senha}>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'md', sm: 'md', md: 'md', lg: 'lg' }}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              htmlFor='senha'
            >
              <Text>Senha</Text>

            </FormLabel>
            <Flex flexDirection={'row'} >
            <Input
              id="senha"
              placeholder="Digite sua senha"
              bg="gray.200"
              borderRadius="15px 0 0 15px"
              borderColor="blue.default"
              type={isPasswordVisible ? 'text' : 'password'}
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
              {...register('senha', {
                required: 'Digite sua senha',
              })}
              value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            
            <Flex
              onClick={togglePasswordVisibility}
              aria-label='visualizar senha'
              width={'80px'}
              fontSize={'1.1rem'}
              justifyContent={'center'}
              alignItems={'center'}
              border={'1px solid'}
              borderLeft={'none'}
              borderColor={'blue.crystal'}
              borderRadius={'0 15px 15px 0'}
              backgroundColor={'gray.200'}
              cursor={'pointer'}
              >
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye /> }
              </Flex>
            </Flex>

            <FormErrorMessage>
              {errors.senha && errors.senha.message}
            </FormErrorMessage>
          </FormControl>    
          <Text
            alignSelf="flex-start"
            fontWeight="700"
            fontSize="sm"
            color="blue.default"
          >
            <Link href="/recuperar-senha">Esqueci minha senha</Link>
          </Text>

          <Box
            alignSelf={{ sm: 'center', md: 'center', lg: 'flex-end' }}
            width={'100%'}
          >
            <Button
              type="submit"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              bg="blue.crystal"
              color="white.default"
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              width={'100%'}
              borderRadius="3xl"
              _hover={{ color: 'none' }}
              isDisabled={isButtonDisabled} // Disable button based on condition
              _disabled={{
                bg: 'blue.clear', // Background color when button is disabled
                cursor: 'not-allowed', // Change cursor when disabled
              }}
            >
              ENTRAR
            </Button>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};
