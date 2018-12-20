// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import { fetchFiles } from '../../actions/asyncActions';
import styles from './FetchFiles.module.scss';

class FetchFiles extends Component {
  
  componentDidMount() {
    this.props.getFiles('https://archive.org/metadata/principleofrelat00eins')
  }

  render() {
    const { files, loading, error } = this.props;
    if (!files) return <div>No data available...</div>;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
      <div className={styles.left}>
        {Object.keys(files).map(file => (
          file === 'files' && 
          files.files.map(file => (
            <div key={file.md5}>{file.format}</div>
          ))
        ))}
      </div>
    )
  }
}

/**
 * Transfer store state to component's props
 * @param  {Object} state
 * @return {Object}
 */
const mapStateToProps = (state) => ({
  files: state.files.files,
  loading: state.files.loading,
  error: state.files.error,
});

const mapDispatchToProps = (dispatch) => ({
  getFiles: (url) => dispatch(fetchFiles(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(FetchFiles);