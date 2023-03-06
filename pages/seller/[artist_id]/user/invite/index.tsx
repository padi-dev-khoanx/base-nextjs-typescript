import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';
import InviteUserView from '@/src/view/user/InviteUserView';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const InviteUser = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('user');
  }, []);

  return (
    <LayoutSeller title='Invite user'>
      <InviteUserView />
    </LayoutSeller>
  );
};

export default InviteUser;
