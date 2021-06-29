import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardHeader, CardBody, CardSubtitle, CardText } from 'reactstrap';

import InviteFoodCard from './InviteFoodCard';

import { deleteInvite } from '../actions/eventActions';

import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-planner1.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoiVGVzdGVyIiwidXNlcm5hbWUiOiJUZXN0ZXIiLCJpYXQiOjE2MjQ5OTMxMDEsImV4cCI6MTYyNTU5NzkwMX0.-c7yrBn4ZTE7VQECaOe7Ke9a0FIDJynxGQS3185VRlE'
  }
});

const currentUserID = 2;

function InviteCard({invite}) {
  const dispatch = useDispatch();
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
          <>
            <h5>Food Requests: </h5>
            <ul>
              {invite.food.map(item => <InviteFoodCard key={item.id} item={item} invite={invite}/>)}
            </ul>
          </>
        )}
        {/* <button>RSVP</button> */}
        <button onClick={onDecline}>Decline Invitation</button>
      </CardBody>
    </Card>
  );
}

export default InviteCard;
