import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApps } from '../../actions/appsActionsCreators';

class GetApps extends Component {
  componentDidMount() {
    // Call the method defined in mapDispatchToProps
    this.props.getAppsWithThunk();
    // Call the action cretor fetchApps with dispatch
    // this.props.dispatch(fetchApps())
  }
  
  render() {
    const { apps } = this.props;
    return (
      <div>
        {
          Object.keys(apps).map((key) => {
            return key === 'apps' && 
            apps.apps.map(app => <div key={app.id}>{app.title.rendered}</div>)
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    loading: state.appsReducerStatus,
    apps: state.appsReducerSuccess,
    error: state.appsReducerError,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAppsWithThunk: () => dispatch(fetchApps())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetApps);