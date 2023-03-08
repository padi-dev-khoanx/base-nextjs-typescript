import { routerConstant } from "@/src/constant/routerConstant";
import Link from "next/link";
import React from "react";

const  MyTicketResellView = () => {
  return (
    <div>
        <Link href={routerConstant.myticket.resell.sucess(1)}>
          <div>
            My Ticket Resell
          </div>
        </Link>
        
    </div>
  );
};

export default MyTicketResellView;