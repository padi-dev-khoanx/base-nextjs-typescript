import { IFormPropsCustomInput } from "@/src/type/seller/input.type";
import { Input } from "antd";
import { Controller } from "react-hook-form";
import LabelRequired from "./LabelRequired";

const InputSeller = ({
  control,
  name,
  rules,
  message,
  label,
  isRequired = false,
  ...rest
}: IFormPropsCustomInput) => {
  return (
    <div>
      <LabelRequired isRequired={isRequired} name={name} label={label} />
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <Input {...rest} value={value} onChange={onChange} id={name} />
        )}
      />
      {message ? (
        <span className="text-xs text-red-400 mt-1">{message}</span>
      ) : null}
    </div>
  );
};
export default InputSeller;
