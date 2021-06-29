import axios from 'axios';
const api = axios.create({
  baseURL: 'https://potluck-planner1.herokuapp.com/api',
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoiVGVzdGVyIiwidXNlcm5hbWUiOiJUZXN0ZXIiLCJpYXQiOjE2MjQ5OTMxMDEsImV4cCI6MTYyNTU5NzkwMX0.-c7yrBn4ZTE7VQECaOe7Ke9a0FIDJynxGQS3185VRlE'
  }
});

export const ADD_EVENT = 'ADD_EVENT';
export const SET_EVENTS = 'SET_EVENTS';
export const DELETE_EVENT = 'DELETE_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';
export const SET_INVITES = 'SET_INVITES';
export const DELETE_INVITE = 'DELETE_INVITE';
export const EDIT_INVITE = 'EDIT_INVITE';

// const loadInvites = () => {
//   return (dispatch) => {
//     api
//       .get( "/events/" ) //endpoint
//       .then( ( res ) => {
//         const guestListCalls = res.data.map( ( event ) => {
//           return api.get( `/events/${ event.id }/guests` ); //guests for event.id
//         } );
//         //once api calls resolve
//         Promise.all( guestListCalls ).then( ( vals ) => {
//           const eventIDs = new Set(
//             vals //val is an element of vals which is an array of results of the guestListCalls (array of guest lists...)
//               .map( ( val ) => {
//                 //map results of calls to invites
//                 const invite = val.data.find(
//                   ( user ) => user.id === 2 // Change this to come from state
//                 );
//                 return invite && invite.eventsID; //if both truthy put into set eventId's (eventId's are for the given user)
//               } )
//               .filter( ( val ) => val ) //filter removes falsey values from array eventId's
//           );
//           const invitedTo = res.data.filter( ( event ) => eventIDs.has( event.id ) );
//           invitedTo.forEach( ( event ) => {
//             event.food = api.get( `/events/${ event.id }/food` );
//             event.food
//               .then( ( res ) => {
//                 event.food = res.data;
//               } )
//               .catch( alert );
//           } );
//           Promise.all( invitedTo.map( ( event ) => event.food ) )
//             .then( ( vals ) => {
//               dispatch({
//                 type: SET_INVITES,
//                 payload: invitedTo
//               });
//             })
//             .catch(alert);
//         });
//       })
//       .catch( alert );
//   }
// }

// thunk usage example

// export const signUp = (user) => {
//     return (dispatch) => {
//         console.log(user)
//    api.post( '/auth/register', user )
//      .then( res => {
//        dispatch( { type: SIGNUP_SUCESS, payload: res.data.username } )
//        console.log( res.data );
//    })
//         return {type:SIGNUP_LOADING};
//     }
// }

const eventLoader = async () => {
  const eventsRes = await api.get('/events');
  const events = eventsRes.data.map(event => {
    return {
      ...event,
      food: api.get(`/events/${event.id}/food`),
      guests: api.get(`/events/${event.id}/guests`)
    };
  });
  events.forEach(event => {
    event.food
      .then(res => {
        event.food = res.data;
      })
      .catch(alert);
    event.guests
      .then(res => {
        event.guests = res.data;
      })
      .catch(alert);
  });
  const allApiCalls = events
        .map(event => event.food)
        .concat(events
                .map(event => event.guests));
  return new Promise((resX, rejX) => {
    Promise.all(allApiCalls)
      .then(resY => {
        resX(events);
      })
      .catch(alert);
  });
};

const inviteLoader = async () => {
  const allEventsRes = await api.get('/events');

  const guestLists = await Promise.all(allEventsRes.data.map(event => {
    return api.get(`/events/${event.id}/guests`);
  }));

  const eventIds = new Set(
    guestLists.map(res => {
      const invite = res.data.find(user => user.id === 2);
      return invite && invite.eventsID;
    })
      .filter(val => val)
  );

  const invitedTo = allEventsRes.data.filter(event => eventIds.has(event.id));
  invitedTo.forEach(event => {
    event.food = api.get(`/events/${event.id}/food`);
    event.food
      .then(res => {
        event.food = res.data;
      })
      .catch(alert);
  });
  const allFoodCalls = invitedTo.map(event => event.food);

  return new Promise((resX, rejX) => {
    Promise.all(allFoodCalls)
      .then(resY => {
        resX(invitedTo);
      })
      .catch(alert);
  })
}


const load = () => {
  return (dispatch) => {
    Promise.all([eventLoader(), inviteLoader()])
      .then(vals => {
        dispatch({
          type: SET_EVENTS,
          payload: vals[0]
        });
        dispatch({
          type: SET_INVITES,
          payload: vals[1]
        });
      })
      .catch(alert);
  }
}

const setEvents = (events) => {
  return {
    type: SET_EVENTS,
    payload: events
  };
};

const setInvites = (invites) => {
  return {
    type: SET_INVITES,
    payload: invites
  }
};

const editInvite = (invite) => {
  return {
    type: EDIT_INVITE,
    payload: invite
  };
};

const deleteInvite = (id) => {
  return {
    type: DELETE_INVITE,
    payload: id
  };
};

const addEvent = (event) => {
  return {
    type: ADD_EVENT,
    payload: event
  };
};

const deleteEvent = (id) => {
  return {
    type: DELETE_EVENT,
    payload: id
  };
};

const editEvent = (event) => {
    return {
      type: EDIT_EVENT,
      payload: event
    };
};

export { load, eventLoader, deleteInvite, editInvite, setInvites, setEvents, addEvent, deleteEvent, editEvent };
