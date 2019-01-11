// Core
import { createSelector } from 'reselect';

const getData = state => state.data;

const getFetchData = createSelector(
  getData,
  data => data,
);

export default getFetchData;