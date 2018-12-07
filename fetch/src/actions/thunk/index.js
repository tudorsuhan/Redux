// import axios from 'axios';

export const requestData = (bool) => {
  return {
    type: 'REQUEST_DATA',
    loading: bool,
  }
}

export const requestSuccess = (data, bool) => {
  return {
    type: 'REQUEST_SUCCESS',
    payload: data,
    loading: bool,
  }
}

export const requestError = (bool, error) => {
  return {
    type: 'REQUEST_ERROR',
    loading: bool,
    error,
  }
}

export const fetchWithThunk = () => {
  const URL = 'https://api.github.com/orgs/octokit/repos';
  return (dispatch, getState) => {
    dispatch(requestData(true));

    fetch(URL)
      .then(response => response.json())
      .then(results => {
        if (getState().results && !getState().results.length === 0) {
          throw new Error('No posts!')
        } else {
          dispatch(requestSuccess(results, false))
        }
      })
      .catch(error => dispatch(requestError(false, error)));
  }
}
