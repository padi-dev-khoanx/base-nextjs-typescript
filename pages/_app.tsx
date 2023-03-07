import Loading from "@/src/components/common/loading";
import Authentic from "@/src/components/layouts/Authentic";
import { handleResultApi } from "@/src/utils/handleResultApi";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import { useState } from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
          onError: (result: any) => {
            handleResultApi(result.response?.data);
          },
        },
        mutations: {
          onSuccess: (result) => {
            handleResultApi(result);
          },
          onError: (result: any) => {
            handleResultApi(result.response?.data);
          },
        },
      },
    })
  );
  const optionToast: ToastOptions = {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Loading />
        <ToastContainer {...optionToast} />
        <Authentic />
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
