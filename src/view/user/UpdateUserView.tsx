import { SellerHeaderUpdateCreate } from '@/src/components/seller/common/SellerHeaderUpdateCreate';
import InputSeller from '@/src/components/seller/input/InputSeller';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/src/components/common/Button';
import LabelRequired from '@/src/components/common/LabelRequired';
import { useRouter } from 'next/router';
import { routerConstant } from '@/src/constant/routerConstant';
import { UpdateUser } from '@/src/type/artist.type';

const UpdateUserView = () => {
  const router = useRouter();
  const handleUpdateUser: SubmitHandler<UpdateUser> = (value) => {
    router.push(routerConstant.seller.manage_artist.user.index('1'));
  };
  const {
    formState: { errors },
    control,
    handleSubmit,
    register,
  } = useForm<UpdateUser>({
    defaultValues: {
      email: '',
      authority: '',
    },
    mode: 'onChange',
  });

  return (
    <div>
      <SellerHeaderUpdateCreate
        title='ユーザーを招待'
        showButtonRight={true}
        conditionButtonRight={true}
      />
      <form onSubmit={handleSubmit(handleUpdateUser)} className='pt-4 pl-4'>
        <InputSeller
          name='email'
          control={control}
          placeholder='example'
          label='メールアドレス'
          isRequired={true}
          rules={{
            required: { value: true, message: 'email is required' },
            validate: (value) => {
              return (
                [
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                ].every((pattern) => pattern.test(value)) || 'must is email'
              );
            },
          }}
          message={errors && errors.email && errors.email.message}
        />
        <div className='mt-[34px]'>
          <LabelRequired isRequired={true} name='authority' label='権限' />
          <div className='flex mt-2 gap-[16px]'>
            <div className='flex items-center'>
              <input
                className='w-[18px] h-[18px] cursor-pointer'
                type='radio'
                id='owner'
                value='owner'
                {...register('authority', { required: true })}
              />
              <label
                htmlFor='owner'
                className='font-normal text-sm leading-[22px] ml-[8px] cursor-pointer'
              >
                オーナー
              </label>
            </div>
            <div className='flex items-center'>
              <input
                className='w-[18px] h-[18px] cursor-pointer'
                type='radio'
                id='member'
                value='member'
                {...register('authority', { required: true })}
              />
              <label
                htmlFor='member'
                className='font-normal text-sm leading-[22px] ml-[8px] cursor-pointer'
              >
                メンバー
              </label>
            </div>
          </div>
          <span className='text-xs text-red-400 mt-1'>
            {errors.authority?.type === 'required' && 'required'}
          </span>

          <div className='mt-[34px] mb-[10px]'>
            <p>オーナー：すべての権限が付与されます。</p>
            <p>メンバー：ダッシュボードへのアクセスはできません。</p>
          </div>
        </div>
        <Button text='保存' />
      </form>
    </div>
  );
};

export default UpdateUserView;
