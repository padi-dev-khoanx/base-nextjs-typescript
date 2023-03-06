import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../src/recoil/seller-sidebar.recoil';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { UpdateArtistView } from '@/src/view/artist/UpdateArtistView';

const SellerUpdateArtist: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('artist');
  }, []);

  return (
    <LayoutSeller title='Update artist'>
      <UpdateArtistView />
    </LayoutSeller>
  );
};

export default SellerUpdateArtist;
