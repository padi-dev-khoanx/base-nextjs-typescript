import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import EventListView from '@/src/view/event/EventListView';
import React from 'react';

const Event = () => {
  return (
    <LayoutDocument title='List Event'>
      <EventListView />
    </LayoutDocument>
  );
};

export default Event;
