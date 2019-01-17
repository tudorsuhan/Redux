// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import PropTypes from "prop-types";

// Instruments
import { fetchStatus } from '../actions/actionCreators';

class FetchData extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FetchData));