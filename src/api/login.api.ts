import { useMutation } from '@tanstack/react-query';
import { IFormLogin } from '../type/login.type';
import apiClient from './apiClient';

export const useMutationLogin = () => {
  return useMutation((data: IFormLogin) => {
    return apiClient.post('', data);
  });
};
