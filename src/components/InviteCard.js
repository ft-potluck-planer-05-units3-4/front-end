import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Card, CardHeader, CardBody, CardSubtitle, CardText,
  Modal, ModalHeader, ModalBody,
  ListGroup, ListGroupItem, Collapse
} from 'reactstrap';
import InviteFoodCard from './InviteFoodCard';

import { deleteInvite } from '../actions/eventActions';

import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-api43.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoiVGVzdGVyIiwidXNlcm5hbWUiOiJUZXN0ZXIiLCJpYXQiOjE2MjQ5OTMxMDEsImV4cCI6MTYyNTU5NzkwMX0.-c7yrBn4ZTE7VQECaOe7Ke9a0FIDJynxGQS3185VRlE'
  }
});

const currentUserID = 2;

function InviteCard({invite}) {
  const [declineOpen, setDeclineOpen] = useState(false);
  const [foodOpen, setFoodOpen] = useState(false);
  const dispatch = useDispatch();

  const declineToggle = () => {
    setDeclineOpen(!declineOpen);
  };

  const foodToggle = () => {
    setFoodOpen(!foodOpen);
  }

  const onDecline = (e) => {
    api.delete(`/events/${invite.id}/guests/${currentUserID}`)
      .then(res => {
        dispatch(deleteInvite(invite.id));
      })
      .catch(alert);
  }
  return (
    <Card>
      <CardHeader tag='h3'>{invite.title}</CardHeader>
      <CardBody>
        <CardSubtitle className='text-muted'>Location:</CardSubtitle>
        <CardText>{invite.location}</CardText>
        <CardSubtitle className='text-muted'>Date:</CardSubtitle>
        <CardText>{invite.month} {invite.day}, {invite.year}</CardText>
        <CardSubtitle className='text-muted'>Times:</CardSubtitle>
        <CardText>{invite.start_time}-{invite.end_time}</CardText>
        { !!invite.food.length && (
          <ListGroup>
            <ListGroupItem>
              Food Requests
              <button onClick={foodToggle}>{foodOpen ? (
                <>&#9650;</>
              ) : (
                <>&#9660;</>
              )}</button>
            </ListGroupItem>
            <Collapse isOpen={foodOpen}>
              {invite.food.map(item => {
                return (
                  <ListGroupItem>
                    <InviteFoodCard key={item.id} item={item} invite={invite}/>
                  </ListGroupItem>
                );
              })}
            </Collapse>
          </ListGroup>
        )}
        {/* <button>RSVP</button> */}
        <button onClick={declineToggle}>Decline Invitation</button>
        <Modal isOpen={declineOpen} toggle={declineToggle}>
          <ModalHeader toggle={declineToggle}>Are you sure?</ModalHeader>
          <ModalBody>
            <button onClick={onDecline}>Yup</button>
            <button onClick={declineToggle}>Cancel</button>
          </ModalBody>
        </Modal>
      </CardBody>
    </Card>
  );
}

export default InviteCard;
