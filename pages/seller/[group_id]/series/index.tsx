import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerListSeriesView } from 'src/view/seller/series/SellerListSeriesView';

const SellerSeries: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('series');
  }, []);

  return (
    <LayoutSeller title='List series'>
      <SellerListSeriesView />
    </LayoutSeller>
  );
};

export default SellerSeries;
