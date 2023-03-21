import Loading from '@/src/components/common/loading';
import Authentic from '@/src/components/layouts/Authentic';
import { handleResultApi } from '@/src/utils/handleResultApi';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import Script from 'next/script';

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
    }),
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
        <Script
          src='https://js.test.fincode.jp/v1/fincode.js'
          strategy='lazyOnload'
          onLoad={() => {
            const finCode: any = window.Fincode(
              'p_test_eagefdfsfew52443526f5345rf2353466345346ffsdf36345235rf4363fsdsdf45634tg53673523542',
            );
            window.finCode = finCode;
            const UI: any = finCode.ui({ layout: 'vertical' });
            window.UI = UI;
            UI.create('payments', { layout: 'vertical' });
            UI.mount('fincode', '400');
          }}
        />
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
