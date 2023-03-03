import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';
import { ListEventTicket } from '@/src/view/event/ticket/ListEventTicket';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const ListTicket = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('event');
  }, []);

  return (
    <LayoutSeller title='List ticket'>
      <ListEventTicket />
    </LayoutSeller>
  );
};

export default ListTicket;
