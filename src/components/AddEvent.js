import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { addEvent } from '../actions/eventActions';

function AddEvent(props){
  const { push } = useHistory();
  const [formVal, setFormVal] = useState({
    title: '',
    start: '',
    end: '',
    location: ''
  });

  const onChange = (e) => {
    setFormVal({
      ...formVal,
      [e.target.name]: e.target.value,
    })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.addEvent(formVal);
    push('/organizer');
  };
  
  return (
    <form onSubmit={onSubmit}>
      <input
	name='title'
	value={formVal.title}
	type='text'
	onChange={onChange}
	placeholder='Event Title'
      />
      <input
	name='start'
	value={formVal.start}
	type='date'
	onChange={onChange}
      />
      <input
	name='end'
	value={formVal.end}
	type='date'
	onChange={onChange}
      />
      <input
	name='location'
	value={formVal.location}
	type='text'
	onChange={onChange}
	placeholder='Event Location'
      />
      <button>Submit</button>
    </form>
  );
}

export default connect(null, { addEvent })(AddEvent);
