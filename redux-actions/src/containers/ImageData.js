// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import ImageData from '../components/ImageData';

class ImageDataContainer extends Component {
  render() {
    return (
      <ImageData />
    );
  }
}

export default connect()(ImageDataContainer);