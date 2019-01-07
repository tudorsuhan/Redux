// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Instruments
import './App.scss';
import { configStore } from './store/configStore';

// Components
import FetchDataContainer from './containers/FetchData';

const store = configStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FetchDataContainer />
        </div>
      </Provider>
    );
  }
}
