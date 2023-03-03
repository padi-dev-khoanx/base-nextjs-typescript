import React, { useEffect } from 'react';
import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';

const SellerCreateEvent = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('event');
  }, []);

  return <LayoutSeller title='Create Event'>Create Event</LayoutSeller>;
};

export default SellerCreateEvent;
