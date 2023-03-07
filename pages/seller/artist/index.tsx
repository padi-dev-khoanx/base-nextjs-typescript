import { ListArtistView } from '@/src/view/artist/ListArtistView';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { LayoutSeller } from '../../../src/components/layouts/LayoutSeller';
import { currentMenuItemState } from '../../../src/recoil/seller-sidebar.recoil';

const Artist: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('artist');
  }, []);

  return (
    <LayoutSeller title='Artist'>
      <ListArtistView />
    </LayoutSeller>
  );
};

export default Artist;
