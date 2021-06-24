export const ADD_EVENT = "ADD_EVENT";
export const LOAD_DATA = "LOAD_DATA";
export const SET_EVENTS = "SET_EVENTS";
export const DELETE_EVENT = "DELETE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const ADD_EVENT_FAILURE = "ADD_EVENT_FAILURE";
const setEvents = (events) => {
  return {
    type: SET_EVENTS,
    payload: events,
  };
};

const addEvent = (event) => {
  return {
    type: ADD_EVENT,
    payload: event,
  };
};

const deleteEvent = (id) => {
  return {
    type: DELETE_EVENT,
    payload: id,
  };
};

const editEvent = (event) => {
  return {
    type: EDIT_EVENT,
    payload: event,
  };
};

const failEvent = (event) => {
  return {
    type: ADD_EVENT_FAILURE,
    payload: event,
  };
};

export { setEvents, addEvent, deleteEvent, editEvent, failEvent };

/*

export const getEventId = ( eventId ) => ( dispatch ) => {
  console.log( 'test' );
  dispatch( {
    type: GET_EVENT_BY_ID_LOADING
  } );
  axiosWithAuth()
    .get( `api/events/${eventId}` )
    ///api/events/:event_id
    .then( ( res ) => {
      // debugger
      // console.log("Single-event:",res);
      dispatch( {
        type: GET_EVENT_BY_ID_SUCCESS,
        payload: res.data
      } );
    } )
    .catch( ( err ) => {
      dispatch( {
        type: GET_EVENT_BY_ID_FAILURE,
        payload: err,
      } );
    } );
};

export const addEvent = ( newEvent ) => ( dispatch ) => {
  dispatch( {
    type: ADD_EVENT_LOADING
  } );
  console.log( newEvent );
  axiosWithAuth()
    .post( 'api/events', newEvent )
    .then( ( res ) => dispatch( {
      type: ADD_EVENT_SUCCESS,
      payload: res.data
    } ) )
    .catch( ( err ) => {
      dispatch( {
        type: ADD_EVENT_FAILURE,
        payload: err,
      } );
    } );
};
export const deleteEvent = ( event_id ) => ( dispatch ) => {
  dispatch( {
    type: DELETE_EVENT_LOADING
  } );
  axiosWithAuth()
    .delete( `api/events/${event_id}` )
    ///api/events/:event_id
    .then( ( res ) => dispatch( {
      type: DELETE_EVENT_SUCCESS,
      payload: res.data
    } ) )
    .catch( ( err ) => {
      dispatch( {
        type: DELETE_EVENT_FAILURE,
        payload: err,
      } );
    } );
};
export const editEvent = ( event_id, editedEvent ) => ( dispatch ) => {
  //console.log(event_id);
  dispatch( {
    type: EDIT_EVENT_LOADING
  } );
  axiosWithAuth()
    .put( `api/events/${event_id}`, editedEvent )
    .then( ( res ) => dispatch( {
      type: EDIT_EVENT_SUCCESS,
      payload: res.data
    } ) )
    .catch( ( err ) => {
      dispatch( {
        type: EDIT_EVENT_FAILURE,
        payload: err,
      } );
    } );
};



*/
