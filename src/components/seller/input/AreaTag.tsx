import { IFormCustomTagArea } from '@/src/type/seller/input.type';
import { Input } from 'antd';
import { KeyboardEvent, useState } from 'react';
import { Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import LabelRequired from '../../common/LabelRequired';

const { TextArea } = Input;
const AreaTag = ({
  name,
  control,
  rules,
  message,
  label = '',
  isRequired = false,
  listTagState,
  setListTagState,
  getValues,
  setValue,
  ...rest
}: IFormCustomTagArea) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const value = getValues(name) as string;
    const index = listTagState.findIndex((item) => item.name === value);
    if (e.key === ',' && value === ',') {
      e.preventDefault();
      return;
    }
    if (e.key === ',' && value) {
      if (index !== -1) {
        e.preventDefault();
        toast.error('Đã tồn tại giá trị này');
        return;
      }
      e.preventDefault();
      setListTagState((oldState) => [...oldState, { name: value }]);
      setValue(name, '');
    }
  };
  const handleRemoveItem = (name: string) => {
    setListTagState(listTagState.filter((item) => item.name !== name));
  };

  return (
    <div>
      <LabelRequired isRequired={isRequired} name={name} label={label} />
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <div className='border border-gray-300 rounded-md p-1'>
            {listTagState.length ? (
              <ul className='flex flex-wrap'>
                {listTagState.map((item) => (
                  <li
                    key={item.name}
                    className='flex items-center text-sm px-2 py-1 border bg-blue-400 rounded text-white'
                  >
                    <span>{item.name}</span>
                    <span
                      onClick={() => handleRemoveItem(item.name)}
                      className='text-sm block w-4 h-4 text-center leading-[15px] ml-2 text-[#0052cc] rounded-[50%] bg-white cursor-pointer'
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
            <TextArea
              {...rest}
              value={value}
              onChange={onChange}
              onKeyDown={handleKeyDown}
              id={name}
              bordered={false}
            />
          </div>
        )}
      />
      {message ? <span className='text-xs text-red-400 mt-1'>{message}</span> : null}
    </div>
  );
};

export default AreaTag;
