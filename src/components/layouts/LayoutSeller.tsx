import React, { ReactNode } from "react";
import Head from "next/head";
import SellerSidebar from "../common/SellerSidebar";

type Props = {
  children: ReactNode;
  title?: string;
};

export const LayoutSeller = ({
  children,
  title = "This is the default title",
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex w-full min-h-screen bg-[#FFFFFF] layout-seller flex-wrap">
        <SellerSidebar />
        <div className="w-full ml-[290px]">{children}</div>
      </div>
    </>
  );
};
