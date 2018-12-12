import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './reducersThunk';
import { appsReducerStatus, appsReducerSuccess, appsReducerError } from './reducersApps';

export const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  appsReducerStatus,
  appsReducerSuccess,
  appsReducerError,
});
