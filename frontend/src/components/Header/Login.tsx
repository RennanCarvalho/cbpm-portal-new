import { HStack, Icon, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { destroyCookie, parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Link from '../Link';

export const Login = () => {
  const { asPath } = useRouter();
  const [isLogged, setIsLogged] = useState<string>();

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
    lg: true,
  });

  useEffect(() => {
    if (asPath.startsWith('/area-restrita')) {
      const { 'nextauth.name': name } = parseCookies();

      const firstName = name?.split(' ')[0];

      setIsLogged(firstName);
    } else {
      destroyCookie(null, 'nextauth.token');
    }
  }, [isLogged, asPath]);

  return (
    <HStack>
      {/* Usuário não está logado e tamanho de tela "base" */}
      {!isLogged && !isWideVersion && (
        <HStack>
          <Link href={`${process.env.URL_PUBLIC_AREA || 'https://www.cbpm.sp.gov.br/'}`}>
            <Icon as={FaUser} fontSize="20px" color="blue.default" mt="6px" />
          </Link>
        </HStack>
      )}

      {/* Usuário não está logado e tamanho de tela acima de "base" */}
      {!isLogged && isWideVersion && (
        <HStack>
          <Icon as={FaUser} fontSize="20px" color="blue.default" />
          <Link href={`${process.env.URL_PUBLIC_AREA || 'https://www.cbpm.sp.gov.br/'}`} whiteSpace="nowrap">
            Voltar para Área Pública
          </Link>
        </HStack>
      )}

      {/* Usuário está logado e tamanho de tela "base" */}
      {isLogged && !isWideVersion && (
        <Link href="/area-restrita/servicos">
          <Icon as={FaUser} fontSize="20px" color="blue.default" mt="6px" />
        </Link>
      )}

      {/* Usuário está logado e tamanho de tela acima de "base" */}
      {isLogged && isWideVersion && (
        <HStack>
          <Icon as={FaUser} fontSize="20px" color="blue.default" />
          <Link href="/login" whiteSpace="nowrap">
            {isLogged}
          </Link>
        </HStack>
      )}
    </HStack>
  );
};
