import { PropsInput } from "@/src/type/input.type";
import { ErrorMessage } from "@hookform/error-message";

export const SellerUrlInput = ({ name, errors, url, ...rest }: PropsInput) => {
  return (
    <>
      <div className="flex">
        <span className="inline-flex items-center py-[4px] px-[12px] text-sm leading-[22px] bg-[#FAFAFA] rounded-l-[2px] border border-[#D9D9D9] border-r-[0]">
          {url}
        </span>
        <input
          {...rest}
          className="rounded-sm rounded-l-[0px] bg-white border text-gray-900 block flex-1 w-full text-sm border-[#D9D9D9] py-[4px] px-[12px] focus:outline-none focus:bg-white"
        />
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="text-red-400">{message}</p>}
      />
    </>
  );
};
