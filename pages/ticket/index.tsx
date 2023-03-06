import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import TicketBuyView from '@/src/view/ticket/TicketBuyView';
import React from 'react';

const Event = () => {
  return (
    <LayoutDocument title='Ticket Buy'>
      <TicketBuyView />
    </LayoutDocument>
  );
};

export default Event;
