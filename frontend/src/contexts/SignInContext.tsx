import { useToast } from '@chakra-ui/react';
import Router from 'next/router';
import { setCookie } from 'nookies';
import { createContext, ReactNode, useState } from 'react';
import { api } from '../services/api';

type SignInContextData = {
  signIn: (Credential: SignInCredentials) => Promise<void>;
  user?: User;
};

type SignInProviderProps = {
  children: ReactNode;
};

type SignInCredentials = {
  cpf: string;
  senha: string;
};

type User = {
  id: string;
  nome: string;
  categoria: string;
};

export const SignInContext = createContext({} as SignInContextData);

export const SignInProvider = ({ children }: SignInProviderProps) => {
  const [user, setUser] = useState<User>();

  const toast = useToast();

  async function signIn({ cpf, senha }: SignInCredentials): Promise<void> {
    try {
      const response = await api.post('login', {
        cpf,
        senha,
      });

      const { token, nome, categoria, id_pessoa: id } = response.data;

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24,
        path: '/',
        secure: true,
      });

      setCookie(undefined, 'nextauth.category', categoria, {
        maxAge: 60 * 60 * 24,
        path: '/',
        secure: true,
      });

      setCookie(undefined, 'nextauth.name', nome, {
        maxAge: 60 * 60 * 24,
        path: '/',
        secure: true,
      });

      setUser({
        id,
        nome,
        categoria,
      });

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      Router.push('/area-restrita/dados-cadastrais');
    } catch (error: any) {
      toast({
        description: `${error.request.response}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  }

  return (
    <SignInContext.Provider value={{ signIn, user }}>
      {children}
    </SignInContext.Provider>
  );
};
