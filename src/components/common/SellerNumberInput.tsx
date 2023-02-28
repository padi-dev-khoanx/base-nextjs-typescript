import { ErrorMessage } from '@hookform/error-message';

export const SellerNumberInput = ({
  type,
  placeholder,
  register,
  name,
  option,
  errors,
  unit,
  min,
  step,
}: {
  type: string;
  placeholder: string;
  register: any;
  name: string;
  option: any;
  errors: any;
  unit: string;
  min: number;
  step: string;
}) => {
  return (
    <>
      <div className='flex'>
        <input
          type={type}
          min={min}
          step={step}
          className='rounded-sm rounded-r-[0px] bg-white border text-gray-900 block flex-1 w-full text-sm border-[#D9D9D9] py-[4px] px-[12px]'
          placeholder={placeholder}
          {...register(name, option)}
        />
        <span className='inline-flex items-center py-[4px] px-[12px] text-sm leading-[22px] bg-[#FAFAFA] rounded-r-[2px] border border-[#D9D9D9] border-l-[0]'>
          {unit}
        </span>
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className='text-red-400'>{message}</p>}
      />
    </>
  );
};
