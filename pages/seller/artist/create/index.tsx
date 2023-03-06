import type { NextPage } from 'next';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../src/recoil/seller-sidebar.recoil';
import { CreateArtistView } from '@/src/view/artist/CreateArtistView';

const SellerCreateArtist: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('artist');
  }, []);

  return (
    <LayoutSeller title='Create Artist'>
      <CreateArtistView />
    </LayoutSeller>
  );
};

export default SellerCreateArtist;
