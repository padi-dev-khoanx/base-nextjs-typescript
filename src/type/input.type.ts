import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface PropsInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register: UseFormRegister<any>;
  name: string;
  option: RegisterOptions;
  errors?: FieldErrors<any>;
  unit?: string
  url?: string
}
