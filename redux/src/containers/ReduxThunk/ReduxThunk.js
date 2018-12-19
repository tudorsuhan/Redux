import React, { Component } from 'react';
import WithThunk from '../../components/Fetch/WithThunk';
import { connect } from 'react-redux';

class ReduxThunk extends Component {
  render() {
    return (
      <div>
        <WithThunk />
      </div>
    );
  }
}

export default connect()(ReduxThunk);