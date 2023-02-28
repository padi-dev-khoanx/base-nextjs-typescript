import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerUpdatePackView } from '@/src/view/pack/SellerUpdatePackView';

const SellerEditPack: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('pack');
  }, []);

  return (
    <LayoutSeller title='Update packs'>
      <SellerUpdatePackView />
    </LayoutSeller>
  );
};

export default SellerEditPack;
