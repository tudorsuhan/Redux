import * as types from './actionTypes';
import axios from 'axios';

export const REQUEST_STATUS = bool => ({
  type: types.REQUEST_STATUS,
  loading: bool,
});

export const REQUEST_SUCCESS = apps => ({
  type: types.REQUEST_SUCCESS,
  apps,
});

export const REQUEST_ERROR = error => ({
  type: types.REQUEST_ERROR,
  error
});

export const fetchApps = () => {
  return (dispatch, getState) => {
    console.log('current state: ', getState());
    dispatch(REQUEST_STATUS(true));
    axios.get('http://iphone.softwsp.com/wp-json/wp/v2/posts')
      .then(response => dispatch(REQUEST_SUCCESS(response.data)))
      .catch((error) => dispatch(REQUEST_ERROR(error)))
  }
}

// export const fetchApps = () => {
//   return (dispatch) => {
//     dispatch(REQUEST_STATUS(true));
//     fetch('http://iphone.softwsp.com/wp-json/wp/v2/posts')
//       .then((response) => {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         dispatch(REQUEST_STATUS(false));
//         return response;
//       })
//       .then((response) => response.json())
//       .then((apps) => dispatch(REQUEST_SUCCESS(apps)))
//       .catch(() => dispatch(REQUEST_ERROR(true)));
//   };
// }