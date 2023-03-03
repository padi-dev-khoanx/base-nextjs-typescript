import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const ListTicket = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('event');
  }, []);

  return <LayoutSeller title='List ticket'>List Ticket</LayoutSeller>;
};

export default ListTicket;
