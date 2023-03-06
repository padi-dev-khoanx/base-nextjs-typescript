import { SellerHeaderUpdateCreate } from '@/src/components/seller/common/SellerHeaderUpdateCreate';
import InputSeller from '@/src/components/seller/input/InputSeller';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/src/components/common/Button';
import LabelRequired from '@/src/components/common/LabelRequired';
import { useRouter } from 'next/router';
import { routerConstant } from '@/src/constant/routerConstant';
import { UpdateUser } from '@/src/type/artist.type';

const UpdateUser = () => {
  const router = useRouter();
  const handleChange: SubmitHandler<UpdateUser> = (value) => {
    router.push(routerConstant.seller.manage_artist.user.index('1'));
  };
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<UpdateUser>({
    defaultValues: {
      email: '',
      authority: '',
    },
    mode: 'onChange',
  });

  return (
    <div>
      <SellerHeaderUpdateCreate title='ユーザーを招待' />
      <form onSubmit={handleSubmit(handleChange)} className='pt-4 pl-4'>
        <InputSeller
          name='email'
          control={control}
          placeholder='example'
          label='メールアドレス'
          isRequired={true}
          rules={{ required: { value: true, message: 'email is required' } }}
          message={errors && errors.email && errors.email.message}
        />
        <div className='mt-[34px]'>
          <LabelRequired isRequired={true} name='authority' label='権限' />
          <div className='flex mt-2 gap-[16px]'>
            <div className='flex items-center'>
              <input
                className='w-[18px] h-[18px] cursor-pointer'
                type='radio'
                id='1'
                name='pay'
                value='1'
              />
              <label
                htmlFor='1'
                className='font-normal text-sm leading-[22px] ml-[8px] cursor-pointer'
              >
                オーナー
              </label>
            </div>
            <div className='flex items-center'>
              <input
                className='w-[18px] h-[18px] cursor-pointer'
                type='radio'
                id='2'
                name='pay'
                value='1'
              />
              <label
                htmlFor='2'
                className='font-normal text-sm leading-[22px] ml-[8px] cursor-pointer'
              >
                メンバー
              </label>
            </div>
          </div>
          <div className='mt-[34px] mb-[10px]'>
            <p>オーナー：すべての権限が付与されます。</p>
            <p>メンバー：ダッシュボードへのアクセスはできません。</p>
          </div>
        </div>
        <Button type='submit' text='保存' />
      </form>
    </div>
  );
};

export default UpdateUser;
