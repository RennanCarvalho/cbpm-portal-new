import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Text,
  useToast,
  VStack,
  UnorderedList,
  ListItem,
  Heading,
  Tr,
  Table,
  Td,
  Grid

} from '@chakra-ui/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { UserProps } from '../../DTO/UserDTO';
import { setupAPIClient } from '../../services/setupAPIClient';
import { downloadDocument } from '../../utils/downloadDocument';
import { generateTodayDate } from '../../utils/generateTodayDate';
import { printDocument } from '../../utils/printDocument';
import FormShowUserData from '../FormShowUserData';
import FormHeader from './FormHeader';
import { useCallback, useEffect, useState } from 'react';
import cep from 'cep-promise'
import InputMask from 'react-input-mask'
import { Form } from '../FormCadastro/Form';
import { generatePdfAttachment } from '../../utils/getDocument';
import { FormTable } from './Table/FormTable';

type CEP = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
};

const RegistrationUpdate = (props: UserProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const [address, setAddress] = useState<CEP>();
  const [CEP, setCEP] = useState("");
  const fetchCallBack = useCallback(async () => {
    try {
      if (CEP.length === 8) {
        const response = await cep(CEP);
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }, [CEP]);
  useEffect(() => { fetchCallBack().then((response) => setAddress(response)); }, [fetchCallBack]);
  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => { setCEP(e.currentTarget.value); };

  const [endPol, setEndPol] = useState<CEP>();
  const [CEPPol, setCEPPol] = useState("");
  
  const [endDep1, setEndDep1] = useState<CEP>();
  const [CEPDep1, setCEPDep1] = useState("");
  
  const [endDep2, setEndDep2] = useState<CEP>();
  const [CEPDep2, setCEPDep2] = useState("");
  
  const [endDep3, setEndDep3] = useState<CEP>();
  const [CEPDep3, setCEPDep3] = useState("");
    
      
  const fetchCallBackPol = useCallback(async () => {
    try {
      if (CEPPol.length === 8) {
        const response = await cep(CEPPol);
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }, [CEPPol]);
  
  const fetchCallBackDep1 = useCallback(async () => {
    try {
      if (CEPDep1.length === 8) {
        const response = await cep(CEPDep1);
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }, [CEPDep1]);
  
  const fetchCallBackDep2 = useCallback(async () => {
    try {
      if (CEPDep2.length === 8) {
        const response = await cep(CEPDep2);
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }, [CEPDep2]);
  
  const fetchCallBackDep3 = useCallback(async () => {
    try {
      if (CEPDep3.length === 8) {
        const response = await cep(CEPDep3);
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }, [CEPDep3]);
  
  
  useEffect(() => { fetchCallBackPol().then((response) => setEndPol(response)); }, [fetchCallBackPol]);
  useEffect(() => { fetchCallBackDep1().then((response) => setEndDep1(response)); }, [fetchCallBackDep1]);
  useEffect(() => { fetchCallBackDep2().then((response) => setEndDep2(response)); }, [fetchCallBackDep2]);
  useEffect(() => { fetchCallBackDep3().then((response) => setEndDep3(response)); }, [fetchCallBackDep3]);
  
  const handleSearchPol = (e: React.FormEvent<HTMLInputElement>) => { setCEPPol(e.currentTarget.value); };
  const handleSearchDep1 = (e: React.FormEvent<HTMLInputElement>) => { setCEPDep1(e.currentTarget.value); };
  const handleSearchDep2 = (e: React.FormEvent<HTMLInputElement>) => { setCEPDep2(e.currentTarget.value); };
  const handleSearchDep3 = (e: React.FormEvent<HTMLInputElement>) => { setCEPDep3(e.currentTarget.value); };
    
    

  







  const toast = useToast();
  const [file, setFile] = useState([]);
  const [displayFileName, setDisplayFileName] = useState([]);

  const handleFile = (e: any) => {
    const fileEvent = e.target.files[0];
    //@ts-ignore
    file.push(fileEvent);
    //@ts-ignore
    setDisplayFileName([...displayFileName, file[file.length - 1].name])
    console.log(file)
    console.log(displayFileName)
    toast({
      title: 'Arquivo anexado com sucesso!',
      description:
        `Arquivo: ${fileEvent.name}`,
      status: 'success',
      duration: 3500,
      isClosable: true,
      position: 'top-right',
    });
  }
  

  const api = setupAPIClient();
  async function onSubmit(data: any): Promise<void> {

    const formData = new FormData();
    const pdfForm = await generatePdfAttachment('atualizacao-cadastral');

    formData.append('<h3>POLICIAL</h3>',
    ` <strong>Nome:</strong> ${data.nomePol}<br/>
      <strong>Nome Social:</strong> ${data.nomeSocPol}<br/>
      <strong>RE:</strong> ${data.REPol}<br/>
      <strong>Posto:</strong> ${data.postoPol}<br/>
      <strong>CPF:</strong> ${data.cpfPol}<br/>
      <strong>RG:</strong> ${data.rgPol}<br/>
      <strong>Data de Nascimento:</strong> ${data.dtnascPol}<br/>
      <strong>É inativo:</strong> ${data.ehInativoPol}<br/>
      <strong>SPPREV:</strong> ${data.spprevPol}<br/>
      <strong>Endereço:</strong> ${data.enderecoPol}<br/>
      <strong>Número:</strong> ${data.numeroPol}<br/>
      <strong>Complemento:</strong> ${data.complPol}<br/>
      <strong>Bairro:</strong> ${data.bairroPol}<br/>
      <strong>Cidade:</strong> ${data.cidadePol}<br/>
      <strong>Estado:</strong> ${data.ufPol}<br/>
      <strong>CEP:</strong> ${data.cepPol}<br/>
      <strong>Telefone:</strong> ${data.telPol}<br/>
      <strong>Celular:</strong> ${data.celPol}<br/>
      <strong>Telefone Contato:</strong> ${data.tel2Pol}<br/>
      <strong>Email:</strong> ${data.emailPol}<br/>
      --------------------<br/>
      <br/><br/>`);

      formData.append('<h3>DEPENDENTE 1</h3><br/>',
        (data.nomeDep1 ?
      `<strong>Nome:</strong> ${data.nomeDep1}<br/>
        <strong>Nome Social:</strong> ${data.nomeSocDep1}<br/>
        <strong>Sexo:</strong> ${data.sexoDep1}<br/>
        <strong>Data de Nascimento:</strong> ${data.dtnascDep1}<br/>
        <strong>CPF:</strong> ${data.cpfDep1}<br/>
        <strong>RG:</strong> ${data.rgDep1}<br/>
        <strong>Parentesco:</strong> ${data.parentescoDep1}<br/>
        <strong>Estado Civil:</strong> ${data.estadoCivilDep1}<br/>
        <strong>Nome da Mãe:</strong> ${data.nomeMaeDep1}<br/>
        <strong>Nome do Pai:</strong> ${data.nomePaiDep1}<br/>
        <strong>Endereço:</strong> ${endDep1?.street}<br/>
        <strong>Número:</strong> ${data.numeroDep1}<br/>
        <strong>Complemento:</strong> ${data.complDep1}<br/>
        <strong>Bairro:</strong> ${endDep1?.neighborhood}<br/>
        <strong>Cidade:</strong> ${endDep1?.city}<br/>
        <strong>Estado:</strong> ${endDep1?.state}<br/>
        <strong>CEP:</strong> ${data.cepDep1}<br/>
        <strong>Telefone:</strong> ${data.telDep1}<br/>
        <strong>Celular:</strong> ${data.celDep1}<br/>
        <strong>Telefone Contato:</strong> ${data.tel2Dep1}<br/>
        <strong>Email:</strong> ${data.emailDep1}<br/>
        --------------------<br/>
        <br/><br/>` : " "));

        formData.append('<h3>DEPENDENTE 2</h3><br/>',
          (data.nomeDep2 ?
       `<strong>Nome:</strong> ${data.nomeDep2}<br/>
            <strong>Nome Social:</strong> ${data.nomeSocDep2}<br/>
            <strong>Sexo:</strong> ${data.sexoDep2}<br/>
            <strong>Data de Nascimento:</strong> ${data.dtnascDep2}<br/>
            <strong>CPF:</strong> ${data.cpfDep2}<br/>
            <strong>RG:</strong> ${data.rgDep2}<br/>
            <strong>Parentesco:</strong> ${data.parentescoDep2}<br/>
            <strong>Estado Civil:</strong> ${data.estadoCivilDep2}<br/>
            <strong>Nome da Mãe:</strong> ${data.nomeMaeDep2}<br/>
            <strong>Nome do Pai:</strong> ${data.nomePaiDep2}<br/>
            <strong>Endereço:</strong> ${endDep2?.street}<br/>
            <strong>Número:</strong> ${data.numeroDep2}<br/>
            <strong>Complemento:</strong> ${data.complDep2}<br/>
            <strong>Bairro:</strong> ${endDep2?.neighborhood}<br/>
            <strong>Cidade:</strong> ${endDep2?.city}<br/>
            <strong>Estado:</strong> ${endDep2?.state}<br/>
            <strong>CEP:</strong> ${data.cepDep2}<br/>
            <strong>Telefone:</strong> ${data.telDep2}<br/>
            <strong>Celular:</strong> ${data.celDep2}<br/>
            <strong>Telefone Contato:</strong> ${data.tel2Dep2}<br/>
            <strong>Email:</strong> ${data.emailDep2}<br/>
            --------------------<br/>
            <br/><br/>` : " "));
      
            formData.append('<h3>DEPENDENTE 3</h3>', 
              (data.nomeDep3 ? 
            `<strong>Nome:</strong> ${data.nomeDep3}<br/>
              <strong>Nome Social:</strong> ${data.nomeSocDep3}<br/>
              <strong>Sexo:</strong> ${data.sexoDep3}<br/>
              <strong>Data de Nascimento:</strong> ${data.dtnascDep3}<br/>
              <strong>CPF:</strong> ${data.cpfDep3}<br/>
              <strong>RG:</strong> ${data.rgDep3}<br/>
              <strong>Parentesco:</strong> ${data.parentescoDep3}<br/>
              <strong>Estado Civil:</strong> ${data.estadoCivilDep3}<br/>
              <strong>Nome da Mãe:</strong> ${data.nomeMaeDep3}<br/>
              <strong>Nome do Pai:</strong> ${data.nomePaiDep3}<br/>
              <strong>Endereço:</strong> ${endDep3?.street}<br/>
              <strong>Número:</strong> ${data.numeroDep3}<br/>
              <strong>Complemento:</strong> ${data.complDep3}<br/>
              <strong>Bairro:</strong> ${endDep3?.neighborhood}<br/>
              <strong>Cidade:</strong> ${endDep3?.city}<br/>
              <strong>Estado:</strong> ${endDep3?.state}<br/>
              <strong>CEP:</strong> ${data.cepDep3}<br/>
              <strong>Telefone:</strong> ${data.telDep3}<br/>
              <strong>Celular:</strong> ${data.celDep3}<br/>
              <strong>Telefone Contato:</strong> ${data.tel2Dep3}<br/>
              <strong>Email:</strong> ${data.emailDep3}<br/>
              --------------------<br/>
            ` : " "));
    // formData.append('nome', props.nome);
    // formData.append('cpf', props.cpf);
    formData.append('file[]', pdfForm, 'formulario-atualizacao-cadastral-preenchimento.pdf');
    
    for (let i = 0; i < file.length; i++) {
      formData.append('file[]', file[i]);
    }
    
    
    try {
      {
        await api({
          method: 'post',
          url: '/user/forms/registration-update',
          data: formData,
          headers: {
            'content-type': 'multipart/form-data',
          },
        });
      }

      toast({
        title: 'Confirmação de Envio',
        description:
          'Confirmamos o envio de mensagens através do Portal "Formulários".',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });

      reset();
    } catch (error: any) {
      const err = JSON.parse(error.request.response);

      if (err.document) {
        toast({
          description: `${err.document}`,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      } else if (err[0].type === 'extname') {
        toast({
          description:
            'Formato de arquivo inválido, formatos permitidos .png, .jpg, .jpeg, .pdf',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      } else if (err[0].type === 'size') {
        toast({
          description: 'O tamanho de cada arquivo deve ser no máximo 2MB',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      } else {
        toast({
          description: 'Ocorreu um erro inesperado. Tente novamente mais tarde',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
        console.log(err.message);
      }
    }
  }

  return (
    <Container
      centerContent
      maxW="container.xl"
      mb={10}
      fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader title={'FORMULÁRIO DE ATUALIZAÇÃO CADASTRAL – FAC.01'} attachment={'C'} />

        <Box mb="4rem" flexWrap="wrap" w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
          ORIENTAÇÕES E DOCUMENTOS COMPROBATÓRIOS
          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
            1. Este formulário só deve ser preenchido para fins de atualização cadastral.
            </Text>
          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
            2. Caso o dependente não esteja na base de dados da CBPM deverá ser solicitada a inclusão com o preenchimento do respectivo formulário de inclusão.
            </Text>
          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
            3. Conforme artigo 34, da Lei Estadual Nº 452/74, os beneficiários(as) obrigatórios(as) do regime de Assistência Médico-Hospitalar (AMH) da CBPM e devem
ser inscritos(as) ou ter seus dados atualizados, por meio do presente requerimento, assinado pelo(a) contribuinte ou seu representante legal, anexando
documentos relacionados nos tópicos abaixo.
            </Text>
          </Box>
          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
            4. Em havendo mais de um cônjuge ou companheiro, será mantido apenas o mais recente
            </Text>
          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
            5. Havendo cônjuge, companheiro ou filho menos de 21 anos, este devem ser cadastrados e os genitores devem ser excluídos.s
            </Text>
          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
            6. Todos os documentos para atualização cadastral devem ser anexados ao presente formulário e entregues conjuntamente, pois resguardam direitos e
            garantias do próprio contribuinte e dos seus beneficiários, preservando a legalidade e integralidade dos registros.
            </Text>
          </Box>

          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
            7.	Cópias simples dos documentos legais que contenham o n º do RG, do CPF ou do CIN (Carteira de Identidade Nacional) e o comprovante de endereço dos (as) dependentes e do(a) militar contribuinte.
            </Text>
          </Box>
          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
            8. Os dependentes que não estiverem relacionados neste formulário serão excluídos após o processamento deste
            </Text>
          </Box>
          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
            9. Caso alguma decisão judicial que que interfira na condição de beneficiário ou de tratamento está também deve ser juntada ao formulário
            </Text>
          </Box>
          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.500"
            w="100%"
            textAlign="justify"
            p="0.5rem"
          >
            <Text>
            10. Para o filho(a) natural ou por afinidade com invalidez, posteriormente à sua inclusão como beneficiário(a), o Contribuinte deve elaborar requerimento
específico na CBPM (formulário próprio) para ter o(a) filho(a) inscrito(a) também como beneficiário(a) inválido(a), devendo o(a) referido(a) dependente
ser submetido(a) à perícia no Centro Médico da Polícia Militar, conforme determina o Inciso II, do Artigo 34, da Lei Estadual Nº 452/74, onde será
atestada formalmente a enfermidade (CID) correspondente à necessidade especial.
            </Text>
          </Box>
        </Box>

        <Box w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
            DADOS PESSOAIS DO(A) PM CONTRIBUINTE
          </Box>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Nome
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder="Nome"
              borderRadius="none"
              borderColor="gray.500"
              defaultValue={props.nome}
              {...register("nomePol")}
            />

            {errors.nome && <Text color="red">{errors.nome.message}</Text>}
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Nome Social
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder="Nome Social"
              borderRadius="none"
              borderColor="gray.500"
              defaultValue={props.nomeSocial}
              {...register("nomeSocPol")}
            />

            {errors.nome && <Text color="red">{errors.nome.message}</Text>}
          </FormControl>


          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
            <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              RE
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder="RE"
              borderRadius="none"
              borderColor="gray.500"
              defaultValue={props.identidade ? props.identidade : 'NÃO SE APLICA'}
              {...register("REPol")}
            />
            </FormControl>

            <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Posto/Graduação
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder="'Posto/Graduação'"
              borderRadius="none"
              borderColor="gray.500"
              defaultValue={props.postoPolicial ? props.postoPolicial : 'NÃO SE APLICA'}
              {...register("postoPol")}
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
              placeholder="CPF"
              borderRadius="none"
              borderColor="gray.500"
              defaultValue={props.cpf}
              {...register("cpfPol")}
            />
            </FormControl>

            <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              RG/CIN
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder="RG/CIN"
              borderRadius="none"
              borderColor="gray.500"
              defaultValue={props.rg + (props.rgdg ? '-' + props.rgdg : '')}
              {...register("rgPol")}

            />
            </FormControl>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>
          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Data de nascimento
            </FormLabel>
            <Input
              as={InputMask}
              defaultValue={props.dataNascimento}
              mask={'99/99/9999'}
              placeholder="dd/mm/aaaa"
              w="100%"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              borderRadius="none"
              borderColor="gray.500"
              {...register("dtnascPol")}
            />
            </FormControl>

            


            <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              É PM inativo(a) ?
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder=""
              borderRadius="none"
              borderColor="gray.500"
              defaultValue={props.NumeroSPPrev ? 'SIM' : 'NÃO'}
              {...register("ehInativoPol")}

            />
            </FormControl>
            <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Registro SPPREV (Inativo)
            </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder=""
              borderRadius="none"
              borderColor="gray.500"
              defaultValue={props.NumeroSPPrev ? props.NumeroSPPrev : 'NÃO POSSUI'}
              {...register("spprevPol")}

            />
            </FormControl>
          </SimpleGrid>

          <Box
            fontWeight="bold"
            border="1px"
            textAlign="center"
            bg="gray.500"
            mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
          >
            ENDEREÇO DO(A) PM CONTRIBUINTE
          </Box>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Logradouro (endereço):
                </FormLabel>
                {endPol ? (
                  <Input
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    id="logradouro"
                    borderRadius="none"
                    borderColor="gray.500"
                    value={endPol.street}
              {...register("enderecoPol")}

                  />
                ) : (
            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder="Logradouro"
              borderRadius="none"
              borderColor="gray.500"
              defaultValue={props.logradouro}
              {...register("enderecoPol")}

            />
                )}
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Número
                </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder="Número"
              borderRadius="none"
              borderColor="gray.500"
              defaultValue={props.numero}
              {...register("numeroPol")}

            />

                {errors.numero && (
                  <Text color="red">{errors.numero.message}</Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Complemento
                </FormLabel>

            <Input
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              placeholder="Complemento"
              borderRadius="none"
              borderColor="gray.500"
              defaultValue={props.complemento ? props.complemento : 'NÃO POSSUI'}
              {...register("complPol")}

            />

                {errors.complemento && (
                  <Text color="red">{errors.complemento.message}</Text>
                )}
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Bairro
                </FormLabel>
                {endPol ? (
                  <Input
                    id="bairro"
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    borderRadius="none"
                    borderColor="gray.500"
                    value={endPol.neighborhood}
                    {...register("bairroPol")}
                  />
                ) : (
              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="Bairro"
                borderRadius="none"
                borderColor="gray.500"
                defaultValue={props.bairro}
                {...register("bairroPol")}
                />
                )}
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Cidade
                </FormLabel>
                {endPol ? (
                  <Input
                    id="cidade"
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    borderRadius="none"
                    borderColor="gray.500"
                    value={endPol.city}
                    {...register("cidadePol")}
                  />
                ) : (
              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="Cidade"
                borderRadius="none"
                borderColor="gray.500"
                defaultValue={props.cidade}
                {...register("cidadePol")}/>
                )}
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  UF
                </FormLabel>

                {endPol ? (
                  <Input
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    borderRadius="none"
                    borderColor="gray.500"
                    value={endPol.state}
                    {...register("ufPol")}/>
                ) : (
              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="UF"
                borderRadius="none"
                borderColor="gray.500"
                defaultValue={props.estado}
                {...register("ufPol")}/>
                )}
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  CEP
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="Digite o CEP"
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue={props.cep}
                  {...register("cepPol")}
                  onChange={handleSearchPol}
                  
                />
                {errors.cep && <Text color="red">{errors.cep.message}</Text>}
              </FormControl>
            </SimpleGrid>

          <Box
            fontWeight="bold"
            border="1px"
            textAlign="center"
            bg="gray.500"
            mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
          >
            CONTATOS DO(A) PM CONTRIBUINTE
          </Box>

          <SimpleGrid mb="3rem" columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
          <FormControl>
              <FormLabel fontWeight="700" fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }} >Telefone Residencial</FormLabel>
              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="Telefone Residencial"
                borderRadius="none"
                borderColor="gray.500"
                defaultValue={props.telResidencial ? props.telResidencial : 'NÃO POSSUI'}
                {...register("telPol")}
                />

            </FormControl>
            <FormControl>
              <FormLabel fontWeight="700" fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }} >Telefone Celular</FormLabel>
              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="Telefone Celular"
                borderRadius="none"
                borderColor="gray.500"
                defaultValue={props.telCelular ? props.telCelular : 'NÃO POSSUI'}
                {...register("celPol")}
                />
                
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="700" fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }} >Telefone Outro</FormLabel>
              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="Telefone Outro"
                borderRadius="none"
                borderColor="gray.500"
                defaultValue={props.telOutro ? props.telOutro : 'NÃO POSSUI'}
                {...register("tel2Pol")}
                />

            </FormControl>

            <FormControl>
              <FormLabel fontWeight="700" fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }} >E-mail</FormLabel>
              <Input
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                placeholder="E-mail"
                borderRadius="none"
                borderColor="gray.500"
                defaultValue={props.email}
                {...register("emailPol")}
                />
            </FormControl>
          </SimpleGrid>

          <Box mb="3rem">
            <Box
              fontWeight="bold"
              border="1px"
              textAlign="center"
              bg="gray.500"
              borderRadius="none"
            >
              DADOS PESSOAIS – DO DEPENDENTE 01
            </Box>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Nome
              </FormLabel>

              <Input
                placeholder="Nome"
                w="100%"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                defaultValue=""
                {...register("nomeDep1")}
                />

            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Nome Social
              </FormLabel>

              <Input
                placeholder="Nome Social"
                w="100%"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                defaultValue=""
                {...register("nomeSocDep1")}

              />
            </FormControl>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 4, lg: 4 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Sexo
                </FormLabel>

                <Select
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                {...register("sexoDep1")}

                >
                  <option selected value={"Feminino"}>
                    FEMININO
                  </option>
                  <option value={"Masculino"}>MASCULINO</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Data de Nascimento
                </FormLabel>

                <Input
                  as={InputMask}
                  mask={'99/99/9999'}
                  placeholder="01/01/2021"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                  {...register("dtnascDep1")}
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
                  id="cpf"
                  placeholder="Preencha o CPF"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                  {...register("cpfDep1")}

                  
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  RG/CIN
                </FormLabel>

                <Input
                  placeholder={'00000000000'}
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                  {...register("rgDep1")}

                />
              </FormControl>


            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Parentesco
                </FormLabel>

                <Select
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  {...register("parentescoDep1")}
                  >
                  <option selected>FILHO(A) NATURAL</option>
                  <option>FILHO(A) POR VÍNCULO DE AFINIDADE</option>
                  <option>CÔNJUGE</option>
                  <option>COMPANHEIRO(A)</option>
                  <option>GENITOR(A)</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Estado Civil
                </FormLabel>

                <Select
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  {...register("estadoCivilDep1")}

                  >
                  <option selected>SOLTEIRO(A)</option>
                  <option>VIÚVO(A)</option>
                  <option>CASADO(A)</option>
                  <option>DIVORCIADO(A)</option>
                  <option>SEPARADO(A)</option>
                  <option>UNIÃO ESTÁVEL(A)</option>
                </Select>
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Nome da Mãe
                </FormLabel>

                <Input
                  placeholder="Nome da mãe"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                  {...register("nomeMaeDep1")}

                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Nome do Pai
                </FormLabel>

                <Input
                  placeholder="Nome do pai"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                  {...register("nomePaiDep1")}

                />
              </FormControl>
              
            </SimpleGrid>
            <Box
              fontWeight="bold"
              
              textAlign="center"
              bg="gray.400"
              mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
            >
              Endereço Residencial – do dependente
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Logradouro (endereço):
                </FormLabel>
                  <Input
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    id="logradouro"
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={endDep1? endDep1.street : ""}
                  {...register("enderecoDep1")}
                    
                  />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Número
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="Preencha o número"
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                  {...register("numeroDep1")}

                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Complemento
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="Complemento"
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register("complDep1")}

                />
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Bairro
                </FormLabel>
                  <Input
                    id="bairro"
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={endDep1? endDep1.neighborhood : ""}
                  {...register("bairroDep1")}

                  />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Cidade
                </FormLabel>
                  <Input
                    id="cidade"
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={endDep1? endDep1.city : ""}
                  {...register("cidadeDep1")}

                  />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  UF
                </FormLabel>
                  <Input
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={endDep1? endDep1.state : ""}
                  {...register("ufDep1")}

                  />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  CEP
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="Digite o CEP"
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register("cepDep1")}
                  onChange={handleSearchDep1}
                  
                />
              </FormControl>
            </SimpleGrid>
            <Box
              fontWeight="bold"
              textAlign="center"
              bg="gray.400"
            >
              Contatos - dependente
            </Box>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Telefone Residencial
                </FormLabel>

                <Input
                  placeholder="11999999999"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                  {...register("telDep1")}

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
                  id="telCelular"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  placeholder="11999999999"
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                  {...register("celDep1")}

                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Telefone Outro - Recado
                </FormLabel>

                <Input
                  placeholder="11999999999"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                  {...register("tel2Dep1")}

                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  E-mail Pessoal
                </FormLabel>

                <Input
                  type="email"
                  placeholder="Preencha o e-mail"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                  {...register("emailDep1")}

                />
              </FormControl>
            </SimpleGrid>
          </Box>
          <Box mb="3rem">
            <Box
              fontWeight="bold"
              border="1px"
              textAlign="center"
              bg="gray.500"
              borderRadius="none"
            >
              DADOS PESSOAIS – DO DEPENDENTE 02
            </Box>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Nome
              </FormLabel>

              <Input
                placeholder="Nome"
                w="100%"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                defaultValue=""
                {...register("nomeDep2")}
              />
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Nome Social
              </FormLabel>

              <Input
                placeholder="Nome Social"
                w="100%"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                defaultValue=""
                {...register("nomeSocDep2")}

              />
            </FormControl>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 4, lg: 4 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Sexo
                </FormLabel>

                <Select
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                {...register("sexoDep2")}

                >
                  <option selected value={"Feminino"}>
                    FEMININO
                  </option>
                  <option value={"Masculino"}>MASCULINO</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Data de Nascimento
                </FormLabel>

                <Input
                  as={InputMask}
                  mask={'99/99/9999'}
                  placeholder="01/01/2021"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("dtnascDep2")}

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
                  id="cpf"
                  placeholder="Preencha o CPF"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("cpfDep2")}

                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  RG/CIN
                </FormLabel>

                <Input
                  placeholder={'00000000000'}
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("rgDep2")}

                />
              </FormControl>


            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Parentesco
                </FormLabel>

                <Select
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }} 
                {...register("parentescoDep2")}
                >
                  <option selected>FILHO(A) NATURAL</option>
                  <option>FILHO(A) POR VÍNCULO DE AFINIDADE</option>
                  <option>CÔNJUGE</option>
                  <option>COMPANHEIRO(A)</option>
                  <option>GENITOR(A)</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Estado Civil
                </FormLabel>

                <Select
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                {...register("estadoCivilDep2")}
                >
                  <option selected>SOLTEIRO(A)</option>
                  <option>VIÚVO(A)</option>
                  <option>CASADO(A)</option>
                  <option>DIVORCIADO(A)</option>
                  <option>SEPARADO(A)</option>
                  <option>UNIÃO ESTÁVEL(A)</option>
                </Select>
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Nome da Mãe
                </FormLabel>

                <Input
                  placeholder="Nome da mãe"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("nomeMaeDep2")}

                />                
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Nome do Pai
                </FormLabel>

                <Input
                  placeholder="Nome do pai"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("nomePaiDep2")}

                />
              </FormControl>
              
            </SimpleGrid>
            <Box
              fontWeight="bold"
              
              textAlign="center"
              bg="gray.400"
              mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
            >
              Endereço Residencial – do dependente
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Logradouro (endereço):
                </FormLabel>
                  <Input
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    id="logradouro"
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={endDep2? endDep2.street : ""}
                {...register("enderecoDep2")}

                  />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Número
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="Preencha o número"
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("numeroDep2")}

                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Complemento
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="Complemento"
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("complDep2")}

                />
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Bairro
                </FormLabel>

                  <Input
                    id="bairro"
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={endDep2? endDep2.neighborhood : ""}
                {...register("bairroDep2")}

                  />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Cidade
                </FormLabel>
                  <Input
                    id="cidade"
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={endDep2? endDep2.city : ""}
                {...register("cidadeDep2")}

                  />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  UF
                </FormLabel>
                  <Input
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={endDep2? endDep2.state : ""}
                {...register("ufDep2")}

                  />
                
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  CEP
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="Digite o CEP"
                  borderRadius="none"
                  borderColor="gray.500"
                {...register("cepDep2")}

                  onChange={handleSearchDep2}

                />
              </FormControl>
            </SimpleGrid>
            <Box
              fontWeight="bold"
              textAlign="center"
              bg="gray.400"
            >
              Contatos - dependente
            </Box>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Telefone Residencial
                </FormLabel>

                <Input
                  placeholder="11999999999"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("telDep2")}

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
                  id="telCelular"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  placeholder="11999999999"
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("celDep2")}

                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Telefone Outro - Recado
                </FormLabel>

                <Input
                  placeholder="11999999999"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("tel2Dep2")}

                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  E-mail Pessoal
                </FormLabel>

                <Input
                  type="email"
                  placeholder="Preencha o e-mail"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("emailDep2")}

                />
              </FormControl>
            </SimpleGrid>
          </Box>
          <Box mb="3rem">
            <Box
              fontWeight="bold"
              border="1px"
              textAlign="center"
              bg="gray.500"
              borderRadius="none"
            >
              DADOS PESSOAIS – DO DEPENDENTE 03
            </Box>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Nome
              </FormLabel>

              <Input
                placeholder="Nome"
                w="100%"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                defaultValue=""
                {...register("nomeDep3")}

              />
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Nome Social
              </FormLabel>

              <Input
                placeholder="Nome Social"
                w="100%"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                defaultValue=""
                {...register("nomeSocDep3")}

              />
            </FormControl>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 4, lg: 4 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Sexo
                </FormLabel>

                <Select
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                {...register("sexoDep3")}

                >
                  <option selected value={"Feminino"}>
                    FEMININO
                  </option>
                  <option value={"Masculino"}>MASCULINO</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Data de Nascimento
                </FormLabel>

                <Input
                  as={InputMask}
                  mask={'99/99/9999'}
                  placeholder="01/01/2021"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("dtnascDep3")}

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
                  id="cpf"
                  placeholder="Preencha o CPF"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("cpfDep3")}

                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  RG/CIN
                </FormLabel>

                <Input
                  placeholder={'00000000000'}
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("rgDep3")}

                />
              </FormControl>


            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Parentesco
                </FormLabel>

                <Select
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }} 
                {...register("parentescoDep3")}
                >
                  <option selected>FILHO(A) NATURAL</option>
                  <option>FILHO(A) POR VÍNCULO DE AFINIDADE</option>
                  <option>CÔNJUGE</option>
                  <option>COMPANHEIRO(A)</option>
                  <option>GENITOR(A)</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Estado Civil
                </FormLabel>

                <Select
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                {...register("estadoCivilDep3")}
                >
                  <option selected>SOLTEIRO(A)</option>
                  <option>VIÚVO(A)</option>
                  <option>CASADO(A)</option>
                  <option>DIVORCIADO(A)</option>
                  <option>SEPARADO(A)</option>
                  <option>UNIÃO ESTÁVEL(A)</option>
                </Select>
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Nome da Mãe
                </FormLabel>

                <Input
                  placeholder="Nome da mãe"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("nomeMaeDep3")}

                />
                
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Nome do Pai
                </FormLabel>

                <Input
                  placeholder="Nome do pai"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("nomePaiDep3")}

                />
              </FormControl>
              
            </SimpleGrid>
            <Box
              fontWeight="bold"
              
              textAlign="center"
              bg="gray.400"
              mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
            >
              Endereço Residencial – do dependente
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Logradouro (endereço):
                </FormLabel>
                  <Input
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    id="logradouro"
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={endDep3? endDep3.street: ""}
                {...register("enderecoDep3")}
                  />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Número
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="Preencha o número"
                  borderRadius="none"
                  borderColor="gray.500"
                {...register("numeroDep3")}

                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Complemento
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="Complemento"
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("complDep3")}

                />
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Bairro
                </FormLabel>
                  <Input
                    id="bairro"
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={endDep3? endDep3.neighborhood: ""}
                {...register("bairroDep3")}

                  />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Cidade
                </FormLabel>
                  <Input
                    id="cidade"
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={endDep3? endDep3.city : ""}
                {...register("cidadeDep3")}

                  />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  UF
                </FormLabel>
                  <Input
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    borderRadius="none"
                    borderColor="gray.500"
                    defaultValue={endDep3? endDep3.state : ""}
                {...register("ufDep3")}

                  />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  CEP
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="Digite o CEP"
                  borderRadius="none"
                  borderColor="gray.500"
                {...register("cepDep3")}

                  onChange={handleSearchDep3}
                />
              </FormControl>
            </SimpleGrid>
            <Box
              fontWeight="bold"
              textAlign="center"
              bg="gray.400"
            >
              Contatos - dependente
            </Box>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Telefone Residencial
                </FormLabel>

                <Input
                  placeholder="11999999999"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("telDep3")}

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
                  id="telCelular"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  placeholder="11999999999"
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("celDep3")}

                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Telefone Outro - Recado
                </FormLabel>

                <Input
                  placeholder="11999999999"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("tel2Dep3")}

                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  E-mail Pessoal
                </FormLabel>

                <Input
                  type="email"
                  placeholder="Preencha o e-mail"
                  w="100%"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                  borderRadius="none"
                  borderColor="gray.500"
                  defaultValue=""
                {...register("emailDep3")}

                />
              </FormControl>
            </SimpleGrid>
          </Box>

        </Box>

        <div>
          <Text fontWeight="700" textAlign="center">
            REQUERIMENTO/TERMO DE RESPONSABILIDADE E DE CONSENTIMENTO
          </Text>

          <br />
          <Text>
          Requeiro a Atualização de dados, dos meus dependentes como beneficiários(as) do regime de
          Assistência Médico-Hospitalar (AMH) da CBPM, com fundamento no Artigo 34, da Lei Estadual Nº 452/74.
          </Text>

          <br />
          <Text>
          Caso ocorra alteração, da condição de qualquer dos dependentes, comprometo-me a comunicar
          formalmente à CBPM, o mais breve possível, apresentando cópia da documentação pertinente.
          </Text>

          <br />
          <Text>
          Estou ciente que as declarações são de inteira responsabilidade do contribuinte, que responderá
por eventuais inconsistências das informações, nos termos da lei, bem como de indenizar o Estado ou terceiros por
prejuízos decorrentes, incluindo eventuais despesas médicas e hospitalares suportadas indevidamente pelo regime
de AMH/CBPM, e por fim, às sanções previstas no Regulamento Disciplinar da Polícia Militar do Estado de São Paulo.
          </Text>
          <br />

          <Text>
          Nos termos do Inciso XII, do Artigo 5º, e do Artigo 14, da Lei Federal Nº 13.709/18, há anuência
do contribuinte e dos beneficiários aqui relacionados, para o tratamento dos presentes dados pela CBPM, para fins
de AMH, no que preconiza a Lei Estadual Nº 452/74 e demais legislação vigente. 
          </Text>

        </div>
        <br />
        <br />
        <Flex justify="center" w="100%" mb="2rem">
          <VStack>
            
            <Text>Data, ________ / ____________ / _________ Assinatura contribuinte: ____________________________________</Text>
            <Text>Nome: ___________________ CPF: __________________________</Text>
          </VStack>

        </Flex>
        <br />
        <br />

        <Flex justify="center" w="100%" mb="2rem">
          <Box mb="4rem" flexWrap="wrap" w="70%">
            <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
              Documentos Apresentados e conferidos
            </Box>

            <Box
              border="1px"
              borderTop="none"
              borderColor="gray.500"
              w="100%"
              textAlign="left"

              p="0.1rem">
                    <Box w="100%" p={4}>
      <Grid templateColumns="repeat(3, 1fr)">
        {/* Cabeçalho */}
        <Text fontWeight="bold">Dependente 01</Text>
        <Text fontWeight="bold">Dependente 02</Text>
        <Text fontWeight="bold">Dependente 03</Text>

        {/* Linha 1 */}
        <Text>(    ) Comprovante residência</Text>
        <Text>(    ) Comprovante residência</Text>
        <Text>(    ) Comprovante residência</Text>

        {/* Linha 2 */}
        <Text>(    ) RG/CPF</Text>
        <Text>(    ) RG/CPF</Text>
        <Text>(    ) RG/CPF</Text>

        {/* Linha 3 */}
        <Text>(    ) CIN</Text>
        <Text>(    ) CIN</Text>
        <Text>(    ) CIN</Text>
      </Grid>
    </Box>
              
            </Box>
            <Box
              border="1px"
              borderTop="none"
              borderColor="gray.500"
              w="100%"
              textAlign="left"

              p="0.1rem">
                <FormTable></FormTable>
                <br />
                <b>(uso interno)</b>

              </Box>
          </Box>
        </Flex>
        

        <Box mt={10} mb={10} fontWeight="700" textAlign="center">
          <Text>
            Assinado no Portal de Serviços CBPM (cbpm.sp.gov.br) por meio de
            login e senha de {props.nome}, usuário cadastrado como contribuinte
            ativo no sistema AMH da CBPM
          </Text>

          <Text>Processado em {generateTodayDate()}</Text>

          <Text>
            Rua Alfredo Maia, 218 - Luz - São Paulo - SP - CEP: 01106-010 -
            Fone: 11-3315 3000
          </Text>

          <Text>
            Copyright © 2013 - Caixa Beneficente da Polícia Militar -
            251850.245062.294
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
          spacing={5}
          justifyItems="center"
        >
          {/* <Button
            type="button"
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={{ base: 4, sm: 4, md: 5, lg: 5 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
            onClick={() => downloadDocument('atualizacao-cadastral')}
          >
            Baixar Preenchido
          </Button> */}

          <FormLabel
            fontWeight="700"
            whiteSpace="nowrap"
            htmlFor="files[]"
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={4}
            py={2}
            mb="none"
            borderRadius="3xl"
            _hover={{ color: 'none' }}
          >
            Anexar Documentos
          </FormLabel>

          <Input
            id="files[]"
            {...register('file')}
            type="file"
            display="none"
            onChange={handleFile}
          />
          <Button
            type="submit"
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={{ base: 7, sm: 7, md: 8, lg: 10 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
            isDisabled={displayFileName.length <= 2}
          >
            Enviar
          </Button>

          <Button
            type="button"
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={{ base: 4, sm: 4, md: 4, lg: 4 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
            onClick={() => printDocument()}
          >
            Imprimir Preenchido
          </Button>
        </SimpleGrid>
<Box
          my={16}
          display={'Flex'}
          alignItems="center"
          flexDirection={'column'}
        >
          <Heading as={'h1'} size={'md'}>
            {displayFileName.length} de 3 arquivo(s) anexado(s) - quantidade mínima necessária:
          </Heading>
          <UnorderedList ms={16} >
            {displayFileName.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>
        {/* <Text textAlign="center" mt={6} fontWeight="700">
          Após preenchimento do formulário, clicar no botão &quot;Baixar
          Preenchido&quot;, salvar e anexar aos demais documentos comprobatórios
        </Text> */}

        <Center>
          <Link href="/area-restrita/servicos/formularios/" passHref>
            <Button
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              bg="blue.default"
              color="white.default"
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              borderRadius="3xl"
              _hover={{ color: 'none' }}
              mt="4rem"
            >
              voltar
            </Button>
          </Link>
        </Center>
      </form>
    </Container>
  );
};

export default RegistrationUpdate;
