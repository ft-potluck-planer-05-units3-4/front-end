import React, { useState } from 'react';

export function AddEvent(){
  const [formVal, setFormVal] = useState({
    title: '',
    start: '',
    end: '',
    location: ''
  });
  
  return (
    <form>
      <input name='title'/>
      <input name='start'/>
      <input name='end'/>
      <input name='location'/>
      <button>Submit</button>
    </form>
  )

export default AddEvent;
