import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import TicketBuyCheckView from '@/src/view/ticket/TicketBuyCheckView';
import React from 'react';

const TicketCheck = () => {
  return (
    <LayoutDocument title='Ticket Buy'>
      <TicketBuyCheckView />
    </LayoutDocument>
  );
};

export default TicketCheck;