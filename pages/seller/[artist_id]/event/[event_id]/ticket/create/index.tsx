import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const SelletCreateTicket = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('event');
  }, []);

  return <LayoutSeller title='Create ticket'>List ticket</LayoutSeller>;
};

export default SelletCreateTicket;
