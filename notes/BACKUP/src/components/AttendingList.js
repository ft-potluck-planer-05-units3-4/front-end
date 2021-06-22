import React from "react";

import AttendingCard from "./AttendingCard";

function AttendingList() {
  <>
    {events.map((event) => (
      <AttendingCard key={event.id} event={event} />
    ))}
  </>;
}

export default AttendingList;
