import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import MypageView from '@/src/view/myticket/MypageView';
import React from 'react';

const MyPage = () => {
  return (
    <LayoutDocument title='My Page QR'>
      <MypageView />
    </LayoutDocument>
  );
};

export default MyPage;
