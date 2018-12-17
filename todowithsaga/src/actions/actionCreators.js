import * as actions from './actionTypesTodo';
import * as actionsFilter from './actionTypesFilter';
const uuidv1 = require('uuid/v1');

export const addTodo = (text) => ({
  type: actions.ADD_TODO_REQUESTED,
  id: uuidv1(),
  text
});

export const setVisibilityFilter = (filter) => ({
  type: actionsFilter.SET_VISIBILITY_FILTER,
  filter,
});

export const deleteTodo = (id, text) => ({
  type: actions.DELETE_TODO_REQUESTED,
  id,
  text,
});

export const editTodo = (id, text) => ({
  type: actions.EDIT_TODO_REQUESTED,
  id,
  text,
});

export const completeTodo = (id, complete) => ({
  type: actions.COMPLETE_TODO_REQUESTED,
  id,
  complete,
});

export const clerCompleted = () => ({
  type: actions.CLEAR_COMPLETED_REQUESTED,
});

export const completeAll = () => ({
  type: actions.COMPLETE_ALL_REQUESTED,
});
