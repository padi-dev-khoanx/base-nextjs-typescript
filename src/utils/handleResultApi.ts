import { removeCookie } from "./removeCookie";
import Router from "next/router";
import { toast } from "react-toastify";
import { routerConstant } from "./contants";

const handleRedirect = (code: number) => {
  switch (code) {
    case 401:
      removeCookie();
      return Router.push(routerConstant.login).then();
    case 403:
    case 404:
      return Router.push(routerConstant.error404).then();
    case 500:
      return Router.push(routerConstant.error500).then();
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
    return response.message !== ""
      ? toast.error(response.message)
      : toast.error("Server Error");
  }
  if (response.message !== "") {
    return response.status
      ? toast.success(response.message)
      : toast.error(response.message);
  }
};
