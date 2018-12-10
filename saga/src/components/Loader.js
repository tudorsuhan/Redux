import React from 'react';
import { connect } from 'react-redux';

const Loader = ({ loading }) => (loading ? <div>Loading...</div> : null);

const mapStateToProps = state => ({
  loading: state.loading
});

const SagaNewsLoading = connect(
  mapStateToProps,
  null
)(Loader);
export default SagaNewsLoading;
