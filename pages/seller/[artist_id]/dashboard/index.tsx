import type { NextPage } from 'next';
import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';
import { useEffect } from 'react';
import { SellerDashboardView } from '@/src/components/seller/dashboard/SellerDashboardView';

const DashboardArtist: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('dashboard');
  }, []);

  return (
    <LayoutSeller title='dashboard'>
      <SellerDashboardView />
    </LayoutSeller>
  );
};

export default DashboardArtist;
