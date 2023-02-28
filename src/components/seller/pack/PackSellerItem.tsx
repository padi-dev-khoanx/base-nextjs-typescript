import { Pack } from "@/src/type/pack.type";
import { PACK_STATUS } from "@/src/utils/contants";
import { routerConstant } from "@/src/utils/routerConstant";
import Image from "next/image";
import Link from "next/link";

export const PackSellerItem = ({ data, id }: { data: Pack; id: number }) => {
  const packRemain = data.amount - data.number_pack_bought;
  return (
    <div className="flex justify-between items-center text-sm px-[24px] py-[16px] border-b border-b-[#D9D9D9]">
      <div className="flex items-center">
        <div className="w-[64px] h-[64px] shrink-0">
          <Image src={data.image} alt="" width={64} height={64} />
        </div>
        <div className="pl-[16px]">
          <p className="text-sm leading-[22px] truncate w-80">{data.name}</p>
          <span className="block text-[#8C8C8C] text-[12px] leading-[20px]">
            {packRemain > 0 ? packRemain : 0} / {data.amount}個
          </span>
          <span className="block text-[#8C8C8C] text-[12px] leading-[20px]">
            {data.number_card}枚入り
          </span>
          <span className="block text-[#8C8C8C] text-[12px] leading-[20px]">
            {data.max_can_buy}個/人
          </span>
        </div>
      </div>
      <div className="flex shrink-0">
        <p className="text-sm leading-[22px] text-black/[0.85] mr-[16px] relative before:absolute before:right-0 before:h-[6px] before:w-[6px] before:bg-[#F5222D] before:top-[-3px] before:rounded-full">
          {PACK_STATUS?.[data.status]}
        </p>
        <Link
          href={`${routerConstant.seller.managerGroup.pack.show(id)}?pack_id=${
            data.id
          }`}
          className="text-sm text-[#1890FF]"
        >
          <a className="text-sm text-[#1890FF] hover:text-black/[0.85] pr-4">
            詳細
          </a>
        </Link>
        {data.status === "prepare" && (
          <Link
            href={`${routerConstant.seller.managerGroup.pack.edit(
              id
            )}?pack_id=${data.id}`}
            className="text-sm text-[#1890FF]"
          >
            <a className="text-sm text-[#1890FF] hover:text-black/[0.85]">
              変更
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};
