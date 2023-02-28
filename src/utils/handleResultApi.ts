import { removeCookie } from './removeCookie';
import Router from 'next/router';
import { routerConstant } from './routerConstant';
import { toast } from 'react-toastify';

const handleRedirect = (code: number) => {
  switch (code) {
    case 401:
      removeCookie();
      return Router.push(routerConstant.login).then();
    case 403:
    case 404:
      return Router.push(routerConstant.page404).then();
    case 500:
      return Router.push(routerConstant.page500).then();
    default:
      return;
  }
};

export const handleResultApi = (response: any) => {
  if (!response) {
    return;
  }
  handleRedirect(response.code);
  if (!response.status) {
    return response.message !== '' ? toast.error(response.message) : toast.error('Server Error');
  }
  if (response.message !== '') {
    return response.status ? toast.success(response.message) : toast.error(response.message);
  }
};
