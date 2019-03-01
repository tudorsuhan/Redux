// Core
import { handleActions } from 'redux-actions';

// Instruments
import * as actions from '../actions/actionCreators';

const initialState = {
  loading: false,
  images: [],
  error: false,
};

export const imageStatus = (state) => ({
  ...state,
  loading: true,
});

export const imageSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    images: action.payload,
  };
};

export const imageError = (state) => ({
  ...state,
  loading: false,
  error: true,
});

export const ImageData = handleActions({
  [actions.imageStatus]: imageStatus,
  [actions.imageSuccess]: imageSuccess,
  [actions.imageError]: imageError,
}, initialState);
