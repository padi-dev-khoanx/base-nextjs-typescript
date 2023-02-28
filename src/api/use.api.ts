import { useQuery } from "@tanstack/react-query";
import { addCookie } from "../utils/addCookie";

export const useQueryMyInfoCache = (enabled: boolean) => {
  return useQuery(["get-info-user-cache"], () => "", {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: enabled,
    onSuccess: (result: any) => {
      addCookie(result?.data);
    },
  });
};
