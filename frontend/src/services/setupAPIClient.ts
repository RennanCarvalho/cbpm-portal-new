import axios from 'axios';
import { parseCookies } from 'nookies';

// API para quando precisar fazer requisições
// utilizando contexto/token
export const setupAPIClient = (ctx: any = undefined) => {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_HOST}`,
    headers: {
      Authorization: `Bearer ${cookies['nextauth.token']}`,
    },
  });
  return api;
};
