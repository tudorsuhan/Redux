import { combineReducers } from 'redux';

import imagesData from './images';

const combinedReducers = combineReducers({
  images: imagesData,
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;
