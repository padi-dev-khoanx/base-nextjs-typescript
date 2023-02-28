import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerListPackView } from 'src/view/seller/pack/SellerListPackView';

const SellerPack: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('pack');
  }, []);

  return (
    <LayoutSeller title='List packs'>
      <SellerListPackView />
    </LayoutSeller>
  );
};

export default SellerPack;
