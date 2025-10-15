import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FormShowUserDataDTO } from './FormShowUserDataDTO';

type FormShowUserData = {
  formLabel: string;
  userProps: FormShowUserDataDTO | any;
  width?: string;
};

const FormShowUserData = ({
  formLabel,
  userProps,
  width,
}: FormShowUserData) => {
  return (
    <FormControl>
      <FormLabel
        fontWeight="700"
        fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
      >
        {formLabel}
      </FormLabel>

      <Input
        value={userProps}
        readOnly
        w={{ base: '100%', sm: '100%', md: '100%', lg: `${width}` }}
        fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
        borderRadius="none"
        borderColor="gray.500"
      />
    </FormControl>
  );
};

export default FormShowUserData;
