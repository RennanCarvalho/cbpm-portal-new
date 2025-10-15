import Router from 'next/router';
import { destroyCookie, parseCookies } from 'nookies';
import { createContext, ReactNode, useEffect } from 'react';

type AuthContextData = {
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function signOut() {
  destroyCookie(undefined, 'nextauth.token');

  Router.push('/login');
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();

    if (!token) {
      signOut();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signOut }}>{children}</AuthContext.Provider>
  );
};
