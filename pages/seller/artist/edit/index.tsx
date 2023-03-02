import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../src/recoil/seller-sidebar.recoil';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { UpdateArtist } from '@/src/view/artist/UpdateArtist';

const SellerUpdateArtist: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('group');
  }, []);

  return (
    <LayoutSeller title='Update artist'>
      <UpdateArtist />
    </LayoutSeller>
  );
};

export default SellerUpdateArtist;
