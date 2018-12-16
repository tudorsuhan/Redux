import { combineReducers } from 'redux';
import { addTodoReducer } from './todo';
import { todos } from './todos';
import { visibilityFilters } from './visibilityFilters';

const rootReducer = combineReducers({
  addTodoReducer,
  todos,
  visibilityFilters,
});

export default rootReducer;