import React, { Component } from 'react';
import GetPosts from '../components/GetPosts/GetPosts';
import GetApps from '../components/GetApps/GetApps';

export default class FetchWithThunk extends Component {
  render() {
    return (
      <div className="App">
        <GetApps />
        <GetPosts />
      </div>
    );
  }
}
