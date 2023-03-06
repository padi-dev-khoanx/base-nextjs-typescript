import type { NextPage } from 'next';
import { LayoutSeller } from '../../../src/components/layouts/LayoutSeller';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../src/recoil/seller-sidebar.recoil';
import { useEffect } from 'react';
import { ListArtistView } from '@/src/view/artist/ListArtistView';

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
