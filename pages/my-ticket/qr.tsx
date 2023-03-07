import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import MyPageView from '@/src/view/myticket/MyPageView';
import React from 'react';

const MyPageQr = () => {
  return (
    <LayoutDocument title='My Page QR'>
      <MyPageView />
    </LayoutDocument>
  );
};

export default MyPageQr;
