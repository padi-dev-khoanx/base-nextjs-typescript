import { IFormPropsHeader } from "@/src/type/seller/header.type";
import { ArrowLeftOutlined, MoreOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import Router from "next/router";

export const SellerHeaderUpdateCreate = ({
  enableBackIcon = true,
  title = "",
  showButtonRight = false,
  conditionButtonRight,
  actionButtonRight,
  customBack,
}: Partial<IFormPropsHeader>) => {
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="text-sm leading-[22px]" onClick={actionButtonRight}>
          {conditionButtonRight ? "無効化" : "アクティブ"}
        </div>
      ),
      key: "0",
    },
  ];

  return (
    <div className="flex justify-between border-b border-b-[#D9D9D9] py-[22px] pl-6 pr-[38px]">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          return customBack ?? Router.back();
        }}
      >
        {enableBackIcon && <ArrowLeftOutlined className="pr-[17px]" />}
        <span className="text-xl leading-[28px] font-medium truncate w-96">
          {title}
        </span>
      </div>
      <div>
        {showButtonRight && (
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-gray-50">
                <MoreOutlined />
              </button>
            </a>
          </Dropdown>
        )}
      </div>
    </div>
  );
};
