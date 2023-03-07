import React from "react";
import Image from "rc-image";
import Link from "next/link";
import { routerConstant } from "@/src/constant/routerConstant";

const Header = () => {
  return (
    <div className="flex py-4 shadow-header px-8 items-center">
        <div className="w-1/4 px-2">
          <Link href={routerConstant.home}>
            <span className='relative w-[32px] h-[32px]'>
              <Image
                src="/img/logo_demo.svg"
                alt="Logo page"
              />
            </span>
          </Link>
        </div>
        <div className="w-3/4 text-right">
          <button className="bg-[#1890FF] rounded-sm px-2 text-sm leading-[22px] font-normal text-white mx-2">ログイン</button>
          <button className="border border-neutral-300 rounded-sm px-2 text-sm leading-[22px] font-normal text-black mx-2">新規登録</button>
        </div>
        <div>

        </div>
      </div>
  );
};

export default Header;
