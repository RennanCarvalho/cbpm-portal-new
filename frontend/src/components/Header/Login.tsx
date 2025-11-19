import {
  Box,
  Container,
  HStack,
  Icon,
  useBreakpointValue,
  VStack,
  Text
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { destroyCookie, parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import { FaHome, FaLink, FaSignOutAlt, FaUser } from 'react-icons/fa';
import Link from '../Link';
import { Divisor } from '../Login/Divisor';

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
    <HStack w={'100%'} justifyContent={'center'}>
      <VStack w="100%">
        <Divisor texto="Portal do Cliente" isHorizontal={true} />

        <HStack>
          <Link href={"/area-restrita/servicos"} p={'10px'} hidden={!isLogged}>
            <HStack>
              <Icon as={FaUser} color="blue.default" />
              <Text>Início</Text>
            </HStack>
          </Link>

          <Link href={process.env.NEXT_PUBLIC_HOME || 'https://www.cbpm.sp.gov.br/'} p={'10px'} hidden={isLogged}>
            <HStack>
              <Icon as={FaLink} color="blue.default" />
              <Text>Voltar para Área Pública</Text>
            </HStack>
          </Link>

          <Link href={"/login"} p={'10px'} hidden={!isLogged}>
            <HStack>
              <Icon as={FaSignOutAlt} color="blue.default" />
              <Text>Sair</Text>
            </HStack>
          </Link>
        </HStack>



        {/* {!isLogged && !isWideVersion && (
          <HStack>
            <Link
              href={`${
                process.env.NEXT_PUBLIC_HOME || 'https://www.cbpm.sp.gov.br/'
              }`}
            >
              <Icon as={FaHome} fontSize="20px" color="blue.default" mt="6px" />
            </Link>
          </HStack>
        )}

        {!isLogged && isWideVersion && (
          <HStack h={'71px'}>
            <Link
              href={`${
                process.env.NEXT_PUBLIC_HOME || 'https://www.cbpm.sp.gov.br/'
              }`}
              whiteSpace="nowrap"
            >
            <Icon as={FaHome} fontSize="20px" color="blue.default" /> Voltar para Área Pública
            </Link>
          </HStack>
        )}

        {isLogged && !isWideVersion && (
          <HStack>
            <Link href="/area-restrita/servicos">
              <Icon as={FaUser} fontSize="20px" color="blue.default" mt="6px" />
            </Link>
            <Link
              href={`${
                process.env.NEXT_PUBLIC_HOME || 'https://www.cbpm.sp.gov.br/'
              }`}
              whiteSpace="nowrap"
            >
              <Icon as={FaHome} fontSize="20px" color="blue.default" mt="6px" />
            </Link>
          </HStack>
        )}

        {isLogged && isWideVersion && (
          <HStack gap={'100px'}>
            <HStack>
              <Link href="/area-restrita/servicos" whiteSpace="nowrap">
                <Icon as={FaUser} fontSize="17px" color="blue.default" />{' '}
                {isLogged}
              </Link>
            </HStack>
            <HStack>
              <Link
                href={`${
                  process.env.NEXT_PUBLIC_HOME || 'https://www.cbpm.sp.gov.br/'
                }`}
                whiteSpace="nowrap"
              >
                <Icon
                  as={FaHome}
                  fontSize="20px"
                  color="blue.default"
                  mt="6px"
                />{' '}
                Voltar para Área Pública
              </Link>
            </HStack>
          </HStack>
        )} */}
      </VStack>
    </HStack>
  );
};
