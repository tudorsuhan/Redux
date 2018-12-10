import React, { Component } from 'react';
import SagaNewsItems from '../../components/NewsItem';
import SagaNewsLoading from '../../components/Loader';
import SagaNewsButton from '../../components/Button';

export default class NewsSagaContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ marginTop: '20px' }}>
        <SagaNewsItems />
        <SagaNewsLoading />
        <SagaNewsButton />
      </div>
    );
  }
}
