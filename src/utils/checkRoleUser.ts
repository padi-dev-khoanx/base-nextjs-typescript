import { RoleEnum } from "../enum/roleEnum";

export const isSeller = (role?: RoleEnum): boolean => {
  return role === RoleEnum.SELLER;
};
