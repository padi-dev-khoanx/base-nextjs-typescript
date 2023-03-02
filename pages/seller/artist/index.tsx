import type { NextPage } from 'next';
import { LayoutSeller } from '../../../src/components/layouts/LayoutSeller';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../src/recoil/seller-sidebar.recoil';
import { useEffect } from 'react';
import { ListArtist } from '@/src/view/artist/ListArtist';

const Artist: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('group');
  }, []);

  return (
    <LayoutSeller title='Artist'>
      <ListArtist />
    </LayoutSeller>
  );
};

export default Artist;
