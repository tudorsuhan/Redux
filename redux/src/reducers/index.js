import { combineReducers } from 'redux';

import imagesData from './images';
import employeesData from './employees';

const combinedReducers = combineReducers({
  images: imagesData,
  employees: employeesData,
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;
