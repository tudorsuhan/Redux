import { combineReducers } from 'redux';
import { fetchData } from './fetchData';
import { ImageData } from './imageData';

const combinedReducers = combineReducers({
  data: fetchData,
  images: ImageData,
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;
