import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkFetchCurrency } from '../../actions/thunk/thunkActions';

class WithThunk extends Component {
  componentDidMount() {
    this.props.fetchCurrency('https://api.nexchange.io/en/api/v1/currency/');
    console.log(this.props.fetchCurrency())
  }
  
  render() {
    const { data, loading, error } = this.props;
    if (!data) return <div>No data available...</div>;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
      data.map(currency => (
        <div key={currency.code}>{currency.code}</div>
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.thunk.data,
  loading: state.thunk.loading,
  error: state.thunk.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: (url) => dispatch(thunkFetchCurrency(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WithThunk);