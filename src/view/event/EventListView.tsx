import React from "react";
import Link from "next/link";
import { routerConstant } from "@/src/constant/routerConstant";

const EventListView = () => {
  return (
    <div>
      <Link href={routerConstant.event.detail(1)}>
        <div>
          Event
        </div>
      </Link>
        
    </div>
  );
};

export default EventListView;
