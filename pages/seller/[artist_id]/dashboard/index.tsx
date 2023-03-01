import type { NextPage } from 'next';
import { LayoutSeller } from '../../../../src/components/layouts/LayoutSeller';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { SellerDashboardView } from '@/src/components/seller/dashboard/SellerDashboardView';

const DashboardGroup: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('dashboard');
  }, []);

  return (
    <LayoutSeller title='List groups'>
      <SellerDashboardView />
    </LayoutSeller>
  );
};

export default DashboardGroup;
