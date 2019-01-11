// Core
import { createSelector } from 'reselect';

export const getDataRA = (state) => state.data.data;

const getFetchData = createSelector(
  getDataRA,
  data => data,
);

export default getFetchData;