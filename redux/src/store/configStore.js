import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas/watchers';

const devEnv = process.env.NODE_ENV === 'development';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  if (devEnv) {
    const logger = createLogger({
      duration: true,
      collapsed: true,
      colors: {
        title: () => '#139BFE',
        prevState: () => '#1C5FAF',
        action: () => '#149945',
        nextState: () => '#A47104',
        error: () => '#ff0005',
      },
    });
    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];
  const devtools = devEnv
    // eslint-disable-next-line no-underscore-dangle
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    // eslint-disable-next-line no-underscore-dangle
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  const composeEnhancers = devEnv && devtools ? devtools : compose;

  const store = createStore(rootReducer, {}, composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
}
