import { handleActions } from 'redux-actions';

import * as actions from '../actions/images';

const initialState = {
  loading: false,
  images: [],
  error: false,
};

const handleImageStatus = state => ({
  ...state,
  loading: true,
});

const handleImageSuccess = (state, action) => ({
  ...state,
  loading: false,
  images: action.payload,
});

const handleImageError = state => ({
  ...state,
  loading: false,
  error: true,
});

const imagesData = handleActions(
  {
    [actions.imageStatus]: handleImageStatus,
    [actions.imageSuccess]: handleImageSuccess,
    [actions.imageError]: handleImageError,
  },
  initialState,
);

export default imagesData;
