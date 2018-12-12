import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemsFetchDataOther } from '../../actions/thunkActionsCreators';

class GetPosts extends Component {
  componentDidMount() {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    this.props.fetchDataOther('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  render() {
    const { hasErrored, isLoading, items } = this.props;
    if (hasErrored) return <p>Sorry! There was an error loading the items</p>;
    if (isLoading) return <p>Loading…</p>;

    return (
      <div className="App">
        {
          items.map(result => (
            <div key={result.id}>{result.label}</div>
          ))
        }
        {
          items.map(result => (
            <div key={result.id}>{result.label}</div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    fetchDataOther: (url) => dispatch(itemsFetchDataOther(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetPosts);