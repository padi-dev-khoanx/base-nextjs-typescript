import { Member } from "@/src/type/group.type";
import { routerConstant } from "@/src/utils/routerConstant";
import Image from "next/image";
import Link from "next/link";

export const MemberSellerItem = ({
  data,
  id,
}: {
  data: Member;
  id: number;
}) => {
  return (
    <div className="flex justify-between items-center px-[24px] py-[16px] border-b border-b-[#D9D9D9]">
      <div className="flex items-center">
        <div className="pr-[16px] grow-0 shrink-0">
          <Image
            src={data.profile_image}
            alt=""
            width={32}
            height={32}
            objectFit="cover"
          />
        </div>
        <div className="w-80">
          <div className="text-base block truncate">{data.name}</div>
          <div className="text-[12px] leading-[20px] block truncate">
            {data.url}
          </div>
        </div>
      </div>
      <Link
        href={`${routerConstant.seller.managerGroup.member.edit(
          id
        )}?member_id=${data.id}`}
        className="text-sm text-[#1890FF]"
      >
        <a
          href=""
          className="text-sm text-[#1890FF] hover:text-black/[0.85] grow-0 shrink-0"
        >
          変更
        </a>
      </Link>
    </div>
  );
};
