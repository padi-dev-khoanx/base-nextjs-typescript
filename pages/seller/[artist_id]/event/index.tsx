import React, { useEffect } from 'react';
import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { ListEventView } from '@/src/view/event/ListEventView';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';

const Event = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('event');
  }, []);

  return (
    <LayoutSeller title='List Event'>
      <ListEventView />
    </LayoutSeller>
  );
};

export default Event;
