import { combineReducers } from 'redux';
import { fetchData } from './fetchData';

const rootReducer = combineReducers({
  data: fetchData,
});

export default rootReducer;