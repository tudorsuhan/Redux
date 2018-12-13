import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { monitorReducers } from '../utils/monitorReducers';
import { loadState, saveState } from '../utils/localStorage';
import throttle from 'lodash/throttle';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const logger = createLogger();
const enhancers = [monitorReducers, logger];
const composedEnhancers = compose(...enhancers);

export const configStore = () => {
  const persistentState = loadState()
  /**
   * Create an emitter which "unpacks" array of actions and emits individual actions extracted from the array
   */
  const sagaMiddleware = createSagaMiddleware({
    emitter: emit => action => {
      if (Array.isArray(action)) {
        action.forEach(emit);
        return;
      }
      emit(action);
    }
  });

  const store = createStore(
    rootReducer,
    persistentState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, composedEnhancers))
  );

  sagaMiddleware.run(rootSaga);

  /**
     * Persisting the state to the localStorage
     */
    store.subscribe(throttle(() => {
      saveState(store.getState())
  }, 1000))

  return store;
};