import Footer from '@/src/components/common/Footer';
import Header from '@/src/components/common/Header';
import LayoutDocument from '@/src/components/layouts/LayoutDocument';
import EventDetailView from '@/src/view/event/EventDetailView';
import React from 'react';

const EventDetail = () => {
  return (
    <LayoutDocument title='Event Detail'>
      <Header />
      <EventDetailView />
      <Footer />
    </LayoutDocument>
  );
};

export default EventDetail;
