import React, { useState } from 'react';

function EditEvent() {
  const [formVal, setFormVal] = useState({
    title: '',
    location: '',
    start: '',
    end: ''
  });

  return (
    <form>
      <input name='title'/>
      <input name='location'/>
      <input name='start'/>
      <input name='end'/>
      <button>
	Submit
      </button>
    </form>
}

export default EditEvent;
