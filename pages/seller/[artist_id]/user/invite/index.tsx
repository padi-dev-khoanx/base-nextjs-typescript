import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';
import Invite from '@/src/view/user/Invite';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const InviteUser = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('user');
  }, []);

  return (
    <LayoutSeller title='Invite user'>
      <Invite />
    </LayoutSeller>
  );
};

export default InviteUser;
