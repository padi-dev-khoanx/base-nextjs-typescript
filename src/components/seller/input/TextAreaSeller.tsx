import { IFormCustomTextArea } from "@/src/type/seller/input.type";
import { Input } from "antd";
import React, { TextareaHTMLAttributes } from "react";
import { Controller } from "react-hook-form";
import LabelRequired from "../../common/LabelRequired";

const { TextArea } = Input;
Input.TextArea;
const TextAreaSeller = ({
  name,
  control,
  rules,
  message,
  label,
  isRequired = false,
  ...rest
}: IFormCustomTextArea) => {
  return (
    <div className="flex flex-col">
      <LabelRequired isRequired={isRequired} name={name} label={label} />
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <TextArea {...rest} value={value} onChange={onChange} id={name} />
        )}
      />
      {message ? (
        <span className="text-xs text-red-400 mt-1">{message}</span>
      ) : null}
    </div>
  );
};

export default TextAreaSeller;
