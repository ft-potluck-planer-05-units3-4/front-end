import  axios  from 'axios';
import { axiosWauth } from './../utils/axiosWauth';

export const  SIGNUP_SUCESS= 'SIGNUP_SUCESS';
export const  SIGNUP_ERROR= 'SIGNUP_ERROR';
export const  SIGNUP_LOADING= 'SIGNUP_LOADING';
const api = axios.create( {
  baseURL: "https://potluck-planner1.herokuapp.com",
 
} );
export const signUp = (user) => {
    return (dispatch) => {
        console.log(user)
   api.post( '/auth/register', user )
     .then( res => {
       dispatch( { type: SIGNUP_SUCESS, payload: res.data.username } )
       console.log( res.data );
   })
        return {type:SIGNUP_LOADING};
    }

  
}
