// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import { fetchStatus } from '../actions/actionCreators';

class FetchData extends Component {
  
  componentDidMount() {
    this.props.getData();
  }
  
  render() {

    return (
      <div>
        App
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  data: state.data.data,
  error: state.data.error,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);