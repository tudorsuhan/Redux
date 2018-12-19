import { actionTypes } from '../actions/thunk/thunkActionTypes';

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const thunkReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PENDING:
      return { 
        ...state,
        loading: true,
        error: false,
      }
    case actionTypes.SUCCESS:
      return { 
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      }
    case actionTypes.ERROR:
      return { 
        ...state,
        loading: false,
        error: true,
      }
    default:
      return state;
  }
}