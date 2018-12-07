import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { monitorReducersEnhancer } from '../enhancers/monitorReducers';
import { reducer } from '../reducers';
import { initialState } from '../globals/initialState';

const logger = createLogger();
const enhancers = [monitorReducersEnhancer, logger];
const composedEnhancers = compose(...enhancers);

const configureStore = () => {
  const store = createStore(
    reducer, 
    initialState,
    composeWithDevTools(applyMiddleware(thunk, composedEnhancers)),
  );
  return store;
}

export default configureStore;