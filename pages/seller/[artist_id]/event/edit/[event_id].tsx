import React, { useEffect } from 'react';
import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';

const SellerUpdateEvent = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('event');
  }, []);

  return <LayoutSeller title='UpdateEvent'>UpdateEvent</LayoutSeller>;
};

export default SellerUpdateEvent;
