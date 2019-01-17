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
    const { data, loading, error } = this.props;

    if (!data) {
      return <div>No data available...</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <div>
        {
          Object.values(data).map((result) => (
            result.map((i) => (
              <div key={i.id}>{i.title.rendered}</div>
            ))
          ))
        }
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
