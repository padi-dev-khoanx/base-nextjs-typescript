import { JWT } from './../constant/constant';
import Cookies from "universal-cookie";

export const removeCookie = () => {
  const cookies = new Cookies();
  cookies.remove(JWT, { path: "/" });
};
