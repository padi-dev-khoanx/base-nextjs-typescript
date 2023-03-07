import { routerConstant } from "@/src/constant/routerConstant";
import Link from "next/link";
import React from "react";

const MypageView = () => {
  return (
    <div>
        <div>
          <ul className="flex w-full justify-center border-slate-100 border-b-1 border-b ">
            <li className=" mr-[32px] ">
              <Link href={routerConstant.myticket.qr}>
                <span className="py-3 inline-block cursor-pointer
                ">HOME</span>
              </Link>
            </li>
            <li>
              <Link href={routerConstant.myticket.index}>
                <span className="py-3 inline-block cursor-pointer">マイチケット</span>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default MypageView;