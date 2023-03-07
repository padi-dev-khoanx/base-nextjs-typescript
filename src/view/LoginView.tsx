import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ButtonCommon from '../components/common/ButtonCommon';
import InputSeller from '../components/seller/input/InputSeller';
import { IFormLogin } from '../type/login.type';
import { routerConstant } from '../constant/routerConstant';
import { useMutationLogin } from '../api/login.api';

const LoginView = () => {
  const router = useRouter();
  const { mutateAsync, isLoading } = useMutationLogin();
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IFormLogin>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
  });
  const handleLogin: SubmitHandler<IFormLogin> = async (value) => {
    console.log('value:::', value);
    const data = await mutateAsync(value);
    router.push(`${routerConstant.seller.artist}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col space-y-4'>
        <InputSeller
          label='username'
          name='username'
          control={control}
          rules={{
            required: { value: true, message: 'This field is required' },
          }}
          message={errors && errors.username && errors.username.message}
          placeholder='Username'
        />
        <InputSeller
          label='password'
          name='password'
          control={control}
          rules={{
            required: { value: true, message: 'This field is required' },
          }}
          message={errors && errors.password && errors.password.message}
          type='password'
          placeholder='Password'
        />
        <ButtonCommon type='submit' isLoading={isLoading}>
          Login
        </ButtonCommon>
      </form>
    </div>
  );
};

export default LoginView;
