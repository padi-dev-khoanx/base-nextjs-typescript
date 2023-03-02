import { PropsInput } from "@/src/type/input.type";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";

// const InputCommon = ({ errors, name, ...rest }: Partial<PropsInput>) => {
//   const className =
//     "border px-4 py-2 rounded-md outline-none border-gray-400 focus:border-green-400 text-sm"; //add class name input here
//   return (
//     <>
//       <input {...rest} className={className} />
//       {name && errors && (
//         <ErrorMessage
//           errors={errors}
//           name={name}
//           render={({ message }) => <p className="text-red-400">{message}</p>}
//         />
//       )}
//     </>
//   );
// };

const InputCommon = React.forwardRef(
  ({ name, message, ...rest }: Partial<PropsInput>, ref: any) => {
    const className = `border px-4 py-2 rounded-md outline-none text-sm ${
      message
        ? "border-red-400 focus:border-red-400"
        : "border-gray-400 focus:border-green-400"
    }`; //add class name input here
    return (
      <div className="flex flex-col">
        <input {...rest} name={name} ref={ref} className={className} />
        {message ? (
          <span className="text-xs text-red-400 mt-1">{message}</span>
        ) : null}
      </div>
    );
  }
);

export default InputCommon;
