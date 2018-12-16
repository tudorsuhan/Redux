import * as actions from '../actions/actionTypesTodo';

export const addTodoReducer = (state = [], action) => {
  switch(action.type) {
    case actions.ADD_TODO_REQUESTED: 
      return { ...state }
    case action.ADD_TODO_SUCCEEDED: 
      return { ...state, id: action.id, text: action.text, completed: false, }
    case actions.ADD_TODO_FAILED: 
      return { ...state, error: action.error, }
    default: 
      return state;
  }
}

export const todo = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO_SUCCEEDED:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }
    case actions.EDIT_TODO_REQUESTED:
      return { 
        ...state, 
        text: action.text, 
      }
    case actions.COMPLETE_TODO_REQUESTED:
      return { 
        ...state, 
        completed: !state.completed,
      }
    case actions.COMPLETE_ALL_REQUESTED:
      return { 
        ...state, 
        completed: action.completed,
      }
    default:
      return state;
  }
}