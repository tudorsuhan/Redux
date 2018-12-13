import { combineReducers } from 'redux';
import { todo } from './todo';
import { todos } from './todos';
import { visibilityFilters } from './visibilityFilters';

const rootReducer = combineReducers({
  todo,
  todos,
  visibilityFilters,
});

export default rootReducer;