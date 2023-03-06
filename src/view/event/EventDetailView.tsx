import React from "react";
import Link from "next/link";
import { routerConstant } from "@/src/constant/routerConstant";

const EventDetailView = () => {
  return (
    <div>
      <Link href={routerConstant.event.ticket.detail(1,1)}>
        <div>
          Event Detail
        </div>
      </Link>
       
    </div>
  );
};

export default EventDetailView;