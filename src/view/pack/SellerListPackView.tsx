import { PackSellerItem } from "src/components/seller/pack/PackSellerItem";
import { useLoading } from "src/hooks/useLoading";
import { GetGroupId } from "src/utils/getGroupId";
import { Pagination } from "antd";
import { useState } from "react";
import Router from "next/router";
import { SellerHeader } from "@/src/components/seller/common/SellerHeader";
import { routerConstant } from "@/src/utils/routerConstant";
import { Pack } from "@/src/type/pack.type";

export const SellerListPackView = () => {
  const [page, setPage] = useState(1);
  const limit = 2;
  const groupId = GetGroupId();
  const data: any = {};
  const isLoading = false;
  const listPack = data?.data.items;
  const totalPage = Math.floor(data?.data.count / limit);

  const handleChangePage = (pageCurrent: number) => {
    setPage(pageCurrent);
  };
  return (
    <>
      <div className="flex font-['Roboto']">
        <div className="w-full">
          <SellerHeader
            title="パック"
            buttonRightBlue={() =>
              Router.push(
                routerConstant.seller.managerGroup.pack.create(groupId)
              )
            }
            buttonRightBlueText="追加"
          />
          <div>
            <div>
              {!isLoading &&
                listPack &&
                listPack?.map((pack: Pack) => (
                  <PackSellerItem key={pack.id} id={groupId} data={pack} />
                ))}
            </div>
            {totalPage >= 1 ? (
              <Pagination
                size="small"
                total={data?.data.count}
                className="text-center mt-4"
                current={page}
                pageSize={limit}
                onChange={(page) => handleChangePage(page)}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
