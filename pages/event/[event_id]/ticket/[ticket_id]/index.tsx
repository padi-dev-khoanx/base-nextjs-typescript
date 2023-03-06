import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import TicketBuyView from '@/src/view/ticket/TicketBuyView';
import React from 'react';

const TicketDetail = () => {
  return (
    <LayoutDocument title='Ticket Buy'>
      <TicketBuyView />
    </LayoutDocument>
  );
};

export default TicketDetail;