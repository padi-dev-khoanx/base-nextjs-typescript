import { RoleEnum } from "../enum/roleEnum";

export const isSeller = (role?: string): boolean => {
  return role === RoleEnum.SELLER || role === RoleEnum.SELLER_GROUP;
};
