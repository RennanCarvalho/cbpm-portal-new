import axios, { AxiosError } from 'axios';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';

export const withSSRAuth = <P>(fn: GetServerSideProps<P>) => {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    const token = cookies['nextauth.token'];

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.statusText;

        if (err === 'Unauthorized') {
          destroyCookie(ctx, 'nextauth.token');

          return {
            redirect: {
              destination: '/login',
              permanent: false,
            },
          };
        }
      }
    }
    return fn(ctx);
  };
};
