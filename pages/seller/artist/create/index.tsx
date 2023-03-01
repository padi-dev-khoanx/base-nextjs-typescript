import type { NextPage } from 'next';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../src/recoil/seller-sidebar.recoil';
import { SellerCreateGroupView } from '@/src/view/artist/SellerCreateGroupView';

const SellerCreateGroup: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('group');
  }, []);

  return (
    <LayoutSeller title='Create group'>
      <SellerCreateGroupView />
    </LayoutSeller>
  );
};

export default SellerCreateGroup;
