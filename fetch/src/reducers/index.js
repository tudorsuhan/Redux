import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './reducersThunk';

export const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading
});
