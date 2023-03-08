import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import MyTicketResellView from '@/src/view/myticket/MyTicketReSellView';
import React from 'react';

const MyTicket = () => {
  return (
    <LayoutDocument title='My Ticket Resell'>
      <MyTicketResellView />
    </LayoutDocument>
  );
};

export default MyTicket;