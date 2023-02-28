import { UserGroup } from "@/src/type/group.type";
import { USER_ROLE } from "@/src/utils/contants";
import { routerConstant } from "@/src/utils/routerConstant";
import Link from "next/link";

export const UserSellerItem = ({
  data,
  id,
}: {
  data: UserGroup;
  id: number;
}) => {
  return (
    <div className="flex justify-between items-center px-[24px] py-[31px] border-b border-b-[#D9D9D9] ml-1">
      <div className="flex-1">
        <strong className="text-base">{data.email}</strong>
      </div>
      <div className="flex-1">
        <span>
          {data.GroupUser[0].status === "active" &&
            USER_ROLE?.[data?.GroupUser[0]?.role]}
        </span>
        <span>
          {data.GroupUser[0].status === "invited" && USER_ROLE?.wait_confirm}
        </span>
      </div>
      <Link
        href={`${routerConstant.seller.managerGroup.user.edit(id)}?user_id=${
          data.id
        }`}
      >
        <a href="" className="text-sm text-[#1890FF] hover:text-black/[0.85]">
          変更
        </a>
      </Link>
    </div>
  );
};
