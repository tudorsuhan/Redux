// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import { fetchStatus } from '../actions/actionCreators';
import { getDataRA } from '../selectors/fetchData';

class FetchData extends Component {
  
  componentDidMount() {
    this.props.getData();
  }
  
  render() {
    const { data, loading, error } = this.props;
    if (!data) return <div>No data available!</div>;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    console.log(this.props);

    return (
      <div>
        {
          Object.keys(data).map(key => (
            key === 'results' && 
            data.results.map(result => (
              <div key={result.id}>{result.title.rendered}</div>
            ))
          ))
          // data.results.map(result => 
          //   <div key={result.id}>{result.title.rendered}</div>
          // )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  data: state.data.data,
  dataSelectors: getDataRA(state),
  error: state.data.error,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);