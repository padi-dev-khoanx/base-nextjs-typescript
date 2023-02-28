import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerListMemberView } from 'src/view/seller/member/SellerListMemberView';

const SellerMember: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('member');
  }, []);
  return (
    <LayoutSeller title='List members'>
      <SellerListMemberView />
    </LayoutSeller>
  );
};

export default SellerMember;
