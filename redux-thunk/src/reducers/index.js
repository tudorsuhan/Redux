import { combineReducers } from 'redux';
import { reducerFiles } from './reducerFiles';

const rootReducer = combineReducers({
  files: reducerFiles,
});

export default rootReducer;