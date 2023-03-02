import { sidebarItem } from "@/src/utils/constant/constant";
import { routerConstant } from "@/src/utils/constant/routerConstant";
import { SettingOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const SellerSidebar = () => {
  const [isActiveState, setIsActiveState] = useState(
    routerConstant.seller.artist
  );
  const router = useRouter();
  useEffect(() => {
    setIsActiveState(router.pathname);
  }, [router]);
  return (
    <div className="bg-grad-primary w-[280px] fixed left-0 h-full">
      <div className="pt-10 px-4">
        <div className="px-[26px] pb-10">
          <Link href={routerConstant.seller.index}>
            <div className="icon brand-image img-circle elevation-3 view-pc">
              <Image
                src="/img/logo-menu.svg"
                alt="index"
                width={176}
                height={64}
                className="px-[12px]"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col py-2 px-6 text-base">
          <span className="font-semibold">username@example.com</span>
          <span className="text-sm leading-[22px] opacity-50">Role</span>
        </div>
        <div className="flex items-center py-[9px] px-6 side-active">
          <SettingOutlined className="mr-[10px]" />
          <span>Artist</span>
        </div>
        <div className="h-[0.5px] w-full bg-gray-300 mt-2" />
        <div className="mt-2">
          <Collapse ghost expandIconPosition="end" defaultActiveKey={["1"]}>
            <Collapse.Panel
              header={<span className="text-sm leading-[22px]">Artist A</span>}
              key="1"
              className="custom-collapse"
            >
              {sidebarItem.map((item) => (
                <div
                  key={item.id}
                  className={
                    isActiveState === item.path("1")
                      ? "side-active"
                      : "hover:bg-blue-100"
                  }
                  onClick={() => {
                    router.push(item.path("1"));
                    setIsActiveState(item.path("1"));
                  }}
                >
                  <div className="flex items-center space-x-[10px] py-[9px] pl-6 cursor-pointer">
                    <item.icon />
                    <span>{item.name}</span>
                  </div>
                </div>
              ))}
            </Collapse.Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default SellerSidebar;
