import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerShowSeriesView } from 'src/view/seller/series/SellerShowSeriesView';

const SellerCreateSeries: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('series');
  }, []);

  return (
    <LayoutSeller title='Show series'>
      <SellerShowSeriesView />
    </LayoutSeller>
  );
};

export default SellerCreateSeries;
