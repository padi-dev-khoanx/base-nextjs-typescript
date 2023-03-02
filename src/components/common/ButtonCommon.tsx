import { ButtonProps } from "@/src/type/button.type";
import { LoadingOutlined } from "@ant-design/icons";
import React from "react";

const ButtonCommon = ({
  children,
  isLoading,
  isDisable,
  ...rest
}: ButtonProps) => {
  const className = "bg-green-300 px-3 py-2 rounded-lg text-sm text-white"; // add your class name button default here
  const classNameLoading = "bg-red-400 px-3 py-2 rounded-lg cursor-no-drop"; // add your class name button loading here
  const classNameDisable =
    "bg-gray-300 px-3 py-2 rounded-lg cursor-no-drop text-sm text-white"; // add your class name button disable here
  if (isDisable && isLoading) {
    return (
      <button {...rest} disabled={isDisable} className={classNameLoading}>
        <div className="flex justify-center items-center text-sm text-white">
          <LoadingOutlined className="mr-2" />
          {children}
        </div>
      </button>
    );
  }
  if (isDisable) {
    return (
      <button {...rest} disabled={isDisable} className={classNameDisable}>
        {children}
      </button>
    );
  }
  if (isLoading) {
    return (
      <button {...rest} disabled={true} className={classNameLoading}>
        <div className="flex justify-center items-center text-sm text-white">
          <LoadingOutlined className="mr-2" />
          {children}
        </div>
      </button>
    );
  }
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};

export default ButtonCommon;
