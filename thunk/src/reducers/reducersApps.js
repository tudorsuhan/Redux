import * as types from '../actions/actionTypes';

export const appsReducerStatus = (state = {}, action) => {
  switch(action.type) {
    case types.REQUEST_STATUS: 
      return { ...state, loading: true, };
    default: 
      return state;
  }
}

export const appsReducerSuccess = (state = {}, action) => {
  switch(action.type) {
    case types.REQUEST_SUCCESS: 
      return { ...state, apps: action.apps, loading: false, error: null, };
    default: 
      return state;
  }
}

export const appsReducerError = (state = {}, action) => {
  switch(action.type) {
    case types.REQUEST_ERROR: 
      return { ...state, error: action.error, apps: [], }
    default: 
      return state;
  }
}