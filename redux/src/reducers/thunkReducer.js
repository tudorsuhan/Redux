import { actionTypes } from '../actions/thunk/thunkActionTypes';

const initialState = {
  data: [],
  loading: false,
  error: null,
}

export const thunkReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.PENDING:
      return { ...state, loading: true, }

    case actionTypes.SUCCESS:
      return { ...state, data: action.data, loading: false, }

    case actionTypes.ERROR:
      return { ...state, data: [], loading: false, error: action.error, }

    default:
      return state;
  }
}
