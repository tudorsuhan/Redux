import React, { Component } from 'react';
import SagaNewsItems from '../../components/NewsItem/NewsItem';
import SagaNewsLoading from '../../components/Loader/Loader';
import SagaNewsButton from '../../components/Button/Button';

export default class NewsSagaContainer extends Component {
  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <SagaNewsButton />
        <SagaNewsLoading />
        <SagaNewsItems />
      </div>
    );
  }
}
