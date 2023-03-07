import { REGEX_URL } from '@/src/constant/constant';
import { messageValdiate } from '@/src/constant/messageValidate';
import { IFormCustomInputURL } from '@/src/type/seller/input.type';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import LabelRequired from '../../common/LabelRequired';

const InputUrlSeller = ({
  name,
  control,
  message,
  rules,
  handleOnChange,
  domain = '',
  label,
  isRequired = false,
  ...rest
}: IFormCustomInputURL) => {
  return (
    <div className='flex flex-col'>
      <LabelRequired isRequired={isRequired} name={name} label={label} />
      <Controller
        name={name}
        control={control}
        rules={{
          ...rules,
          pattern: {
            value: REGEX_URL,
            message: messageValdiate.url,
          },
        }}
        render={({ field: { value, onChange } }) => (
          <div
            className={`flex border rounded w-full ${
              message ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <div className='border-r w-1/2'>
              <Input className='w-full' bordered={false} readOnly value={domain} />
            </div>
            <div className='w-1/2'>
              <Input
                {...rest}
                value={value}
                onChange={handleOnChange ? handleOnChange : onChange}
                bordered={false}
                placeholder='URL'
                id={name}
              />
            </div>
          </div>
        )}
      />
      {message ? <span className='text-xs text-red-400 mt-1'>{message}</span> : null}
    </div>
  );
};

export default InputUrlSeller;
