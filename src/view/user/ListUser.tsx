import { SellerHeader } from "@/src/components/seller/common/SellerHeader";
import { UserSellerItem } from "@/src/components/seller/user/UserSellerItem";
import { routerConstant } from "@/src/utils/constant/routerConstant";
import { useRouter } from "next/router";
import React from "react";

const ListUser = () => {
  const router = useRouter();
  const artistId = "1";
  const data = [];
  return (
    <div>
      <SellerHeader
        title="User"
        buttonRightBlueText="Invite"
        buttonRightBlue={() =>
          router.push(routerConstant.seller.manage_artist.user.invite(artistId))
        }
      />
      {/* <UserSellerItem /> */}
    </div>
  );
};

export default ListUser;
