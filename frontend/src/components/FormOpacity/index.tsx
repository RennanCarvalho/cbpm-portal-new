import { FormControl, FormLabel, Input, Tooltip } from '@chakra-ui/react';
import { FormOpacityDTO } from './FormOpacityDTO';

type FormOpacity = {
  formLabel: string;
  userProps: FormOpacityDTO | any;
};

const FormOpacity = ({ formLabel, userProps }: FormOpacity) => {
  return (
    <Tooltip label="Caso queira atualizar esse campo, entrar em contato com o Setor de Cadastro - CBPM através do e-mail: cadastro@cbpm.sp.gov.br ou telefone: (11) 3315-3000">
      <FormControl>
        <FormLabel
          fontWeight="700"
          fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
        >
          {formLabel}
        </FormLabel>

        <Input
          value={userProps}
          fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
          readOnly
          bg="gray.200"
          borderRadius="3xl"
          borderColor="blue.default"
          maxW="280px"
          w="100%"
          h="40px"
          opacity="0.5"
          _placeholder={{ color: 'black.default' }}
          _hover={{ borderColor: 'none' }}
        />
      </FormControl>
    </Tooltip>
  );
};

export default FormOpacity;
