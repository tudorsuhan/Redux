import * as actions from '../actions/actionTypesTodo';
import { todo } from './todo';

export const todos = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO_SUCCEEDED:
      return [
        ...state,
        todo(state, action)
      ]
    case actions.DELETE_TODO_REQUESTED:
      return state.filter(todo =>
        todo.id !== action.id
      )
    case actions.EDIT_TODO_REQUESTED:
      return state.map(t =>
        t.id === action.id ?
          todo(t, action) :
          t
      )
    case actions.COMPLETE_TODO_REQUESTED:
      return state.map(t =>
        t.id === action.id ?
          todo(t, action) :
          t
      )
    case actions.CLEAR_COMPLETED_REQUESTED:
      return state.filter(todo => !todo.completed)
    case actions.COMPLETE_ALL_REQUESTED:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(t =>
        todo(
          t,
          { type: action.type, completed: !areAllMarked }
        )
      )
    default:
      return state;
  }
}