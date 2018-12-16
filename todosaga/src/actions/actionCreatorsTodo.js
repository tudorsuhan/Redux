import * as actions from './actionTypesTodo';

export const addTodoStatus = (loading) => ({
    type: actions.ADD_TODO_STATUS,
    payload: loading,
});

export const addTodoSuccess = (text) => ({
    type: actions.ADD_TODO_SUCCESS,
    id: Date.now(),
    text,
});

export const addTodoFailure = (error) => ({
    type: actions.ADD_TODO_FAILURE,
    payload: error,
});