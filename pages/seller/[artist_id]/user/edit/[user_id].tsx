import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';
import UpdateUser from '@/src/view/user/UpdateUser';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const SellerEditUser = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('user');
  }, []);

  return (
    <LayoutSeller title='update user'>
      <UpdateUser />
    </LayoutSeller>
  );
};

export default SellerEditUser;
