import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import styled from 'styled-components';
import { addEvent } from '../actions/eventActions';

import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-planner1.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoidGVzdGVyIiwidXNlcm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MjQzNjUwNTQsImV4cCI6MTYyNDk2OTg1NH0.pdyE9DfHyUiz1N8hZQI7veq1c-hRad1hg4kcSFVKg6c'
  }
});

const StyledForm = styled(Form)`
& input {
  margin: 0;
}
`

function AddEvent(props){
  const { push } = useHistory();
  const [formVal, setFormVal] = useState({
    title: '',
    day: 1,
    month: 'January',
    year: 2021,
    start_time: 1,
    end_time: 2,
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
    const typeCorrected = {
      ...formVal,
      year: Number(formVal.year),
      day: Number(formVal.day),
      start_time: Number(formVal.start_time),
      end_time: Number(formVal.end_time)
    };
    api.post('/events', typeCorrected)
       .then(res => {
  props.addEvent(res.data.event);
  push('/organizer');
      })
      .catch(alert)
  };
  
  return (
    <StyledForm onSubmit={onSubmit}>
      <FormGroup>
      <Label for='event-title-input'>
        Title
      </Label>
        <Input
          name='title'
          value={formVal.title}
          type='text'
          onChange={onChange}
          placeholder='Event Title'
          id='event-title-input'
        />
      </FormGroup>
      <FormGroup>
        <Label for='event-year-input'>
          Year
        </Label>
        <Input
          name='year'
          value={formVal.year}
          type='number'
          onChange={onChange}
          id='event-year-input'
        />
      </FormGroup>
      <FormGroup>
        <Label for='event-month-input'>
          Month
        </Label>
        <Input
          name='month'
          value={formVal.month}
          type='select'
          onChange={onChange}
          id='event-month-input'
        >
          <option value='January'>January</option>
          <option value='February'>February</option>
          <option value='March'>March</option>
          <option value='April'>April</option>
          <option value='May'>May</option>
          <option value='June'>June</option>
          <option value='July'>July</option>
          <option value='August'>August</option>
          <option value='September'>September</option>
          <option value='October'>October</option>
          <option value='November'>November</option>
          <option value='December'>December</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='event-day-input'>
          Day
        </Label>
        <Input
          name='day'
          value={formVal.day}
          type='number'
          onChange={onChange}
          id='event-day-input'
        />
      </FormGroup>
      <FormGroup>
        <Label for='event-start-input'>
          Start Time
          </Label>
        <Input
          name='start_time'
          value={formVal.start_time}
          type='number'
          onChange={onChange}
          id='event-start-input'
        />
      </FormGroup>
      <FormGroup>
        <Label for='event-end-input'>
          End Time
        </Label>
        <Input
          name='end_time'
          value={formVal.end_time}
          type='number'
          onChange={onChange}
          id='event-end-input'
        />
      </FormGroup>
      <FormGroup>
        <Label for='event-location-input'>
          Location
        </Label>
        <Input
          name='location'
          value={formVal.location}
          type='text'
          onChange={onChange}
          placeholder='Event Location'
        />
      </FormGroup>
      <button>Submit</button>
    </StyledForm>
  );
}

export default connect(null, { addEvent })(AddEvent);
