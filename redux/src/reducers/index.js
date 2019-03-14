import { combineReducers } from 'redux';

import imagesData from './images';
import employeesInfo from './employees';

const combinedReducers = combineReducers({
  images: imagesData,
  employees: employeesInfo,
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;
