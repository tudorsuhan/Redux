import React, { Component } from 'react';
import styles from './App.module.scss';
import { Provider } from 'react-redux';
import { configStore } from './store/store';
import DogsSagaContainer from './containers/dogContainer/dogContainer';
import NewsSagaContainer from './containers/newsContainer/newsContainer';
import AppsSagaContainer from './containers/appsContainer/appsContainer';

const store = configStore();
console.log(store.getState());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <DogsSagaContainer />
          <AppsSagaContainer />
          <NewsSagaContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
