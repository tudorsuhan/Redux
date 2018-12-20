import { types } from '../actions/actionTypes';

const initialState = {
  files: [],
  loading: false,
  error: false,
}

export const reducerFiles = (state = initialState, action) => {
  switch (action.type) {
    case types.PENDING:
      return { ...state, loading: true, }
    case types.SUCCESS: 
      return { ...state, files: action.payload.files, loading: false, }
    case types.ERROR: 
      return { ...state, files: [], loading: false, error: true }
    default:
      return state
  }
}