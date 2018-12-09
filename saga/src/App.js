import React, { Component } from 'react';
import styles from './App.module.scss';
import { Provider } from 'react-redux';
import { configStore } from './store/store';
import SagaContainer from './containers/dogContainer/dogContainer';

const store = configStore();
console.log(store.getState());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <SagaContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
