import { takeLatest, take, call, put } from 'redux-saga/effects';
import axios from 'axios';
// import { delay } from 'redux-saga'

/**
 * Watcher Saga: watches for actions dispatched to the store, starts worker saga
 */
export function* actionWatcherApps() {
  yield takeLatest('REQUEST_STATUS', workerSagaApps);
}

/**
 * Function that makes the api request and returns a Promise for response
 */
export const fetchApps = () => {
  // return axios.get('http://android.softwsp.com/wp-json/wp/v2/posts')
  return axios({
    method: 'GET',
    url: 'http://android.softwsp.com/wp-json/wp/v2/posts'
  });
};

console.log(fetchApps());

/**
 * Worker Saga: makes the api call when watcher saga sees the action
 */
export function* workerSagaApps() {
  try {
    const response = yield call(fetchApps);
    const apps = response.data;
    yield put({ type: 'REQUEST_SUCCESS', apps });
  } catch (error) {
    yield put({ type: 'REQUEST_ERROR', error });
  }
}

// function* updateApi(data) {
//   for (let i = 0; i < 5; i++) {
//     try {
//       const apiResponse = yield call(fetchApps, { data });
//       return apiResponse;
//     } catch (err) {
//       if (i < 4) {
//         yield call(delay, 2000);
//       }
//     }
//   }
//   // attempts failed after 5 attempts
//   throw new Error('API request failed');
// }

// export function* updateResource() {
//   while (true) {
//     const { data } = yield take('REQUEST_STATUS');
//     try {
//       const apiResponse = yield call(updateApi, data);
//       yield put({
//         type: 'REQUEST_SUCCESS',
//         payload: apiResponse.body,
//       });
//     } catch (error) {
//       yield put({
//         type: 'REQUEST_ERROR',
//         error
//       });
//     }
//   }
// }
