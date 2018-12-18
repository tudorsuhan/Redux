import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { loadState, saveState } from '../utils/localStorage';
import reducers from '../reducers';
import rootSaga from '../sagas';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware, loggerMiddleware];

const configStore = () => {
  const persistentState = loadState();
  const store = createStore(
    combineReducers({
      ...reducers,      
    }),
    persistentState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000));

  return store;
}

export { configStore };
