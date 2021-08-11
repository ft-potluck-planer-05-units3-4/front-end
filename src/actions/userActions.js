import  axios  from 'axios';
// import { axiosWauth } from './../utils/axiosWauth';

export const SIGNUP_SUCESS = 'SIGNUP_SUCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_LOADING = 'SIGNUP_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_LOADING = 'LOGIN_LOADING';

const api = axios.create( {
  baseURL: "https://potluck-api43.herokuapp.com",
} );
export const signUp = (user) => {
    return (dispatch) => {
      console.log(user);
      api.post( '/auth/register', user )
        .then( res => {
          // dispatch( { type: SIGNUP_SUCESS, payload: res.data.username } ); // res.data.username doesnt exist, and I don't really know what you're trying to do here
          console.log( res.data );
   })
        return {type:SIGNUP_LOADING};
    }

  
}

export const loginUser = (user) => {
    return (dispatch) => {
        console.log(user);
    };
};
