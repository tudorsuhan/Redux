// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

// Instruments
import './App.scss';
import { configStore } from './store/configStore';

// Components
import FetchDataContainer from './containers/FetchData';
import ImageDataContainer from './containers/ImageData';

const store = configStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <ImageDataContainer />
            <FetchDataContainer />
          </div>
        </Router>
      </Provider>
    );
  }
}
