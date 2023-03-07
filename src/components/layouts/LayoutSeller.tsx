import Head from 'next/head';
import { ReactNode } from 'react';
import SellerSidebar from '../seller/common/SellerSidebar';

type Props = {
  children: ReactNode;
  title?: string;
};

export const LayoutSeller = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='flex w-full min-h-screen bg-[#FFFFFF] layout-seller flex-wrap'>
        <SellerSidebar />
        <div className='w-full ml-[280px]'>{children}</div>
      </div>
    </>
  );
};
