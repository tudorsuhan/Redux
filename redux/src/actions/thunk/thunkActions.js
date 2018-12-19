// Core
import axios from 'axios';

// Instruments
import { pendingRequest, successRequest, errorRequest } from './thunkActionCreators';

// API URL
const URL = 'https://api.nexchange.io/en/api/v1/currency/';

// Async action with thunk
export const thunkFetchData = () => {
  return (dispatch, getState) => {
    dispatch(pendingRequest());
    // console.log('State: ', getState());
    return axios.get(URL)
      .then(response => {
        if (response.status === 200 && response.ok) {
          return dispatch(successRequest(response))
        }
        return response;
      })
      .catch((error) => dispatch(errorRequest(error.message)))
  }
}