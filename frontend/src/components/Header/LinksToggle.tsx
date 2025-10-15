import {
  Box,
  IconButton,
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import Link from '../Link';

export const LinksToggle = () => {
  return (
    <Box display={['flex', 'flex', 'flex', 'none']}>
      <ChakraMenu>
        <MenuButton
          size="sm"
          as={IconButton}
          aria-label="Options"
          icon={<FaEllipsisV />}
          variant="outline"
        />
        <MenuList>
          <MenuItem>
            <Link href="https://servicos.sp.gov.br/" isExternal fontSize="sm">
              CIDADÃO SP
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href="https://www.investe.sp.gov.br/" isExternal fontSize="sm">
              INVESTE SP
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href="https://www.saopaulo.sp.gov.br/conhecasp/" isExternal fontSize="sm">
              INTERNACIONAL SP
            </Link>
          </MenuItem>


          <MenuItem>
            <Link href="https://www.saopaulo.sp.gov.br/" isExternal fontSize="sm">
              PORTAL DO GOVERNO
            </Link>
          </MenuItem>


          <MenuItem>
            <Link href="https://www.transparencia.sp.gov.br/" isExternal fontSize="sm">
            PORTAL DA TRANSPARÊNCIA GOV
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href="http://www.ssp.sp.gov.br/" isExternal fontSize="sm">
              Secretaria da Segurança Pública
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              href="https://policiamilitar.sp.gov.br/"
              isExternal
              fontSize="sm"
            >
              Polícia Militar SP
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href="http://www.spprev.sp.gov.br/" isExternal fontSize="sm">
              SPPREV
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              href="https://www.cruzazulsp.com.br/"
              isExternal
              fontSize="sm"
            >
              Cruz Azul SP
            </Link>
          </MenuItem>
        </MenuList>
      </ChakraMenu>
    </Box>
  );
};
