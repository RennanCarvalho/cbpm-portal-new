import { Link } from '@chakra-ui/react';

export const MainContentLink = () => {
  return (
    <Link 
  href="#principal"
  position="absolute"
  left="-9999px"
  top="auto"
  w="1px"
  h="1px"
  overflow="hidden"
  _focusVisible={{
    left: "0",
    top: "0",
    w: "auto",
    h: "auto",
    p: "1rem",
    bg: "#003366",  // Dark Blue (high contrast)
    color: "#FFFFFF", // White text
    zIndex: 999,
  }}
  color="#FFFFFF"  // White text
  bgColor="#003366" // Dark Blue background
  width={{ base: '80px', sm: '120px', md: '150px', lg: '200px' }}
  p={1}
  fontWeight="700"
>
  Ir para o conteúdo principal
</Link>
  );
};
