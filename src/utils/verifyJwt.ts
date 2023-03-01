import jwt_decode, { JwtPayload } from "jwt-decode";
import { removeCookie } from "./removeCookie";

export const verifyJwt = (jwt?: string): boolean => {
  if (jwt) {
    try {
      const decoded: JwtPayload = jwt_decode(jwt);
      if (decoded.exp && decoded.exp > Date.now() / 1000) {
        return true;
      }
    } catch (err) {
      removeCookie();
      return false;
    }
  }
  removeCookie();
  return false;
};
