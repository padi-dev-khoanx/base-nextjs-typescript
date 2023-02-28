import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerUpdateMemberView } from 'src/view/seller/member/SellerUpdateMemberView';

const SellerEditMember: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('member');
  }, []);

  return (
    <LayoutSeller title='Update member'>
      <SellerUpdateMemberView />
    </LayoutSeller>
  );
};

export default SellerEditMember;
