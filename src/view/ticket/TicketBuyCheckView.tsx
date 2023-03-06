import { routerConstant } from "@/src/constant/routerConstant";
import Link from "next/link";
import React from "react";

const TicketBuyCheckView = () => {
  return (
    <div>
      <Link href={routerConstant.event.ticket.success(1,1)} >
        <div>
          Ticket Buy Check View
        </div>
      </Link>
    </div>
  );
};

export default TicketBuyCheckView;