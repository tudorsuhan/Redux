import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApps } from '../../actions/appsActionsCreators';

class GetApps extends Component {
  componentDidMount() {
    this.props.getAppsWithThunk();
  }
  
  render() {
    const { loading, error, apps } = this.props;
    // if (error) return <p>Sorry! There was an error loading the items</p>;
    // if (loading) return <p>Loading…</p>;
    console.log(this.props);
    return (
      <div>
        {/* {
          apps.map(item => (
            <div key={item.id}>{console.log(item)}</div>
          ))
        } */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    loading: state.appsReducerStatus,
    apps: state.appsReducerSuccess.apps,
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