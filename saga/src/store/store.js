import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { monitorReducersEnhancer } from '../enhancers/monitorReducers';
import { rootReducer } from '../reducers/sagaReducer';
import { watcherSaga } from '../sagas';

const logger = createLogger();
const enhancers = [monitorReducersEnhancer, logger];
const composedEnhancers = compose(...enhancers);

export const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, composedEnhancers))
  );

  sagaMiddleware.run(watcherSaga);

  return store;
};
