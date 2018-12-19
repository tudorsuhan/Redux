// Core
import axios from 'axios';

// Instruments
import { pendingRequest, successRequest, errorRequest } from './thunkActionCreators';

// Async action with thunk
export const thunkFetchCurrency = (url) => {
  return (dispatch) => {
    dispatch(pendingRequest());
    return axios.get(url)
      .then(response => dispatch(successRequest(response.data)))
      .catch((error) => dispatch(errorRequest(error.message)))
  }
}
