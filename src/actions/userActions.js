import  axios  from 'axios';
import { axiosWauth } from './../utils/axiosWauth';

export const  SIGNUP_SUCESS= 'SIGNUP_SUCESS';
export const  SIGNUP_ERROR= 'SIGNUP_ERROR';
export const  SIGNUP_LOADING= 'SIGNUP_LOADING';
const api = axios.create( {
  baseURL: "https://potluck-planner1.herokuapp.com/api",
 
} );
export const signUp = ( dispatch, user ) => {
  dispatch({type:SIGNUP_LOADING})
   api.post( '/auth/register/', user )
     .then( res => {
       dispatch( { type: SIGNUP_SUCESS, payload: res.data.userName } )
       console.log( res.data );
   })
  
  
}
