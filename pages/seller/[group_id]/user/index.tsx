import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { SellerListUserView } from 'src/view/seller/user/SellerListUserView';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';

const SellerUser: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('user');
  }, []);

  return (
    <LayoutSeller title='List users'>
      <SellerListUserView />
    </LayoutSeller>
  );
};

export default SellerUser;
