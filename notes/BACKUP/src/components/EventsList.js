import React, { useState } from "react";

import EventCard from "./EventCard";

function EventsList() {
  const [events, setEvents] = useState([]);
  return (
    <>
      {events.map((event) => (
        <EventCard key={event.id} />
      ))}
    </>
  );
}

export default EventsList;
