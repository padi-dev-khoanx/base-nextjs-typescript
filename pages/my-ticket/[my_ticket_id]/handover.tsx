import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import MyTicketHandOverView from '@/src/view/myticket/MyTicketHandOverView';

import React from 'react';

const MyTicket = () => {
  return (
    <LayoutDocument title='My Ticket Hand Over'>
      <MyTicketHandOverView />
    </LayoutDocument>
  );
};

export default MyTicket;