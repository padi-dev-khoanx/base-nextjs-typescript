import { FieldErrors } from "react-hook-form";

export interface PropsInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errors?: FieldErrors<any>;
  unit?: string;
  url?: string;
  name: string
}
