import { HStack, List, ListItem } from "@chakra-ui/react";
import Link from "../Link";

export const Links = () => {
  return (
    <List display="flex" flexDirection="row" listStyleType="none" gap="10px">
      <ListItem>
        <Link
          fontSize="xs"
          href="https://servicos.sp.gov.br/"
          isExternal
          whiteSpace="nowrap"
          aria-label="Acesse o portal Cidadão SP"
          display="inline-block"
        >
          CIDADÃO SP
        </Link>
      </ListItem>

      <ListItem>
        <Link
          fontSize="xs"
          href="https://www.investe.sp.gov.br/"
          isExternal
          whiteSpace="nowrap"
          aria-label="Acesse o portal Investe SP"
          display="inline-block"
        >
          INVESTE SP
        </Link>
      </ListItem>

      <ListItem>
        <Link
          fontSize="xs"
          href="https://www.saopaulo.sp.gov.br/conhecasp/"
          isExternal
          whiteSpace="nowrap"
          aria-label="Acesse o portal Internacional SP"
          display="inline-block"
        >
          INTERNACIONAL SP
        </Link>
      </ListItem>

      <ListItem>
        <Link
          fontSize="xs"
          href="https://www.saopaulo.sp.gov.br/"
          isExternal
          whiteSpace="nowrap"
          aria-label="PORTAL DO GOVERNO - Acesse o portal GOV"
          display="inline-block"
        >
          PORTAL DO GOVERNO
        </Link>
      </ListItem>

      <ListItem>
        <Link
          fontSize="xs"
          href="https://www.transparencia.sp.gov.br/"
          isExternal
          whiteSpace="nowrap"
          aria-label="Acesse o portal da transparência GOV"
          display="inline-block"
        >
          PORTAL DA TRANSPARÊNCIA GOV
        </Link>
      </ListItem>
    </List>
  );
};
