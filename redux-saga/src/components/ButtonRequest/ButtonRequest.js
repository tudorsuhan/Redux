// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import 'antd/dist/antd.css';

// Instruments
import { newsRequest } from '../../actions/actionCreators';

class ButtonRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      loading: false,
      iconLoading: false,
    };
  }

  handleMouseOut = () => {
    this.setState({ hover: false });
  };

  handleMouseOver = () => {
    this.setState({ hover: true });
  };

  handleOnclick = () => {
    this.setState({ loading: true });
    this.setState({ iconLoading: true });
    setTimeout(() => {
      this.props.newsRequest()
      this.setState({ loading: false });
      this.setState({ iconLoading: false });
    }, 1000)
  }

  render() {
    return (
      <Button type="primary" loading={this.state.loading} onClick={this.handleOnclick}>
        Load articles
      </Button>
    );
  }
}

const mapDispatchToProps = {
  newsRequest: newsRequest
};

export default connect(null, mapDispatchToProps)(ButtonRequest);
