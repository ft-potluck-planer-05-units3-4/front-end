import React, { useEffect } from "react";
import { connect } from "react-redux";
import InviteCard from "./InviteCard";
import { setInvites } from "../actions/eventActions";

import axios from "axios";
const api = axios.create( {
  baseURL: "https://potluck-planner1.herokuapp.com/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoidGVzdGVyIiwidXNlcm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MjQzNjUwNTQsImV4cCI6MTYyNDk2OTg1NH0.pdyE9DfHyUiz1N8hZQI7veq1c-hRad1hg4kcSFVKg6c",
  },
} );

const currentUserID = 2; // change to user's id

function UserEventList ( props ) {
  const { invites, setInvites } = props;
  useEffect( () => {
    api
      .get( "/events/" ) //endpoint
      .then( ( res ) => {
        const guestListCalls = res.data.map( ( event ) => {
          return api.get( `/events/${ event.id }/guests` ); //guests for event.id
        } );

        //once api calls resolve
        Promise.all( guestListCalls ).then( ( vals ) => {
          const eventIDs = new Set(
            vals //val is an element of vals which is an array of results of the guestListCalls (array of guest lists...)
              .map( ( val ) => {
                //map results of calls to invites
                const invite = val.data.find(
                  ( user ) => user.id === currentUserID
                );
                return invite && invite.eventsID; //if both truthy put into set eventId's (eventId's are for the given user)
              } )
              .filter( ( val ) => val ) //filter removes falsey values from array eventId's
          );

          const invitedTo = res.data.filter( ( event ) => eventIDs.has( event.id ) );
          invitedTo.forEach( ( event ) => {
            event.food = api.get( `/events/${ event.id }/food` );
            event.food
              .then( ( res ) => {
                event.food = res.data;
              } )
              .catch( alert );
          } );
          Promise.all( invitedTo.map( ( event ) => event.food ) )
            .then( ( vals ) => {
              setInvites( invitedTo );
            } )
            .catch( alert );
        } );
      } )
      .catch( alert );
  }, [ setInvites ] );
  return (
    <div className="invites">
      { " " }
      { invites.map( ( invite ) => (
        <InviteCard key={ invite.id } invite={ invite } />
      ) ) }{ " " }
    </div>
  );
}

const state2props = ( state ) => ( {
  invites: state.events.invites,
} );

export default connect( state2props, {
  setInvites,
} )( UserEventList );
