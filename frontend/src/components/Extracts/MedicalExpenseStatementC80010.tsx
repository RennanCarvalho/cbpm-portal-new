import {
  Button,
  Input,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { setupAPIClient } from '../../services/setupAPIClient';
import Link from '../Link';
import { MedicalExpenseStatementC80010PDF } from '../PrintPDF/MedicalExpenseStatementC80010PDF';
import MedicalExpenseStatementC80010TableData from './MedicalExpenseStatementC80010TableData';

type Title = {
  title: string;
};

type SearchData = {
  periodoInicial: string;
  periodoFinal: string;
};

const MedicalExpenseStatementC80010 = ({ title }: Title) => {
  const [data, setData] = useState<any>();
  const [load, setLoad] = useState<boolean>();

  const api = setupAPIClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchData>({ mode: 'onSubmit' });

  async function handleSearch(payload: SearchData): Promise<void> {
    setLoad(false);
    try {
      const response = await api.get('/user/medical-expensec800-extract', {
        params: {
          periodoInicial: payload.periodoInicial,
          periodoFinal: payload.periodoFinal,
        },
      });

      setLoad(true);
      setData(response.data);
    } catch (error: any) {
      setLoad(true);
      console.log(error);
    }
  }

  async function handleReport(payload: SearchData): Promise<any> {
    setLoad(false);
    try {
      const response = await api.get('/user/medical-expensec800-extract/', {
        params: {
          periodoInicial: payload.periodoInicial,
          periodoFinal: payload.periodoFinal,
        },
      });

      setLoad(true);
      MedicalExpenseStatementC80010PDF(
        response.data,
        payload.periodoInicial,
        payload.periodoFinal,
      );
    } catch (error: any) {
      setLoad(true);
      console.log(error);
    }
  }

  function handleClear(): void {
    setData('');
    reset();
  }

  return (
    <VStack>
      <Text
        as="u"
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '3xl' }}
        fontWeight="700"
        mb="30px"
        textAlign="center"
        mt="80px"
      >
        {title}
      </Text>

      <form onSubmit={handleSubmit(handleSearch)}>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing={10}>
          <VStack spacing={1} maxW="400px" w="100%">
            <Text>Período Inicial</Text>

            <Input
              maxW="400px"
              w="100%"
              py={2}
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              borderColor="gray.default"
              bg="gray.default"
              boxShadow="0 5px 5px #C0C0C0"
              placeholder="MM/AAAA"
              textAlign="center"
              _placeholder={{ textAlign: 'center', color: 'black.default' }}
              {...register('periodoInicial', {
                required: 'Campo obrigatório',
                maxLength: {
                  value: 7,
                  message: 'Deve ter no máximo 7 caracteres no formato mm/aaaa',
                },
                pattern: {
                  value: /(0[1-9]|1[0-2])[^\w\d\r\n:](\d{4})/,
                  message: 'Formato correto mm/aaaa',
                },
              })}
            />

            {errors.periodoInicial && (
              <Text color="red">{errors.periodoInicial.message}</Text>
            )}
          </VStack>

          <VStack spacing={1} maxW="400px" w="100%">
            <Text textAlign="center">Período Final</Text>

            <Input
              maxW="400px"
              w="100%"
              py={2}
              fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
              border="1px"
              borderColor="gray.default"
              bg="gray.default"
              boxShadow="0 5px 5px #C0C0C0"
              placeholder="MM/AAAA"
              textAlign="center"
              _placeholder={{ textAlign: 'center', color: 'black.default' }}
              {...register('periodoFinal', {
                required: 'Campo obrigatório',
                maxLength: {
                  value: 7,
                  message: 'Deve ter no máximo 7 caracteres no formato mm/aaaa',
                },
                pattern: {
                  value: /(0[1-9]|1[0-2])[^\w\d\r\n:](\d{4})/,
                  message: 'Formato correto mm/aaaa',
                },
              })}
            />

            {errors.periodoFinal && (
              <Text color="red">{errors.periodoFinal.message}</Text>
            )}
          </VStack>
        </SimpleGrid>

        <SimpleGrid
          columns={{ base: 2, sm: 2, md: 4, lg: 4 }}
          spacing={5}
          mt={5}
          justifyItems="center"
        >
          <Link href="/area-restrita/servicos/extratos">
            <Button
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              bg="blue.default"
              color="white.default"
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              borderRadius="3xl"
              _hover={{ color: 'none' }}
            >
              Voltar
            </Button>
          </Link>

          <Button
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            type="submit"
            bg="blue.default"
            color="white.default"
            px={{ base: 7, sm: 7, md: 8, lg: 10 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
          >
            Consultar
          </Button>

          <Button
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={{ base: 7, sm: 7, md: 8, lg: 10 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
            onClick={() => handleClear()}
          >
            Limpar
          </Button>

          <Button
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            type="submit"
            onClick={handleSubmit(handleReport)}
            bg="blue.default"
            color="white.default"
            px={{ base: 3, sm: 7, md: 8, lg: 10 }}
            py={2}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
          >
            Imprimir Extrato
          </Button>
        </SimpleGrid>

        <VStack>
          <Text
            fontWeight="700"
            fontSize={{ base: 'xs', sm: 'sm', md: 'md', lg: 'md' }}
            textAlign="center"
            pt={5}
          >
            DOCUMENTO PARA SIMPLES CONFERÊNCIA
          </Text>

          {load === false ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : (
            ''
          )}
        </VStack>
      </form>

      {data ? <MedicalExpenseStatementC80010TableData {...data} /> : ''}
    </VStack>
  );
};

export default MedicalExpenseStatementC80010;
