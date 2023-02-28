import Cookies from 'universal-cookie';

interface dataCookie {
  access_token?: string;
}

export const addCookie = (data: dataCookie) => {
  const cookies = new Cookies();
  if (data?.access_token) {
    cookies.set('jwt', data?.access_token, { path: '/' });
  }
};
