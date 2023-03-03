import { SellerHeader } from "@/src/components/seller/common/SellerHeader";
import { routerConstant } from "@/src/constant/routerConstant";
import { useRouter } from "next/router";
import React from "react";

const ListUser = () => {
  const router = useRouter();
  return (
    <div>
      <SellerHeader
        title="User"
        buttonRightBlueText="Invite"
        buttonRightBlue={() => router.push(routerConstant.seller.user.invite)}
      />
    </div>
  );
};

export default ListUser;
