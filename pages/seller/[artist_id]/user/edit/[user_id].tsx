import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';
import UpdateUserView from '@/src/view/user/UpdateUserView';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const SellerEditUser = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('user');
  }, []);

  return (
    <LayoutSeller title='update user'>
      <UpdateUserView />
    </LayoutSeller>
  );
};

export default SellerEditUser;
