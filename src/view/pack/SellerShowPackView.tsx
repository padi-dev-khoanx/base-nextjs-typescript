import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { SceneInPackItem } from "src/components/seller/scene/SceneInPackItem";
import { Key } from "react";
import { GetGroupId } from "@/src/utils/getGroupId";
import { SellerHeader } from "@/src/components/seller/common/SellerHeader";
import { PACK_STATUS } from "@/src/utils/contants";
import { routerConstant } from "@/src/utils/routerConstant";

export const SellerShowPackView = () => {
  const router = useRouter();
  const groupId = GetGroupId();
  const [currency, setCurrency] = useState("jpy");
  const packData: any = {};
  const data: any = {};
  const sceneInPack = data?.data.scenes_in_pack;

  const listSeriesName = packData?.packSeries?.map((packSeries: any) => {
    return packSeries.series.name;
  });

  const handleStartSale = () => {};

  return (
    <>
      <div className="flex font-['Roboto']">
        <div className="w-full">
          <SellerHeader
            title={packData?.name}
            status={PACK_STATUS?.[packData?.status]}
            enableBackIcon={true}
            customBack={() => Router.back()}
            buttonRightWhite={
              packData?.status === "prepare"
                ? () =>
                    Router.push({
                      pathname:
                        routerConstant.seller.managerGroup.pack.edit(groupId),
                      query: {
                        pack_id: packData?.id,
                      },
                    })
                : false
            }
            buttonRightWhiteText="変更"
            buttonRightBlue={
              packData?.status === "prepare" ? () => handleStartSale() : false
            }
            buttonRightBlueText="販売開始"
          />
          <div>
            <div className="pl-[26px] py-[16px]">
              <div className="flex">
                <div className="w-[320px] h-[320px] shrink-0">
                  <div>
                    {packData?.image && (
                      <Image
                        className="w-full"
                        src={packData?.image}
                        alt="thumb full"
                        width={320}
                        height={320}
                        objectFit="cover"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <div className="bg-white rounded-tl-[30px] rounded-tr-[30px] pl-[40px] pr-[31px]">
                    <div className="p-[16px]">
                      <div className="text-[30px] leading-[40px] font-bold text-[#333] truncate w-96">
                        {packData?.name}
                      </div>
                      <p className="text-sm leading-[21px] font-medium text-black/[0.85] pb-[8px]">
                        {listSeriesName?.join(", ")}
                      </p>
                      <p className="text-sm leading-[21px] font-medium text-black/[0.85] pb-[8px]">
                        残り{" "}
                        {(
                          packData?.amount - packData?.number_pack_bought
                        ).toLocaleString()}{" "}
                        /{packData?.amount?.toLocaleString()}パック
                      </p>
                      <p className="text-sm leading-[21px] font-medium text-black/[0.85] pb-[8px]">
                        {packData?.number_card}枚入り {packData?.max_can_buy}
                        パック/人まで
                      </p>
                      <div className="text-sm leading-[21px] break-all whitespace-pre-wrap">
                        {packData?.description}
                      </div>
                      <div className="pt-[15px]">
                        <ul className="flex justify-center">
                          <li>
                            <span
                              className={`block py-[5px] px-[16px] border ${
                                currency === "jpy"
                                  ? "border-[#1890FF] text-[#1890FF]"
                                  : "border-[#D9D9D9] text-black/[0.85]"
                              } cursor-pointer`}
                              onClick={() => setCurrency("jpy")}
                            >
                              JPY
                            </span>
                          </li>
                          <li>
                            <span
                              className={`block py-[5px] px-[16px] border ${
                                currency === "eth"
                                  ? "border-[#1890FF] text-[#1890FF]"
                                  : "border-[#D9D9D9] text-black/[0.85]"
                              } cursor-pointer`}
                              onClick={() => setCurrency("eth")}
                            >
                              ETH
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-[10px]">
                        <button className="rounded-sm w-full text-sm leading-[22px] px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
                          {currency === "jpy" && "￥"}
                          {packData?.price?.[currency].toLocaleString(
                            undefined,
                            {
                              maximumSignificantDigits: 20,
                            }
                          )}
                          {currency === "eth" && "ETH"}で購入
                        </button>
                      </div>
                    </div>
                    <div className="pt-[42px]">
                      <div className="text-2xl leading-[32px] font-medium text-black/[0.85] pb-[8px]">
                        含まれるカード
                      </div>
                      <div>
                        <div className="pt-[10px]">
                          <ul className="flex flex-wrap mx-[-5px]">
                            {sceneInPack?.map(
                              (scene: any, key: Key | null | undefined) => {
                                return (
                                  <SceneInPackItem data={scene} key={key} />
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pt-[17px] text-center">
                      <a
                        className="text-sm leading-[22px] text-black/[0.45] font-normal"
                        href=""
                      >
                        全てのカードを見る
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
