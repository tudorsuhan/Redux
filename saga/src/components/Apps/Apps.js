import React, { Component } from 'react';
import { connect } from 'react-redux';

class Apps extends Component {
  render() {
    // const { apps } = this.props;
    console.log(this.props);
    console.log(this.props.apps);
    return (
      // apps.map(app => (
      //   <div key={app.id}>App Title</div>
      // ))
      <div>Test</div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.appsFetchReducer
});

const SagaAppsItems = connect(
  mapStateToProps,
  null
)(Apps);

export default SagaAppsItems;
