import React, { useState } from 'react';

function EditEvent(props) {
  const [formVal, setFormVal] = useState({
    title: '',
    location: '',
    start: '',
    end: ''
  });

  const onChange = (e) => {
    setFormVal({
      ...formVal,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.editEvent(formVal);
  };
  
  return (
    <form onSubmit={onSubmit}>
      <input
	name='title'
	value={formVal.title}
	onChange={onChange}
	type='text'
	placeholder='Event Title'
      />
      <input
	name='location'
	value={formVal.location}
	onChange={onChange}
	type='text'
	placeHolder='Event Location'
      />
      <input
	name='start'
	value={formVal.start}
	onChange={onChange}
	type='date'
      />
      <input
	name='end'
	value={formVal.end}
	onChange={onChange}
	type='date'
      />
      <button>
	Submit
      </button>
    </form>
  );
}

export default EditEvent;
