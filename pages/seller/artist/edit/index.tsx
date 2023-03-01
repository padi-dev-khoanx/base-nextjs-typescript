import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../src/recoil/seller-sidebar.recoil';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerUpdateGroupView } from '@/src/view/artist/SellerUpdateGroupView';

const SellerEditGroup: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('group');
  }, []);

  return (
    <LayoutSeller title='Update group'>
      <SellerUpdateGroupView />
    </LayoutSeller>
  );
};

export default SellerEditGroup;
