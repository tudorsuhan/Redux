import { requestPending, requestSuccess, requestError } from './actionCreators';
import axios from 'axios';

export const fetchFiles = (url) => {
  return (dispatch) => {
    dispatch(requestPending());
    return axios.get(url)
      .then(response => {
        if (response.status === 200) {
          dispatch(requestSuccess(response.data))
        } 
      })
      .catch(error => dispatch(requestError(error.message)))
  }
}