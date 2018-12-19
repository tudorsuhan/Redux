// Core
import { combineReducers } from 'redux';

import { thunkReducer } from './thunkReducer';
// import { sagaReducer } from './sagaReducer';
// import { reduxactionReducer } from './reduxactionsReducer';

const combinedReducers = combineReducers({
  thunk: thunkReducer,
  // saga: sagaReducer,
  // actions: reduxactionReducer
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};

export default rootReducer;