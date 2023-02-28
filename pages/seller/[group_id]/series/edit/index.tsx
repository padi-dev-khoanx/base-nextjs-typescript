import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerUpdateSeriesView } from 'src/view/seller/series/SellerUpdateSeriesView';

const SellerEditSeries: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('series');
  }, []);

  return (
    <LayoutSeller title='Update series'>
      <SellerUpdateSeriesView />
    </LayoutSeller>
  );
};

export default SellerEditSeries;
