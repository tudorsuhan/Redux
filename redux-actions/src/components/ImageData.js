// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import PropTypes from "prop-types";

// Instruments
import { imageStatus } from '../actions/actionCreators';
import { getImageSelector, getImageLoadingSelector, getImageErrorSelector } from '../selectors/imageData';

class ImageData extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { getImages } = this.props;

    getImages();
  }

  render() {
    const { images, loading, error } = this.props;

    if (!images) {
      return <div>No data available...</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <>
        {Object.values(images).map((image) =>
          image && image.map((img) => (
            <div key={img.id}>{img.title}</div>
          ))
        )}
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  images: getImageSelector(state),
  loading: getImageLoadingSelector(state),
  error: getImageErrorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getImages: () => dispatch(imageStatus()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ImageData));
