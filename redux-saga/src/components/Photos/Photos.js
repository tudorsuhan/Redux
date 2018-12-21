// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

// Instruments
import { photoRequest } from '../../actions/actionCreators';

class Photos extends Component {
  
  componentDidMount() {
    setTimeout(() => {
      this.props.getPhotos()
    }, 1000);
  }
  
  render() {
    const { photos, loading, error } = this.props;
    if (!photos) return <div>No data available...</div>;
    if (loading) return <Spin />;
    if (error) return <div>{error.message}</div>;

    return (
      <div>
        {
          photos.photos.map(photo => (
            <div key={photo.filename}>{photo.post_url}</div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos,
  loading: state.photos.loading,
  error: state.photos.error,
});

const mapDispatchToProps = (dispatch) => ({
  getPhotos: () => dispatch(photoRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);