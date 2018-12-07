import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWithThunk } from '../actions/thunk';

class FetchWithThunk extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchWithThunk());
  }

  render() {
    const { payload } = this.props;
    return (
      <div className="App">
        {
          payload.data.map(result => (
            <div key={result.id}>{result.full_name}</div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    payload: state,
  }
}

export default connect(mapStateToProps)(FetchWithThunk);