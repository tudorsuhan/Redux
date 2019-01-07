// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import FetchData from '../components/FetchData';

class FetchDataContainer extends Component {
  render() {
    return (
      <FetchData />
    );
  }
}

export default connect()(FetchDataContainer);