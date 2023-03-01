import { PropsInput } from "@/src/type/input.type";
import { ErrorMessage } from "@hookform/error-message";

export const SellerInput = ({ name, errors, ...rest }: PropsInput) => {
  return (
    <>
      <input
        {...rest}
        className="appearance-none block mb-[5px] w-full text-[#333] border border-[#D9D9D9] rounded py-[5px] px-[12px] text-sm leading-[22px] focus:outline-none focus:bg-white"
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="text-red-400">{message}</p>}
      />
    </>
  );
};
