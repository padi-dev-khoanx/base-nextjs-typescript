import { routerConstant } from "@/src/constant/routerConstant";
import Link from "next/link";
import React from "react";

const TicketBuyView = () => {
  return (
    <div>
        <Link href={routerConstant.event.ticket.check(1,1)}>
          <div>
            Ticket Buy View
          </div>
        </Link>
        
    </div>
  );
};

export default TicketBuyView;