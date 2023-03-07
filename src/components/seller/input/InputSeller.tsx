import { IFormPropsCustomInput } from '@/src/type/seller/input.type';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import LabelRequired from '../../common/LabelRequired';

const InputSeller = ({
  control,
  name,
  rules,
  message,
  label,
  isRequired = false,
  ...rest
}: IFormPropsCustomInput) => {
  return (
    <div className='flex flex-col'>
      <LabelRequired isRequired={isRequired} name={name} label={label} />
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <div className={`border rounded-md ${message ? 'border-red-400' : 'border-gray-300'}`}>
            <Input
              className='rounded-sm w-full'
              {...rest}
              value={value}
              onChange={onChange}
              bordered={false}
              id={name}
            />
          </div>
        )}
      />
      {message ? <span className='text-xs text-red-400 mt-1'>{message}</span> : null}
    </div>
  );
};
export default InputSeller;
