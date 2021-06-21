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
      <input name='title'/>
      <input name='title'/>
      <input name='title'/>
      <button>
	Submit
      </button>
    </form>
}

export default EditEvent;
