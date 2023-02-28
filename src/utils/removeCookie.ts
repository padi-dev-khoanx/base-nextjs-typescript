import Cookies from 'universal-cookie';

export const removeCookie = () => {
  const cookies = new Cookies();

  cookies.remove('jwt', { path: '/' });
  cookies.remove('role', { path: '/' });
  cookies.remove('role_user_in_group', { path: '/' });
  cookies.remove('url_group', { path: '/' });
  cookies.remove('user_id', { path: '/' });
  cookies.remove('email', { path: '/' });
  cookies.remove('user_name', { path: '/' });
  cookies.remove('is_chose_wallet', { path: '/' });
};
