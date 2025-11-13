import { Box, Flex, Text } from '@chakra-ui/react';

interface DivisorProps {
  texto: string;
  cor?: string;
  isHorizontal?: boolean;
}

export const Divisor = ({
  texto,
  cor = 'gray',
  isHorizontal = false,
}: DivisorProps) => {
  const direction = isHorizontal ? 'row' : 'column';
  const borderProp = isHorizontal ? 'borderBottom' : 'borderLeft';

  return (
    <Flex
      flexDirection={direction}
      align="center"
      justify="center"
      color="gray"
      gap="10px"
      minWidth={isHorizontal ? '500px' : '100px'}
      minHeight={isHorizontal ? '100px' : '100%'}
      height='-webkit-fill-available'
    >
      <Box {...{ [borderProp]: `2px solid ${cor}` }} flex="1" />
      <Text>{texto}</Text>
      <Box {...{ [borderProp]: `2px solid ${cor}` }} flex="1" />
    </Flex>
  );
};
