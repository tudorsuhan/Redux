import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import ImageContainer from './containers/Images';

const App = () => (
  <Provider store={configureStore()}>
    <ImageContainer />
  </Provider>
);

export default App;
