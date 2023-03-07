import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import MyTicketView from '@/src/view/myticket/MyTicketView';
import React from 'react';

const MyTicket = () => {
  return (
    <LayoutDocument title='My Ticket'>
      <MyTicketView />
    </LayoutDocument>
  );
};

export default MyTicket;