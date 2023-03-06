import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import TicketBuySuccessView from '@/src/view/ticket/TicketBuySuccessView';
import React from 'react';

const TicketSuccess = () => {
  return (
    <LayoutDocument title='Ticket Buy'>
      < TicketBuySuccessView />
    </LayoutDocument>
  );
};

export default TicketSuccess;