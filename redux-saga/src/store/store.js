import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { monitorReducersEnhancer } from '../enhancers/monitorReducers';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

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
const enhancers = [logger];
const composedEnhancers = compose(...enhancers);

export const configStore = () => {
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
    composeWithDevTools(applyMiddleware(sagaMiddleware, composedEnhancers))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
