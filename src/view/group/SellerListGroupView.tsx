import { SellerHeader } from "@/src/components/seller/common/SellerHeader";
import { GroupSellerItem } from "@/src/components/seller/group/GroupSellerItem";
import { useLoading } from "@/src/hooks/useLoading";
import { Group } from "@/src/type/group.type";
import { routerConstant } from "@/src/utils/routerConstant";
import Router from "next/router";

export const SellerListGroupView = () => {
  const data: any = {};
  const isLoading = false;
  useLoading(isLoading);
  const listGroup = data?.data.items;

  return (
    <>
      <SellerHeader
        title="グループ"
        buttonRightBlueText="追加"
        buttonRightBlue={() => Router.push(routerConstant.seller.groupCreate)}
      />
      <div>
        <div className="mr-[38px] ml-1">
          {listGroup.map((group: Group) => (
            <GroupSellerItem key={group.id} data={group} />
          ))}
        </div>
      </div>
    </>
  );
};