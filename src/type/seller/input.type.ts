import { InputProps } from "antd";
import { TextAreaProps } from "antd/es/input";
import { TextAreaRef } from "antd/es/input/TextArea";
import { Control, FieldValues, RegisterOptions } from "react-hook-form";

export interface IFormPropsCustomInput extends InputProps {
  name: string;
  message?: string;
  control?: Control<any, any>;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
      >
    | undefined;
  handleOnChange?: () => void;
  label: string;
  isRequired?: boolean;
}

export interface IFormCustomTextArea
  extends TextAreaProps,
    Pick<IFormPropsCustomInput, "message" | "control" | "rules" | "label"> {
  name: string;
  isRequired?: boolean;
}

export interface IFormCustomInputURL extends IFormPropsCustomInput {
  domain: string;
  isRequired?: boolean;
}
