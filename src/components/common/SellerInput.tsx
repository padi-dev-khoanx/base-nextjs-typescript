import { ErrorMessage } from "@hookform/error-message";

export const SellerInput = ({
  type,
  placeholder,
  register,
  name,
  option,
  errors,
}: {
  type: string;
  placeholder: string;
  register: any;
  name: string;
  option: any;
  errors: any;
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="appearance-none block mb-[5px] w-full text-[#333] border border-[#D9D9D9] rounded py-[5px] px-[12px] text-sm leading-[22px]
                  focus:outline-none focus:bg-white"
        {...register(name, option)}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="text-red-400">{message}</p>}
      />
    </>
  );
};
