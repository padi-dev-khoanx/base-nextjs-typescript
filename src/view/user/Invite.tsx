import Button from '@/src/components/common/Button';
import { SellerHeaderUpdateCreate } from '@/src/components/seller/common/SellerHeaderUpdateCreate';
import InputSeller from '@/src/components/seller/input/InputSeller';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Invite } from '@/src/type/artist.type';
import { useRouter } from 'next/router';
import { routerConstant } from '@/src/constant/routerConstant';

const Invite = () => {
  const router = useRouter();
  const handleInvite: SubmitHandler<Invite> = (value) => {
    router.push(routerConstant.seller.manage_artist.user.index('1'));
  };
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<Invite>({
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  return (
    <div>
      <SellerHeaderUpdateCreate title='ユーザーを招待' />
      <form onSubmit={handleSubmit(handleInvite)} className='pt-4 pl-4'>
        <InputSeller
          name='email'
          control={control}
          label='メールアドレス'
          isRequired={true}
          type='text'
          placeholder='example'
          rules={{ required: { value: true, message: 'email is required' } }}
          message={errors && errors.email && errors.email.message}
        />
        <div className='mt-[34px]'>
          <Button type='submit' text='招待メールを送信' />
        </div>
      </form>
    </div>
  );
};

export default Invite;
