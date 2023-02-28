import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerCreatePackView } from '@/src/view/pack/SellerCreatePackView';

const SellerCreatePack: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('pack');
  }, []);

  return (
    <LayoutSeller title='Create packs'>
      <SellerCreatePackView />
    </LayoutSeller>
  );
};

export default SellerCreatePack;
