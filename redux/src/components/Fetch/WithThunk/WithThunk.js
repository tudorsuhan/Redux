import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkFetchData } from '../../../actions/thunk/thunkActions';

class WithThunk extends Component {
  componentDidMount() {
    console.log(this.props.dispatch(thunkFetchData()))
  }
  
  render() {
    console.log(this.props);

    return (
      <div>
        WithThunk
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.thunk
})

export default connect(mapStateToProps, null)(WithThunk);