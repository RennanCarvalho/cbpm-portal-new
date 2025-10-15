import { Box, Button, Flex, Img, Text, VStack } from '@chakra-ui/react';
import Link from '../Link';

export const Divisor = ({ texto }: { texto: string }) => {
  return (
    <Flex flexDirection={'column'} width={'100px'} align={'center'}color='grey'>
        <Box borderLeft={'2px'} flex="1"></Box>
        <Text>{texto}</Text>
        <Box borderLeft={'2px'} flex="1" ></Box>
    </Flex>
    
  );
};
