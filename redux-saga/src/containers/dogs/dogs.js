// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import 'antd/dist/antd.css';

// Instruments
import { apiCallRequest } from '../../actions/actionCreators';
import logo from '../../logo.svg';
import styles from './dogs.module.scss';

class Dogs extends Component {
  state = {
    loading: false,
    iconLoading: false,
  }

  handleOnclick = () => {
    this.setState({ loading: true });
    this.setState({ iconLoading: true });
    setTimeout(() => {
      this.props.onRequestDog()
      this.setState({ loading: false });
      this.setState({ iconLoading: false });
    }, 1000)
  }
  
  render() {
    const { fetching, dog, error } = this.props;

    return (
      <div className={styles.dog}>
        <header className={styles.dogHeader}>
          <img src={dog || logo} className={styles.dogHeaderLogo} alt="logo" />
        </header>

        {
          fetching ? 
          <Button type="default" loading={this.state.loading} onClick={this.handleOnclick}>
            Request a dog
          </Button> : 
          <Button type="default" loading={this.state.loading} onClick={this.handleOnclick}>
            Request a dog
          </Button>
        }

        {error && <p style={{ color: 'red' }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.dogs.fetching,
    dog: state.dogs.dog,
    error: state.dogs.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch(apiCallRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);
