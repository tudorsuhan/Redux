import { combineReducers } from 'redux';
import { fetchData } from './fetchData';

const combinedReducers = combineReducers({
  data: fetchData,
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;
