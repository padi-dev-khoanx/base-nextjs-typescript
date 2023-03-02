import { FieldErrors } from "react-hook-form";

export interface PropsInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errors?: FieldErrors<any>;
  name: string;
  message?: string;
}

export interface PropsInputUrl extends PropsInput {
  url: string;
}

export interface PropsInputNumber extends PropsInput {
  unit: string;
}
