// Core
import { handleActions } from 'redux-actions';

// Instruments
import { types } from '../actions/actionTypes';

const initialState = {
  data: [],
  loading: false,
  error: null,
}

export const fetchData = handleActions(
  {
    [types.FETCH_STATUS]: (state, action) => {
      return { ...state, loading: true }
    },
    [types.FETCH_SUCCESS]: (state, action) => {
      return { ...state, loading: false, data: action.payload, error: null, } 
    },
    [types.FETCH_ERROR]: (state, action) => {
      return { ...state, loading: false, data: [], error: action.payload, }
    }
  },
  { initialState }
);

// export const fetchData = (state = initialState, action) => {
//   switch (action.type) {
//     case types.FETCH_STATUS:
//       return { ...state, loading: true, } 
//     case types.FETCH_SUCCESS: 
//       return { ...state, loading: false, data: action.payload.data, error: null, }
//     case types.FETCH_ERROR: 
//       return { ...state, loading: false, data: [], error: action.error }
//     default:
//       return state
//   }
// }