import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { UserProps } from '../../DTO/UserDTO';

const ShowUserData = (props: UserProps) => {
  return (
    <Container
      maxW="1280px"
      w="100%"
      minH="100vh"
      bgImage="url('/bg_cbpm.png')"
      bgSize="650px 650px"
      bgRepeat="no-repeat"
      bgPosition="top right"
      mb={10}
    >
      <Heading
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
        as="h1"
        textDecor="underline"
        textAlign="center"
        whiteSpace="nowrap"
        mt={10}
        mb={10}
      >
        DADOS CADASTRAIS
      </Heading>

      <VStack w="100%">
        <SimpleGrid
          columns={{ md: 2, lg: 4 }}
          spacing={2}
          w="100%"
          justifyContent="center"
        >
          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Nome
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.nome}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              CPF
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.cpf}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Contribuinte
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.contribuinte ? props.contribuinte : 'NÃO SE APLICA'}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Sexo
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.sexo}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>
        </SimpleGrid>

        <SimpleGrid
          columns={{ md: 2, lg: 4 }}
          spacing={2}
          w="100%"
          justifyContent="center"
        >

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Nome Social
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.nomeSocial ? props.nomeSocial : 'NÃO POSSUI'}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Data de Nascimento
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.dataNascimento}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Idade
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.idade}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Estado Civil
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.estadoCivil}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

        </SimpleGrid>

        <SimpleGrid
          columns={{ md: 2, lg: 4 }}
          spacing={2}
          w="100%"
          justifyContent="center"
        >
          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Posto
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={
                props.postoPolicial ? props.postoPolicial : 'NÃO SE APLICA'
              }
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>
          
          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              RE
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.identidade ? props.identidade : 'NÃO SE APLICA'}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Aposentado
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.NumeroSPPrev ? 'SIM' : 'NÃO SE APLICA'}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Número SPPrev
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.NumeroSPPrev ? props.NumeroSPPrev : 'NÃO POSSUI'}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              RG
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.rg}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Dígito RG
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.rgdg ? props.rgdg : 'NÃO INFORMADO'}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>
        </SimpleGrid>

        <SimpleGrid
          pt={6}
          columns={{ md: 2, lg: 4 }}
          spacing={2}
          w="100%"
          justifyContent="center"
        >
          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Logradouro
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.logradouro}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Número
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.numero}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Complemento
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.complemento ? props.complemento : 'NÃO INFORMADO'}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Bairro
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.bairro}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>
        </SimpleGrid>

        <SimpleGrid
          columns={{ md: 2, lg: 4 }}
          spacing={2}
          w="100%"
          justifyContent="center"
        >
          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Cidade
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.cidade}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              UF
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.ufIdentidade}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              CEP
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.cep}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              E-mail
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.email}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>
        </SimpleGrid>

        <SimpleGrid
          pt={6}
          columns={{ md: 2, lg: 4 }}
          spacing={2}
          w="100%"
          justifyContent="center"
        >
          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Telefone Residencial
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.telResidencial ? props.telResidencial : 'NÃO POSSUI'}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Telefone Celular
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.telCelular ? props.telCelular : 'NÃO INFORMADO'}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Telefone Outro
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              value={props.telOutro ? props.telOutro : 'NÃO INFORMADO'}
              readOnly
              bg="gray.200"
              borderRadius="3xl"
              borderColor="blue.default"
              maxW="280px"
              w="100%"
              h="40px"
              _placeholder={{ color: 'black.default' }}
              _hover={{ borderColor: 'none' }}
            />
          </FormControl>
        </SimpleGrid>
      </VStack>

      <SimpleGrid
        mt={10}
        columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
        spacing={{ base: 4, sm: 4, md: 0, lg: 0 }}
        justifyItems="center"
      >
        <Link href="/area-restrita/servicos" passHref>
          <Button
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={{ base: 7, sm: 7, md: 8, lg: 10 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
          >
            Validar
          </Button>
        </Link>

        <Link href="/area-restrita/servicos/atualizar-dados" passHref>
          <Button
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={{ base: 7, sm: 7, md: 8, lg: 10 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
          >
            Atualizar
          </Button>
        </Link>
      </SimpleGrid>
    </Container>
  );
};

export default ShowUserData;
