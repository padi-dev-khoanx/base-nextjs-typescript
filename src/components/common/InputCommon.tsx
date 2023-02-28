import { PropsInput } from "@/src/type/input.type";
import React from "react";

const InputCommon = ({ ...rest }: PropsInput) => {
  const className =
    "border px-4 py-2 rounded-md outline-none border-gray-400 focus:border-green-400 text-sm"; //add class name input here
  return <input {...rest} className={className} />;
};

export default InputCommon;
