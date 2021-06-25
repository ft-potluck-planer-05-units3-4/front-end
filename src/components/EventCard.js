import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardBody, CardHeader, CardText, CardSubtitle, List, ListInlineItem,
  Modal, ModalHeader, ModalBody
} from 'reactstrap';
import { connect } from 'react-redux';

import { deleteEvent, editEvent } from '../actions/eventActions';

import AddFoodForm from './AddFoodForm';

import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-planner1.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoidGVzdGVyIiwidXNlcm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MjQzNjUwNTQsImV4cCI6MTYyNDk2OTg1NH0.pdyE9DfHyUiz1N8hZQI7veq1c-hRad1hg4kcSFVKg6c'
  }
});

function EventCard(props){
  const [deleteOpen, setDeleteOpen] = useState(false);

  const { event } = props;

  const deleteToggle = () => {
    setDeleteOpen(!deleteOpen);
  };
  // const onDeleteOpen = () => {
  //   setDeleteOpen(true);
  // };

  // const onDeleteClose = () => {
  //   setDeleteOpen(false);
  // };

  const onDelete = () => {
    api.delete(`/events/${event.id}`)
      .then(res => {
        props.deleteEvent(event.id)
      })
      .catch(alert);
  };

  const onAddFood = (newFood) => {
    api.post('/food', {
      ...newFood,
      eventID: event.id
    })
      .then(res => {
        props.editEvent({
          ...event,
          food: [...event.food, res.data.food]
        });
      })
      .catch(alert);
  };

  const onDelFoodMaker = (id) => {
    const onDelFood = () => {
      api.delete(`/food/${id}`)
        .then(res => {
          const newFood = event.food.filter(item => item.id !== id);
          props.editEvent({
            ...event,
            food: newFood
          });
        })
        .catch(alert);
    };
    return onDelFood;
  };

  return (
      <Card>
        <CardHeader tag='h3'>{event.title}</CardHeader>
          <CardBody>
	    <CardSubtitle className='text-muted'>Location:</CardSubtitle>
            <CardText>{event.location}</CardText>
	    <CardSubtitle className='text-muted'>Date:</CardSubtitle>
            <CardText>{event.month} {event.day}, {event.year}</CardText>
	    <CardSubtitle className='text-muted'>Times:</CardSubtitle>
          <CardText>{event.start_time}-{event.end_time}</CardText>
          {event.guests && (
            <List type='inline'>
              <h5>Who's Invited</h5>
                {event.guests.map(guest => <ListInlineItem key={guest.id}>{guest.name}</ListInlineItem>)}
            </List>
          )}
          { event.food && (
            <div className='food-list'>
              <h5>Food Requests</h5>
              <ul>
                { event.food.map(item => {
                  return (
                    <li key={item.id}>
                      {item.name}, {item.quantity}
                      <button onClick={onDelFoodMaker(item.id)}>&times;</button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
            <AddFoodForm onAddFood={onAddFood}/>
	    <button onClick={deleteToggle}>Delete Event</button>
	    <Modal isOpen={deleteOpen} toggle={deleteToggle}>
	      <ModalHeader toggle={deleteToggle}>Are you sure?</ModalHeader>
	      <ModalBody>
		<button onClick={onDelete}>Yup</button>
		<button onClick={deleteToggle}>Cancel</button>
	      </ModalBody>
	    </Modal>
          <Link to={`/invite-to/${event.id}`}>
            <button>
              Invite More
            </button>
          </Link>
          <Link to={`/edit-event/${event.id}`}>
            <button>
              Edit
            </button>
          </Link>
        </CardBody>
      </Card>
  );
}

export default connect(null, { deleteEvent, editEvent })(EventCard);
