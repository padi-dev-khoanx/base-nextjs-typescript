import { useLoading } from "src/hooks/useLoading";
import { GetGroupId } from "src/utils/getGroupId";
import { Pagination } from "antd";
import { useState } from "react";
import Router from "next/router";
import { routerConstant } from "@/src/utils/routerConstant";
import { Member } from "@/src/type/group.type";
import { SellerHeader } from "@/src/components/seller/common/SellerHeader";
import { MemberSellerItem } from "@/src/components/seller/member/MemberSellerItem";

export const SellerListMemberView = () => {
  const [page, setPage] = useState(1);
  const limit = 2;
  const groupId = GetGroupId();
  const listMember: any[] = [];
  const data: any = {};
  const totalPage = Math.floor(data?.data.count / limit);
  const isLoading = false

  const handleChangePage = (pageCurrent: number) => {
    setPage(pageCurrent);
  };

  return (
    <>
      <div className="flex font-['Roboto']">
        <div className="w-full">
          <SellerHeader
            title="メンバー"
            buttonRightBlue={() =>
              Router.push(
                routerConstant.seller.managerGroup.member.create(groupId)
              )
            }
            buttonRightBlueText="追加"
          />
          <div>
            <div>
              {!isLoading &&
                listMember &&
                listMember?.map((member: Member) => (
                  <MemberSellerItem
                    key={member.id}
                    id={groupId}
                    data={member}
                  />
                ))}
            </div>
            {totalPage >= 1 ? (
              <Pagination
                size="small"
                total={data?.data.count}
                showSizeChanger={false}
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
