import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import LayoutDocument from "@/src/components/layouts/LayoutDocument";
import EventListView from "@/src/view/user/event/EventListView";
import React from "react";

const Event = () => {
  return (
    <LayoutDocument title="List Event">
      <Header />
      <EventListView />
      <Footer />
    </LayoutDocument>
  );
};

export default Event;
