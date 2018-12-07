import { initialState } from '../globals/initialState';

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_DATA': 
      return { ...state, loading: true, error: null, }
    case 'REQUEST_SUCCESS': 
      return { ...state, data: action.payload, loading: false, error: null, }
    case 'REQUEST_ERROR': 
      return { ...state, loading: false, error: action.error, }
    default: 
      return state;
  }
}