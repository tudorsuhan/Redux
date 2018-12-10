import { combineReducers } from 'redux';
import { dogsFetchReducer, newsFetchReducer } from './sagaReducer';

const rootReducer = combineReducers({
  dogsFetchReducer,
  newsFetchReducer
});

export default rootReducer;
