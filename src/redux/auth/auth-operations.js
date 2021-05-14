import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
} from './auth-actions';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const register = credentials => async dispatch => { 
  dispatch(registerRequest());

   try {
     const response = await axios.post('/users/signup', credentials);
     dispatch(registerSuccess(response.data));
   } catch (error) {
     dispatch(registerError(error.message));
   }
}
