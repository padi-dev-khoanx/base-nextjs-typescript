import { TextAreaProps } from "@/src/type/textarea.type";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect, useState } from "react";

export const SellerTextArea = ({
  register,
  name,
  option,
  errors,
  maxLength = 800,
  textLength = 0,
  ...rest
}: TextAreaProps) => {
  const [countText, setCountText] = useState(0);

  const handleInput = (text: any) => {
    setCountText(text.target.value.length);
  };

  useEffect(() => {
    if (textLength) {
      setCountText(textLength);
    }
  }, [textLength]);

  return (
    <>
      <div>
        <textarea
          {...rest}
          rows={3}
          className="block p-2.5 w-full text-sm
                      text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:outline-none focus:bg-white"
          maxLength={maxLength}
          onInput={handleInput}
          {...register(name, option)}
        ></textarea>
      </div>
      <div className="text-black/[0.45] text-sm leading-[22px] pt-[9px] text-right">
        <span>
          {countText} / {maxLength}
        </span>
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="text-red-400">{message}</p>}
      />
    </>
  );
};