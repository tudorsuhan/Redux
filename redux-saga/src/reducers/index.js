import { combineReducers } from 'redux';
import { dogsFetchReducer, newsFetchReducer, photosFetchReducer } from './sagaReducer';

const rootReducer = combineReducers({
  dogs: dogsFetchReducer,
  news: newsFetchReducer,
  photos: photosFetchReducer
});

export default rootReducer;
