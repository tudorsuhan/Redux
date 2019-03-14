import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Image from '../../components/Images';
import './index.scss';

import { imageStatus } from '../../actions/images';
import { getImageSelector, getImageLoadingSelector, getImageErrorSelector } from '../../selectors/images';

class ImageContainer extends Component {
  static propTypes = {
    images: PropTypes.instanceOf(Object),
    loading: PropTypes.bool,
    error: PropTypes.bool,
    getImages: PropTypes.func,
  };

  static defaultProps = {
    images: null,
    loading: null,
    error: null,
    getImages: () => {},
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
      <div className="images">
        {
          Object.values(images).map(image => <Image key={image.id} src={image.url} />)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: getImageSelector(state),
  loading: getImageLoadingSelector(state),
  error: getImageErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getImages: () => dispatch(imageStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);
