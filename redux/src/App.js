// Core
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';

// Instruments
import { ReduxActions, ReduxSaga, ReduxThunk, Home } from './containers';
import { routes } from './constants/routes';
import { configStore } from './store/configStore';

// Styles
// import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <Provider store={configStore()}>
        <Router>
          <Switch>
            <Route exact path={routes.HOME} component={Home} />
            <Route path={routes.REDUX_THUNK} component={ReduxThunk} />
            <Route path={routes.REDUX_SAGA} component={ReduxSaga} />
            <Route path={routes.REDUX_ACTIONS} component={ReduxActions} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
