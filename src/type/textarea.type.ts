import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
export interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  register: UseFormRegister<any>;
  name: string;
  option: RegisterOptions;
  errors?: FieldErrors<any>;
  textLength?: number;
}
