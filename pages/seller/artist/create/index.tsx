import type { NextPage } from 'next';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../src/recoil/seller-sidebar.recoil';
import { CreateArtist } from '@/src/view/artist/CreateArtist';

const SellerCreateArtist: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('group');
  }, []);

  return (
    <LayoutSeller title='Create Artist'>
      <CreateArtist />
    </LayoutSeller>
  );
};

export default SellerCreateArtist;
