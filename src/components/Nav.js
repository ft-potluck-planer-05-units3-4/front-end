import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import EventsList from "./EventsList";
import InvitedList from "./InvitedList";
import AttendingList from "./AttendingList";

function Nav() {
  return (
    <>
      <header>
        <Switch>
          <Route path="/attendee">
            <Link to="/organizer">Organizer Menu</Link>
          </Route>
          <Route path="/organizer">
            <Link to="/attendee">Attendee Menu</Link>
            <Link to="/add-event">Add Potluck</Link>
          </Route>
        </Switch>
      </header>
      <main>
        <Switch>
          <Route path="/attendee">
            <InvitedList />
            <AttendingList />
          </Route>
          <Route path="/organizer">
            <EventsList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default Nav;
