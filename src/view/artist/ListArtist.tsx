import { SellerHeader } from "@/src/components/seller/common/SellerHeader";
import { GroupSellerItem } from "@/src/components/seller/group/GroupSellerItem";
import { useLoading } from "@/src/hooks/useLoading";
import { Group } from "@/src/type/artist.type";
import { routerConstant } from "@/src/constant/routerConstant";
import Router from "next/router";

export const ListArtist = () => {
  const data: any = {};
  const isLoading = false;
  useLoading(isLoading);
  const listGroup = data?.data?.items;

  return (
    <>
      <SellerHeader
        title="Artist"
        buttonRightBlueText="Thêm mới"
        buttonRightBlue={() => Router.push(routerConstant.seller.artist_create)}
      />
      <div>
        <div className="mr-[38px] ml-1">
          {listGroup?.map((group: Group) => (
            <GroupSellerItem key={group.id} data={group} />
          ))}
        </div>
      </div>
    </>
  );
};
