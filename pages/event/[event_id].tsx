import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import EventDetailView from '@/src/view/event/EventDetailView';
import React from 'react';

const EventDetail = () => {
  return (
    <LayoutDocument title='Event Detail'>
      <EventDetailView />
    </LayoutDocument>
  );
};

export default EventDetail;
