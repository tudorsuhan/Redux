import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import ImageContainer from './containers/Images';
import EmployeesContainer from './containers/Employees';

const App = () => (
  <Provider store={configureStore()}>
    <EmployeesContainer />
    <ImageContainer />
  </Provider>
);

export default App;
