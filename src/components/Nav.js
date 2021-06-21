import React from 'react';

import EventsList from './EventsList';

function Nav() {
  return (
    <>
      <header>
	{ /* maybe a searchbar here? */ }
	<button>
	  Add Potluck
	</button>
      </header>
      <EventsList/>
    </>
};

export default Nav;
