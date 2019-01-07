// Core
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Instruments
import monitorReducersEnhancer from '../enhancers/monitorReducers';
import { logger } from '../middleware/reduxLogger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const devEnv = process.env.NODE_ENV === 'development';

// Configure Store
export function configStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware({
    emitter: emit => action => {
      if (Array.isArray(action)) {
        action.forEach(emit);
        return;
      }
      emit(action);
    }
  });

  const middlewares = [logger, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  if (devEnv) {
    middlewares.push(logger);
  }

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  sagaMiddleware.run(rootSaga);

  return store;
}
