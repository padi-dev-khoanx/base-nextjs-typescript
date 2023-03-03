import { LayoutSeller } from "@/src/components/layouts/LayoutSeller";
import Invite from "@/src/view/user/Invite";
import React from "react";

const InviteUser = () => {
  return (
    <LayoutSeller title="Invite user">
      <Invite />
    </LayoutSeller>
  );
};

export default InviteUser;
