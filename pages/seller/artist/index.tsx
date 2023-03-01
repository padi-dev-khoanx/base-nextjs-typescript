import type { NextPage } from 'next';
import { LayoutSeller } from '../../../src/components/layouts/LayoutSeller';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../src/recoil/seller-sidebar.recoil';
import { useEffect } from 'react';
import { SellerListGroupView } from '@/src/view/artist/SellerListGroupView';

const SellerGroup: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('group');
  }, []);

  return (
    <LayoutSeller title='List group'>
      <SellerListGroupView />
    </LayoutSeller>
  );
};

export default SellerGroup;
