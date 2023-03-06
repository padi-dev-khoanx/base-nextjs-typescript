import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';
import InviteView from '@/src/view/user/InviteView';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const InviteUser = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('user');
  }, []);

  return (
    <LayoutSeller title='Invite user'>
      <InviteView />
    </LayoutSeller>
  );
};

export default InviteUser;
