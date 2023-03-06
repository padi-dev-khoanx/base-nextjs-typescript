import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import TicketBuyCheckView from '@/src/view/ticket/TicketBuyCheckView';
import React from 'react';

const Event = () => {
  return (
    <LayoutDocument title='Ticket Buy'>
      <TicketBuyCheckView />
    </LayoutDocument>
  );
};

export default Event;