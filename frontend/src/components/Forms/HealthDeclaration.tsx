import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  useToast,
  VStack,
  UnorderedList,
  ListItem,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td

} from '@chakra-ui/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { UserProps } from '../../DTO/UserDTO';
import { setupAPIClient } from '../../services/setupAPIClient';
import { downloadDocument } from '../../utils/downloadDocument';
import { generateTodayDate } from '../../utils/generateTodayDate';
import { printDocument } from '../../utils/printDocument';
import FormHeader from './FormHeader';
import { useState } from 'react';
import InputMask from 'react-input-mask'

const HealthDeclaration = (props: UserProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

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
    formData.append('nome', data.nome);
    formData.append('nomeSocial', data.nomeSocial);
    formData.append('parentesco', data.parentesco);
    formData.append('dataNascimento', data.dataNascimento);
    formData.append('cpf', data.cpf);
    formData.append('altura', data.altura);
    formData.append('peso', data.peso);

    formData.append('nomeContribuinte', data.nomeContribuinte);
    formData.append('nomeSocialContribuinte', data.nomeSocialContribuinte);
    formData.append('reContribuinte', data.reContribuinte);
    formData.append('postoContribuinte', data.postoContribuinte);

    formData.append('pergunta_01', data.pergunta_01);
    formData.append('pergunta_02', data.pergunta_02);
    formData.append('pergunta_03', data.pergunta_03);
    formData.append('pergunta_04', data.pergunta_04);
    formData.append('pergunta_05', data.pergunta_05);
    formData.append('pergunta_06', data.pergunta_06);
    formData.append('pergunta_07', data.pergunta_07);
    formData.append('pergunta_08', data.pergunta_08);
    formData.append('pergunta_09', data.pergunta_09);
    formData.append('pergunta_10', data.pergunta_10);
    formData.append('pergunta_11', data.pergunta_11);
    formData.append('pergunta_12', data.pergunta_12);
    formData.append('pergunta_13', data.pergunta_13);
    formData.append('pergunta_14', data.pergunta_14);
    formData.append('pergunta_15', data.pergunta_15);
    formData.append('pergunta_16', data.pergunta_16);
    formData.append('pergunta_17', data.pergunta_17);
    formData.append('pergunta_18', data.pergunta_18);
    formData.append('pergunta_19', data.pergunta_19);
    formData.append('pergunta_20', data.pergunta_20);
    formData.append('pergunta_21', data.pergunta_21);
    formData.append('pergunta_22', data.pergunta_22);
    formData.append('pergunta_23', data.pergunta_23);

    for (let i = 0; i < file.length; i++) {
      formData.append('file[]', file[i]);
    }

    try {
      {
        await api({
          method: 'post',
          url: '/user/forms/health-declaration',
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
      maxW="1280px"
      mb={10}
      fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <FormHeader
          title={'DECLARAÇÃO DE SAÚDE DE BENEFICIÁRIO(A) E/OU PENSIONISTA'}
          attachment={'B'}
        />

        <Box flexWrap="wrap" w="100%">
          <Box fontWeight="bold" border="1px" textAlign="center" bg="gray.500">
            IDENTIFICAÇÃO - BENEFICIÁRIO(A)/PENSIONISTA
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
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              borderRadius="none"
              borderColor="gray.500"
              {...register('nome', {
                required: 'Campo obrigatório',
                maxLength: {
                  value: 70,
                  message: 'Tamanho máximo 70 caracteres',
                },
              })}
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
              placeholder="Nome Social"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              borderRadius="none"
              borderColor="gray.500"
              {...register('nomeSocial', {
                required: 'Campo obrigatório',
                maxLength: {
                  value: 70,
                  message: 'Tamanho máximo 70 caracteres',
                },
              })}
            />

            {errors.nome && <Text color="red">{errors.nome.message}</Text>}
          </FormControl>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Grau de Parentesco
              </FormLabel>

              <Select
                {...register('parentesco')}
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                <option selected value={1}>
                  COMPANHEIRO
                </option>
                <option value={2}>CÔNJUGE</option>
                <option value={3}>FILHO</option>
                <option value={4}>MÃE</option>
                <option value={5}>PAI</option>
                <option value={6}>T.G COM ADOÇÃO</option>
                <option value={7}>ENTEADO</option>
                <option value={8}>OUTROS</option>
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
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                {...register('dataNascimento', {
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

              {errors.dataNascimento && (
                <Text color="red">{errors.dataNascimento.message}</Text>
              )}
            </FormControl>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }}>
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
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                {...register('cpf', {
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 11,
                    message: 'O CPF deve conter 11 dígitos',
                  },
                  maxLength: {
                    value: 11,
                    message: 'O CPF deve conter 11 dígitos',
                  },
                })}
              />

              {errors.cpf && <Text color="red">{errors.cpf.message}</Text>}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Altura(cm)
              </FormLabel>

              <Input
                placeholder="Altura"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                {...register('altura', {
                  required: 'Campo obrigatório',
                  maxLength: {
                    value: 3,
                    message: 'Tamanho máximo 3 caracteres',
                  },
                })}
              />

              {errors.altura && (
                <Text color="red">{errors.altura.message}</Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Peso(kg)
              </FormLabel>

              <Input
                placeholder="Peso"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                {...register('peso', {
                  required: 'Campo obrigatório',
                  maxLength: {
                    value: 3,
                    message: 'Tamanho máximo 3 caracteres',
                  },
                })}
              />

              {errors.peso && <Text color="red">{errors.peso.message}</Text>}
            </FormControl>
          </SimpleGrid>
        </Box>

        <Box w="100%">
          <Box
            fontWeight="bold"
            border="1px"
            textAlign="center"
            bg="gray.500"
            mt={{ base: 5, sm: 5, md: 5, lg: 0 }}
          >
            IDENTIFICAÇÃO DO(A) CONTRIBUINTE
          </Box>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Nome
            </FormLabel>

            <Input
              placeholder="Nome do contribuinte"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              borderRadius="none"
              borderColor="gray.500"
              {...register('nomeContribuinte', {
                required: 'Campo obrigatório',
                maxLength: {
                  value: 70,
                  message: 'Tamanho máximo 70 caracteres',
                },
              })}
            />

            {errors.nomeContribuinte && (
              <Text color="red">{errors.nomeContribuinte.message}</Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel
              fontWeight="700"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            >
              Nome Social
            </FormLabel>

            <Input
              placeholder="Nome Social do contribuinte"
              fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              borderRadius="none"
              borderColor="gray.500"
              {...register('nomeSocialContribuinte', {
                required: 'Campo obrigatório',
                maxLength: {
                  value: 70,
                  message: 'Tamanho máximo 70 caracteres',
                },
              })}
            />

            {errors.nomeContribuinte && (
              <Text color="red">{errors.nomeContribuinte.message}</Text>
            )}
          </FormControl>

          <SimpleGrid mb={5} columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                RE
              </FormLabel>

              <Input
                placeholder="RE do contribuinte"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                borderRadius="none"
                borderColor="gray.500"
                {...register('reContribuinte', {
                  required: 'Campo obrigatório',
                  maxLength: {
                    value: 10,
                    message: 'Tamanho máximo 10 caracteres',
                  },
                })}
              />

              {errors.reContribuinte && (
                <Text color="red">{errors.reContribuinte.message}</Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontWeight="700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                Posto/Graduação
              </FormLabel>

              <Select
                {...register('postoContribuinte')}
                fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              >
                <option selected value={1}>
                  SOLDADO PM 2ª CLASSE
                </option>
                <option value={2}>SOLDADO PM 1ª CLASSE</option>
                <option value={3}>CABO PM</option>
                <option value={4}>3º SGT PM</option>
                <option value={5}>2º SGT PM</option>
                <option value={6}>1º SGT PM</option>
                <option value={7}>ALUNO OFICIAL</option>
                <option value={8}>SUB TEN PM</option>
                <option value={9}>ASPIRANTE OFICIAL PM</option>
                <option value={10}>2º TEN PM</option>
                <option value={11}>1º TEN PM</option>
                <option value={12}>CAP PM</option>
                <option value={13}>MAJOR PM</option>
                <option value={14}>TEN CEL PM</option>
                <option value={15}>CEL PM</option>
                <option value={16}>1 CFO PM</option>
                <option value={17}>2 CFO PM</option>
                <option value={18}>3 CFO PM</option>
                <option value={19}>4 CFO PM</option>
                <option value={20}>SEM POSTO/GRADUACAO</option>
              </Select>
            </FormControl>
          </SimpleGrid>
        </Box>

        <Text fontWeight="700">
          Conforme documentação juntada, está sob minha (assinalar abaixo):
        </Text>

        <VStack
          align="flex-start"
          fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
        >
          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>1</Text>

              <Text>
                Problemas de circulação nas veias e artérias (varizes,
                aneurismas e/ou outros)?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio
                  {...register('pergunta_01')}
                  value="Sim"
                  mr={2}
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Sim
                </Radio>

                <Radio
                  {...register('pergunta_01')}
                  value="Não"
                  fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                >
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <HStack>
                <Text>2</Text>

                <Text>
                  Problemas no coração (infarto, pressão alta, arritmia, e/ou
                  outros)?
                </Text>
              </HStack>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_02')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_02')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>3</Text>

              <Text>
                Problemas glandulares (tireoide e/ou outros) ou hormonais
                (diabetes e/ou outros)?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_03')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_03')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>4</Text>

              <Text>
                Problemas gastrointestinais (estômago, vesícula, fígado,
                intestino e/ou ânus)?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_04')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_04')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>5</Text>

              <Text>Hérnias de qualquer tipo?</Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_05')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_05')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>6</Text>

              <Text>
                Problemas com o sangue, como: anemia, leucemia e/ou outros?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_06')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_06')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>7</Text>

              <Text>Problemas com cálculos renais e/ou vesícula?</Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_07')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_07')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>8</Text>

              <Text>
                Problemas urinários, nos rins, bexiga, uretra, próstata etc?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_08')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_08')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>9</Text>

              <Text>
                Problemas neurológicos (derrames, paralisia e/ou outros)?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_09')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_09')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>10</Text>

              <Text>Problemas psiquiátricos (depressão e/ou outros)?</Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_10')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_10')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>11</Text>

              <Text>Problemas de ouvido, nariz e garganta?</Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_11')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_11')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>12</Text>

              <Text>
                Problemas respiratórios (asma, pneumonia e/ou outros)?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_12')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_12')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>13</Text>

              <Text>
                Problemas ortopédicos (artrite, coluna, deformidades e/ou
                outros)?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_13')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_13')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>14</Text>

              <Text>
                Problemas ginecológicos (mamas, ovários, útero e/ou outros)?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_14')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_14')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>15</Text>

              <Text>
                Problemas infectocontagiosos (aids, hepatite e/ou outros)?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_15')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_15')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>16</Text>

              <Text>
                Problemas de cânceres ou tumores de qualquer natureza?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_16')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_16')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>17</Text>

              <Text>Problemas congênitos ou hereditários?</Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_17')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_17')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>18</Text>

              <Text>
                Problemas oftalmológicos (catarata, glaucoma, miopia e/ou
                outros)?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_18')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_18')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>19</Text>

              <Text>
                Doenças da pele (dermatite, pintas escuras, queloides, psoríase
                e/ou outras)?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_19')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_19')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>20</Text>

              <Text>
                Realizou ou realiza tratamento para dependência química (álcool
                e/ou drogas)?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_20')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_20')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>21</Text>

              <Text>
                Já necessitou de internação para tratamento clínico ou
                cirúrgico? Caso a resposta for sim, especifique qual o
                tratamento:
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_21')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_21')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>22</Text>

              <Text>
                Realiza ou tem programado algum tratamento clínico ou cirúrgico?
              </Text>
            </HStack>

            <div>
              <RadioGroup defaultValue="Não" w="100%">
                <Radio {...register('pergunta_22')} value="Sim" mr={2}>
                  Sim
                </Radio>
                <Radio {...register('pergunta_22')} value="Não">
                  Não
                </Radio>
              </RadioGroup>
            </div>
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Text>23</Text>

              <Text>
                Possui alguma doença que não foi mencionada acima? Caso a
                resposta for sim, especifique qual a doença:
              </Text>
            </HStack>
          </HStack>

          <Box w="100%">
            <Textarea
              placeholder="Especifique a doença"
              {...register('pergunta_23')}
            />
          </Box>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 1, lg: 1 }}
          mb="2rem"
          mt={10}
        >
    <Box w="100%" p={4} justifyContent={'center'} display={'flex'}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>DATA</Th>
            <Th>Assinatura contribuinte/pensionista</Th>
            <Th>Assinatura beneficiário(a)/representante legal</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              __/__/____
            </Td>
            <Td>
              _________________________
            </Td>
            <Td>
              _________________________
            </Td>
          </Tr>
          <Tr>
            <Td>Nome</Td>
            <Td>
              _________________________
            </Td>
            <Td>
              _________________________
            </Td>
          </Tr>
          <Tr>
            <Td>CPF/CIN</Td>
            <Td>
              _________________________
            </Td>
            <Td>
              _________________________
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
        </SimpleGrid>

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
            fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
            bg="blue.default"
            color="white.default"
            px={{ base: 4, sm: 4, md: 5, lg: 5 }}
            py={5}
            borderRadius="3xl"
            _hover={{ color: 'none' }}
            onClick={() => downloadDocument('declaracao-de-saude')}
          >
            Baixar Preenchido
          </Button>

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

        <Text textAlign="center" mt={6} fontWeight="700">
          Após preenchimento do formulário, clicar no botão &quot;Baixar
          Preenchido&quot;, salvar e anexar aos demais documentos comprobatórios
        </Text>

        <Center>
          <Link href="/area-restrita/servicos/formularios" passHref>
            <Button
              bg="blue.default"
              color="white.default"
              px={10}
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

export default HealthDeclaration;
