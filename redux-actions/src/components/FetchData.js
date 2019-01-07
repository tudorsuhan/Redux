// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import { fetchSuccess } from '../actions/actionCreators';

class FetchData extends Component {
  
  componentDidMount() {
    this.props.getData();
  }
  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data.data,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchSuccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);