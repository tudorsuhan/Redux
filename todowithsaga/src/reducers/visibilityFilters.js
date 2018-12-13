import * as filters from '../actions/actionTypesFilter';

export const visibilityFilters = (state = filters.SHOW_ALL, action) => {
  switch (action.type) {
    case filters.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}