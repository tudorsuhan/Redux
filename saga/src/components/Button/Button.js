import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newsRequest } from '../../actions/actionCreators';

const styles = {
  backgroundColor: 'Grey ',
  padding: '10px 25px',
  borderRadius: '50px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid',
  cursor: 'pointer'
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleMouseOut = () => {
    this.setState({
      hover: false
    });
  };

  handleMouseOver = () => {
    this.setState({
      hover: true
    });
  };

  render() {
    return (
      <button
        style={
          !this.state.hover
            ? styles
            : { ...styles, backgroundColor: 'DarkTurquoise ' }
        }
        onMouseOut={this.handleMouseOut}
        onMouseOver={this.handleMouseOver}
        onClick={this.props.newsRequest}
      >
        Press to see news
      </button>
    );
  }
}

const mapDispatchToProps = {
  newsRequest: newsRequest
};

const SagaNewsButton = connect(
  null,
  mapDispatchToProps
)(Button);
export default SagaNewsButton;
