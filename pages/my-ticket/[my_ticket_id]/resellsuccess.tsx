import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import MyTicketResellSuccessView from '@/src/view/myticket/MyTicketResellSuccsessView';
import React from 'react';

const MyTicket = () => {
  return (
    <LayoutDocument title='My Ticket Resell Success'>
      <MyTicketResellSuccessView />
    </LayoutDocument>
  );
};

export default MyTicket;