import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import LoginView from '@/src/view/Login';
import React from 'react';

const Login = () => {
  return (
    <LayoutDocument title='Login'>
      <LoginView />
    </LayoutDocument>
  );
};

export default Login;
