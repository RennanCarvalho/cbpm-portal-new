import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ListItem,
  Select,
  SimpleGrid,
  Text,
  UnorderedList,
  useToast,
  VStack,
  Heading

} from "@chakra-ui/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserProps } from "../../DTO/UserDTO";
import { setupAPIClient } from "../../services/setupAPIClient";
import { downloadDocument } from "../../utils/downloadDocument";
import { generateTodayDate } from "../../utils/generateTodayDate";
import { printDocument } from "../../utils/printDocument";
import FormShowUserData from "../FormShowUserData";
import FormHeader from "./FormHeader";
import cep from 'cep-promise'
import InputMask from 'react-input-mask'

type CEP = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
};

const RefundOfCoparticipation = (props: UserProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [address, setAddress] = useState<CEP>();
  const [CEP, setCEP] = useState("");

  const api = setupAPIClient();

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

  useEffect(() => {
    fetchCallBack().then((response) => setAddress(response));
  }, [fetchCallBack]);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setCEP(e.currentTarget.value);
  };

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

  async function onSubmit(data: any): Promise<void> {
    const formData = new FormData();
    formData.append("nome", data.nome);
    formData.append("nomeSocial", data.nomeSocial);
    formData.append("sexo", data.sexo);
    formData.append("dataNascimento", data.dataNascimento);
    formData.append("cpf", data.cpf);
    formData.append("parentesco", data.parentesco);
    formData.append("estadoCivil", data.estadoCivil);
    formData.append("nomeMae", data.nomeMae);
    formData.append("nomePai", data.nomePai);
    formData.append("logradouro", data.logradouro);
    formData.append("numero", data.numero);
    formData.append("complemento", data.complemento);
    formData.append("bairro", data.bairro);
    formData.append("cidade", data.cidade);
    formData.append("uf", data.uf);
    formData.append("cep", data.cep);
    formData.append("telResidencial", data.telResidencial);
    formData.append("telCelular", data.telCelular);
    formData.append("telOutro", data.telOutro);
    formData.append("email", data.email);

    for (let i = 0; i < file.length; i++) {
      formData.append("file[]", file[i]);
    }

    try {
      {
        await api({
          method: "post",
          url: "/user/forms/refund-of-coparticipation",
          data: formData,
          headers: {
            "content-type": "multipart/form-data",
          },
        });
      }

      toast({
        title: "Confirmação de Envio",
        description:
          'Confirmamos o envio de mensagens através do Portal "Formulários".',
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      reset();
    } catch (error: any) {
      const err = JSON.parse(error.request.response);

      if (err.document) {
        toast({
          description: `${err.document}`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      } else if (err[0].type === "extname") {
        toast({
          description:
            "Formato de arquivo inválido, formatos permitidos .png, .jpg, .pdf",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      } else if (err[0].type === "size") {
        toast({
          description: "O tamanho de cada arquivo deve ser no máximo 2MB",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        toast({
          description: "Ocorreu um erro inesperado. Tente novamente mais tarde",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
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
      fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader title={"FORMULÁRIO DE DEVOLUÇÃO DE COPARTICIPAÇÃO"} isDeclararion={false} attachment={"D"} />

        <Box mb="4rem" flexWrap="wrap" w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
            ORIENTAÇÕES
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
              1. O presente formulário deve ser utilizado para solicitações de reembolsos previstos nas normas vigentes, no tocante a atendimentos de
              urgência / emergência realizados fora do Hospital Cruz Azul de São Paulo e da rede credenciada.<br />
              <UnorderedList styleType="none" spacing={1}>
                <ListItem>
                  a. O requerimento deve ser apresentado em até 120 dias do desconto em folha;
                </ListItem>

                <ListItem>
                  b. A CBPM poderá solicitar documentos complementares de qualquer procedimento para a análise do reembolso. Nesses casos,
                  o prazo para pagamento contará a partir do recebimento da documentação adicional;
                </ListItem>

                <ListItem>
                  c. O prazo previsto para reembolso é de até 90 dias.
                </ListItem>
              </UnorderedList>
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
              2. Quando houver valores a serem questionados de mais de um beneficiário deverá ser preenchido um formulário por beneficiário.            
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
              3. Juntar cópia do Extrato de contas médicas e do holerite em que tenha sido lançado o desconto em folha.
            </Text>
          </Box>
        </Box>


        <Box w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
            DADOS PESSOAIS DO(A) REQUERENTE / CONTRIBUINTE
          </Box>
          <SimpleGrid columns={{ base: 2, sm: 2, md: 2, lg: 2 }}>
            <FormShowUserData
              formLabel={"Nome"}
              userProps={props.nome}
              width={"100%"}
            />

<FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Situação
                </FormLabel>

                <Select
                  {...register("Situacao")}
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  <option selected value={1}>Policial Militar </option>
                  <option value={2}>Pensionista</option>
                </Select>
              </FormControl>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>
            <FormShowUserData
              formLabel={"RE ou matrícula"}
              userProps={props.identidade ? props.identidade : "NÃO SE APLICA"}
            />



            <FormShowUserData formLabel={"CPF"} userProps={props.cpf} />

            <FormShowUserData
              formLabel={"Posto/Graduação"}
              userProps={
                props.postoPolicial ? props.postoPolicial : "NÃO SE APLICA"
              }
            />
          </SimpleGrid>
<Box
            fontWeight="bold"
            border="1px"
            textAlign="center"
            bg="gray.500"
            mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
          >
            CONTATOS DO(A) REQUERENTE
          </Box>

          <SimpleGrid mb="3rem" columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
            <FormShowUserData
              formLabel={"Telefone Residencial"}
              userProps={
                props.telResidencial ? props.telResidencial : "NÃO POSSUI"
              }
            />

            <FormShowUserData
              formLabel={"Telefone Celular"}
              userProps={props.telCelular ? props.telCelular : "NÃO POSSUI"}
            />

            <FormShowUserData
              formLabel={"Telefone Outro - Recado"}
              userProps={props.telOutro ? props.telOutro : "NÃO POSSUI"}
            />

            <FormShowUserData formLabel={"E-mail Pessoal"} userProps={props.email} />

            
          </SimpleGrid>

          
          <Box mb="3rem">
            <Box
              fontWeight="bold"
              border="1px"
              textAlign="center"
              bg="gray.500"
              borderRadius="none"
            >
              DADOS PESSOAIS DO(A) PACIENTE / BENEFICIÁRIO ATENDIDO
            </Box>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
              >
                Nome
              </FormLabel>

              <Input
                placeholder="Nome"
                w="100%"
                fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                borderRadius="none"
                borderColor="gray.500"
                  {...register("nome", {
                    required: "Campo obrigatório",
                  })}
              />

              {errors.nome && <Text color="red">{errors.nome.message}</Text>}
            </FormControl>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  CPF
                </FormLabel>

                <Input
                  id="cpf"
                  placeholder="Preencha o CPF"
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register("cpf", {
                    required: "Campo obrigatório",
                    minLength: {
                      value: 11,
                      message: "O CPF deve conter 11 dígitos",
                    },
                    maxLength: {
                      value: 11,
                      message: "O CPF deve conter 11 dígitos",
                    },
                  })}
                />
                {errors.cpf && <Text color="red">{errors.cpf.message}</Text>}
              </FormControl>

              

            
            <Box
              fontWeight="bold"
              border="1px"
              textAlign="center"
              bg="gray.500"
            >
              DADOS DO ESTABELECIMENTO DE SAÚDE
            </Box>
            <SimpleGrid columns={{ base: 4, sm: 4, md: 4, lg: 4 }}>
            <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Data
                </FormLabel>

                <Input
                as={InputMask}
                mask={'99/99/9999'}
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="__/__/____"
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register('data', {
                    required: 'Campo obrigatório',
                    maxLength: {
                      value: 10,
                      message:
                        'Deve ter no máximo 10 caracteres no formato dd/mm/aaaa',
                    },
                    pattern: {
                      value:
                        /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4})/,
                      message: 'Formato correto dd/mm/aaaa',
                    },
                  })}
                />
                {errors.data && <Text color="red">{errors.data.message}</Text>}
              </FormControl>
              <FormControl>
              <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Atendimento
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register("atendimento", {
                    required: "Campo obrigatório",
                  })}
                />
                {errors.atendimento && <Text color="red">{errors.atendimento.message}</Text>}
              </FormControl>
              <FormControl>
              <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Mês de desconto
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register("mes_desconto", {
                    required: "Campo obrigatório",
                  })}
                />
                {errors.mes_desconto && <Text color="red">{errors.mes_desconto.message}</Text>}
              </FormControl>
              <FormControl>
              <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Valor
                </FormLabel>

                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="R$ 100,00"
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register("valor", {
                    required: "Campo obrigatório",
                  })}
                />
                {errors.valor && <Text color="red">{errors.valor.message}</Text>}
              </FormControl>
              <FormControl>
                <Input
                  as={InputMask}
                  mask={'99/99/9999'}
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    placeholder="__/__/____"
                    borderRadius="none"
                    borderColor="gray.500"
                    {...register('data2', {
                      maxLength: {
                        value: 10,
                        message:
                          'Deve ter no máximo 10 caracteres no formato dd/mm/aaaa',
                      },
                      pattern: {
                        value:
                          /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4})/,
                        message: 'Formato correto dd/mm/aaaa',
                      },
                    })}
                />{errors.bancdata2o && <Text color="red">{errors.data2.message}</Text>}
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="R$ 100,00"
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl><FormControl>
                <Input
                  as={InputMask}
                  mask={'99/99/9999'}
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    placeholder="__/__/____"
                    borderRadius="none"
                    borderColor="gray.500"
                    {...register('data3', {
                      maxLength: {
                        value: 10,
                        message:
                          'Deve ter no máximo 10 caracteres no formato dd/mm/aaaa',
                      },
                      pattern: {
                        value:
                          /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4})/,
                        message: 'Formato correto dd/mm/aaaa',
                      },
                    })}
                />{errors.data3 && <Text color="red">{errors.data3.message}</Text>}
                
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="R$ 100,00"
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl><FormControl>
                <Input
                  as={InputMask}
                  mask={'99/99/9999'}
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    placeholder="__/__/____"
                    borderRadius="none"
                    borderColor="gray.500"
                    {...register('data4', {
                      maxLength: {
                        value: 10,
                        message:
                          'Deve ter no máximo 10 caracteres no formato dd/mm/aaaa',
                      },
                      pattern: {
                        value:
                          /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4})/,
                        message: 'Formato correto dd/mm/aaaa',
                      },
                    })}
                />
                {errors.data4 && <Text color="red">{errors.data4.message}</Text>}
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="R$ 100,00"
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl><FormControl>
                <Input
                  as={InputMask}
                  mask={'99/99/9999'}
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    placeholder="__/__/____"
                    borderRadius="none"
                    borderColor="gray.500"
                    {...register('data5', {
                      maxLength: {
                        value: 10,
                        message:
                          'Deve ter no máximo 10 caracteres no formato dd/mm/aaaa',
                      },
                      pattern: {
                        value:
                          /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4})/,
                        message: 'Formato correto dd/mm/aaaa',
                      },
                    })}
                />
                {errors.data5 && <Text color="red">{errors.data5.message}</Text>}
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="R$ 100,00"
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl><FormControl>
                <Input
                  as={InputMask}
                  mask={'99/99/9999'}
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    placeholder="__/__/____"
                    borderRadius="none"
                    borderColor="gray.500"
                    {...register('data6', {
                      maxLength: {
                        value: 10,
                        message:
                          'Deve ter no máximo 10 caracteres no formato dd/mm/aaaa',
                      },
                      pattern: {
                        value:
                          /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4})/,
                        message: 'Formato correto dd/mm/aaaa',
                      },
                    })}                 
                />
                {errors.data6 && <Text color="red">{errors.data6.message}</Text>}
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="R$ 100,00"
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl><FormControl>
                <Input
                  as={InputMask}
                  mask={'99/99/9999'}
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    placeholder="__/__/____"
                    borderRadius="none"
                    borderColor="gray.500"
                    {...register('data7', {
                      maxLength: {
                        value: 10,
                        message:
                          'Deve ter no máximo 10 caracteres no formato dd/mm/aaaa',
                      },
                      pattern: {
                        value:
                          /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4})/,
                        message: 'Formato correto dd/mm/aaaa',
                      },
                    })}
                />
                {errors.data7 && <Text color="red">{errors.data7.message}</Text>}
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="R$ 100,00"
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl><FormControl>
                <Input
                  as={InputMask}
                  mask={'99/99/9999'}
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    placeholder="__/__/____"
                    borderRadius="none"
                    borderColor="gray.500"
                    {...register('data8', {
                      maxLength: {
                        value: 10,
                        message:
                          'Deve ter no máximo 10 caracteres no formato dd/mm/aaaa',
                      },
                      pattern: {
                        value:
                          /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4})/,
                        message: 'Formato correto dd/mm/aaaa',
                      },
                    })}
                />
                {errors.data8 && <Text color="red">{errors.data8.message}</Text>}
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="R$ 100,00"
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl><FormControl>
                <Input
                  as={InputMask}
                  mask={'99/99/9999'}
                    w="100%"
                    fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                    placeholder="__/__/____"
                    borderRadius="none"
                    borderColor="gray.500"
                    {...register('data9', {
                      maxLength: {
                        value: 10,
                        message:
                          'Deve ter no máximo 10 caracteres no formato dd/mm/aaaa',
                      },
                      pattern: {
                        value:
                          /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4})/,
                        message: 'Formato correto dd/mm/aaaa',
                      },
                    })}
                />
                {errors.data9 && <Text color="red">{errors.data9.message}</Text>}
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder=""
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
<FormControl>
                <Input
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  placeholder="R$ 100,00"
                  borderRadius="none"
                  borderColor="gray.500"
                />
</FormControl>
            </SimpleGrid>

            {/* <Box
              fontWeight="bold"
              border="1px"
              textAlign="center"
              bg="gray.500"
              mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
            >
              CONTATOS DO(A) GENITOR(A){" "}
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Telefone Residencial
                </FormLabel>

                <Input
                  placeholder="11999999999"
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register("telResidencial", {
                    minLength: {
                      value: 11,
                      message: "Deve conter 11 caracteres",
                    },
                    maxLength: {
                      value: 11,
                      message: "Deve conter 11 caracteres",
                    },
                  })}
                />

                {errors.telResidencial && (
                  <Text color="red">{errors.telResidencial.message}</Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Telefone Celular
                </FormLabel>

                <Input
                  id="telCelular"
                  placeholder="11999999999"
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register("telCelular", {
                    required: "Campo obrigatório",
                    minLength: {
                      value: 11,
                      message: "Deve conter 11 caracteres",
                    },
                    maxLength: {
                      value: 11,
                      message: "Deve conter 11 caracteres",
                    },
                  })}
                />

                {errors.telCelular && (
                  <Text color="red">{errors.telCelular.message}</Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  Telefone Outro
                </FormLabel>

                <Input
                  placeholder="11999999999"
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register("telOutro", {
                    minLength: {
                      value: 11,
                      message: "Deve conter 11 caracteres",
                    },
                    maxLength: {
                      value: 11,
                      message: "Deve conter 11 caracteres",
                    },
                  })}
                />

                {errors.telOutro && (
                  <Text color="red">{errors.telOutro.message}</Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="700"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                >
                  E-mail
                </FormLabel>

                <Input
                  type="email"
                  placeholder="Preencha o e-mail"
                  w="100%"
                  fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  borderRadius="none"
                  borderColor="gray.500"
                  {...register("email", {
                    required: "Campo obrigatório",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "E-mail inválido",
                    },
                  })}
                />

                {errors.email && (
                  <Text color="red">{errors.email.message}</Text>
                )}
              </FormControl>
            </SimpleGrid> */}
          </Box>
        </Box>

        <div>

          <br />
          <Text>Por intermédio do presente formulário, requeiro/solicito ______________________________________________________________________________________________________________<br />
            ___________________________________________________________________________________________________________________________________________________________________________<br />
            ___________________________________________________________________________________________________________________________________________________________________________<br />
            ___________________________________________________________________________________________________________________________________________________________________________<br />
            ___________________________________________________________________________________________________________________________________________________________________________<br />
            ___________________________________________________________________________________________________________________________________________________________________________<br />
            ___________________________________________________________________________________________________________________________________________________________________________<br />
            ___________________________________________________________________________________________________________________________________________________________________________<br />
            ___________________________________________________________________________________________________________________________________________________________________________<br />
            ___________________________________________________________________________________________________________________________________________________________________________<br />
            ___________________________________________________________________________________________________________________________________________________________________________<br />
            ___________________________________________________________________________________________________________________________________________________________________________<br />
            ___________________________________________________________________________________________________________________________________________________________________________<br /><br />
          </Text>

        </div>

        <Flex justify="center" w="100%" mb="2rem">
          <VStack>
            <Text>Data, ________ / ____________ / _________ Assinatura contribuinte: ____________________________________</Text>
            <Text>Nome: ___________________ CPF: __________________________</Text>
          </VStack>
        </Flex>
        <br />
        <br />
        <br />
        <br />
        <Flex justify="center" w="100%" mb="2rem">
          <Box mb="4rem" flexWrap="wrap" w="50%">
            <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
              Documentos Apresentados e conferidos
            </Box>
            <Box
              border="1px"
              borderTop="none"
              borderColor="gray.500"
              w="100%"
              textAlign="left"
              p="0.5rem">
              <Text>
                <table>
                  <tr>
                    <td>(&#20;&#20;&#20;) Holerite do(a) Contribuinte. &#20;&#20;&#20;&#20;&#20;&#20;&#20;</td>
                    <td>(&#20;&#20;&#20;) Extrato de Contas Médicas.</td>
                  </tr>
                  
                  <tr>
                    <td>(&#20;&#20;&#20;) ___________________________</td>
                    <td></td>
                  </tr>
                </table>
                <br />
                <table>
                  <tr>
                    <td><b>PROCEDIMENTO&#20;&#20;&#20;&#20;&#20;&#20;</b></td>
                    <td><b>DATA&#20;&#20;&#20;&#20;&#20;&#20;</b></td>
                    <td><b>NOME&#20;&#20;&#20;&#20;&#20;&#20;&#20;&#20;&#20;</b></td>
                    <td><b>RUBRICA&#20;&#20;&#20;&#20;&#20;&#20;</b></td>
                  </tr>
                  <tr>
                    <td>Conferido por</td>
                    <td>_____/_____/_____&#20;&#20;</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Atualizado por</td>
                    <td>_____/_____/_____&#20;&#20;</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Digitalizado por</td>
                    <td>_____/_____/_____&#20;&#20;</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Lançado por</td>
                    <td>_____/_____/_____&#20;&#20;</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
                <br />
                <b>(uso interno)</b>
              </Text>
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
          columns={{ base: 1, sm: 2, md: 4, lg: 4 }}
          spacing={5}
          justifyItems="center"
        >
          <Button
            type="button"
            fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
            bg="blue.default"
            color="white.default"
            px={{ base: 4, sm: 4, md: 5, lg: 5 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: "none" }}
            onClick={() => downloadDocument("devolucao-de-coparticipacao")}
          >
            Baixar Preenchido
          </Button>

          <FormLabel
            fontWeight="700"
            whiteSpace="nowrap"
            htmlFor="files[]"
            fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
            bg="blue.default"
            color="white.default"
            px={4}
            py={2}
            mb="none"
            borderRadius="3xl"
            _hover={{ color: "none" }}
          >
            Anexar Documentos
          </FormLabel>

          <Input
            id="files[]"
            {...register("file")}
            type="file"
            display="none"
            onChange={handleFile}
          />
          <Button
            type="submit"
            fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
            bg="blue.default"
            color="white.default"
            px={{ base: 7, sm: 7, md: 8, lg: 10 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: "none" }}
            isDisabled={displayFileName.length <= 2}
          >
            Enviar
          </Button>

          <Button
            type="button"
            fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
            bg="blue.default"
            color="white.default"
            px={{ base: 4, sm: 4, md: 4, lg: 4 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: "none" }}
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

        <Text textAlign="center" mt={6} fontWeight="700">
          Após preenchimento do formulário, clicar no botão &quot;Baixar
          Preenchido&quot;, salvar e anexar aos demais documentos comprobatórios
        </Text>

        <Center>
          <Link href="/area-restrita/servicos/formularios" passHref>
            <Button
              fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
              bg="blue.default"
              color="white.default"
              px={{ base: 7, sm: 7, md: 8, lg: 10 }}
              py={5}
              borderRadius="3xl"
              _hover={{ color: "none" }}
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

export default RefundOfCoparticipation;
