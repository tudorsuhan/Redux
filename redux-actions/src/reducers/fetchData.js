// Core
import { handleActions } from 'redux-actions';

// Instruments
import * as act from '../actions/actionCreators';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const fetchDataStatus = (state) => ({
  ...state,
  loading: true,
});

export const fetchDataSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    data: action.payload,
  };
};

export const fetchDataError = (state) => ({
  ...state,
  loading: false,
  error: true,
});

export const fetchData = handleActions({
  [act.fetchStatus]: fetchDataStatus,
  [act.fetchSuccess]: fetchDataSuccess,
  [act.fetchError]: fetchDataError,
}, initialState);
