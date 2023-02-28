import { SellerCreateMemberView } from '@/src/view/member/SellerCreateMemberView';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { currentMenuItemState } from '../../../../../src/recoil/sellerSidebarRecoilState';

const SellerCreateMember: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('member');
  }, []);

  return (
    <LayoutSeller title='Create member'>
      <SellerCreateMemberView />
    </LayoutSeller>
  );
};

export default SellerCreateMember;
