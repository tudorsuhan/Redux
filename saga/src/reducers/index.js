import { combineReducers } from 'redux';
import {
  dogsFetchReducer,
  newsFetchReducer,
  appsFetchReducer
} from './sagaReducer';

const rootReducer = combineReducers({
  dogsFetchReducer,
  newsFetchReducer,
  appsFetchReducer
});

export default rootReducer;
