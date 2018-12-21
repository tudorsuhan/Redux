// import { delay } from 'redux-saga';
// import { call } from 'redux-saga/effects';

// export function* updateApi(data) {
//   for(let i = 0; i < 5; i++) {
//     try {
//       const apiResponse = yield call(apiRequest, { data });
//       console.log('Retry');
//       return apiResponse;
//     } catch (error) {
//       if(i < 4) {
//         yield call(delay, 2000);
//       }
//     }
//   }
//   throw new Error('Api request failed!');
// }

// export default function* updateResource() {
//   while(true) {
//     const { data } = yield take('NEWS_REQUEST');
//     try {
//       const apiResponse = yield call(apiRequest, data);
//       yield put({
//         type: 'NEWS_SUCCESS',
//         payload: apiResponse.body,
//       });
//       console.log('Retry');
//     } catch (error) {
//       yield put({
//         type: 'NEWS_ERROR',
//         error,
//       });
//     }
//   }
// }
