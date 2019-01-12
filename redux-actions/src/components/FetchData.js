// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Instruments
import { fetchStatus } from '../actions/actionCreators';
// import { getDataSelector, getLoadingStateSelector, getErrorStateSelector } from '../selectors/fetchData';
import { getDataSlct, getLoadingStateSlct, getErrorStateSlct } from '../selectors/fetchData';

class FetchData extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { data, loading, error } = this.props;

    if (!data) {
      return <div>No data available!</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error.message}</div>;
    }
    console.log(this.props);

    return (
      <div>
        {
          Object.keys(data).map((key) =>
            key === 'results' &&
            data.results.map((result) =>
              <div key={result.id}>{result.title.rendered}</div>
            )
          )
        }
      </div>
    );
  }
}

// Get data, loading, error state from redux store with mapStateToProps react-redux function
// const mapStateToProps = (state) => ({
//   loading: state.data.loading,
//   data: state.data.data,
//   error: state.data.error,
// });

// Get data, loading, error state from redux store with selectors
// const mapStateToProps = (state) => ({
//   data: getDataSelector(state),
//   loading: getLoadingStateSelector(state),
//   error: getErrorStateSelector(state),
// });

// Get data, loading, error state from redux store with reselect library
// const mapStateToProps = (state) => ({
//   data: getDataSlct(state),
//   loading: getLoadingStateSlct(state),
//   error: getErrorStateSlct(state),
// });

// Get data, loading, error state from redux store with reselect createStructuredSelector
export const mapStateToPropsSelector = createStructuredSelector({
  data: getDataSlct,
  loading: getLoadingStateSlct,
  error: getErrorStateSlct,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchStatus()),
});

export default connect(mapStateToPropsSelector, mapDispatchToProps)(FetchData);
