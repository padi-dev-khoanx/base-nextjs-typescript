import { RoleEnum } from '../enum/roleEnum';

export const isSeller = (role?: string): boolean => {
  return role === RoleEnum.SELLER;
};

export const isUser = (role?: string): boolean => {
  return role === RoleEnum.USER;
};
