// Core
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { bool, string, oneOf, func } from "prop-types";
import cx from "classnames";

// Instruments
import styles from "./Tooltip.module.scss";

class Tooltip extends Component {
  static propTypes = {
    className: string,
    position: oneOf(["left", "right", "top", "bottom", "leftBottom"]),
    show: bool,
    hideAfterClick: bool,
    onHide: func
  };

  static defaultProps = {
    position: "top",
    hideAfterClick: false,
    show: false,
    onHide: function () { }
  };

  componentDidMount() {
    const { hideAfterClick, anchor } = this.props;

    this.anchorNode = anchor
      ? ReactDOM.findDOMNode(anchor)
      : this.tooltipNode.parentNode;

    hideAfterClick && this.addEventListeners();
    this.updatePosition();
  }

  componentDidUpdate() {
    this.updatePosition();
  }

  componentWillUnmount() {
    this.props.hideAfterClick && this.removeEventListeners();
  }

  addEventListeners() {
    window.addEventListener("click", this.handlerHide, true);
  }

  removeEventListeners() {
    window.removeEventListener("click", this.handlerHide, true);
  }

  handlerHide = () => {
    if (!this.props.show) return;

    this.props.onHide();
  };

  calculatePosition = () => {
    const anchorElWidth = this.anchorNode.offsetWidth;
    const anchorElHeight = this.anchorNode.offsetHeight;
    const tooltipElWidth = this.tooltipNode.offsetWidth;
    const tooltipElHeight = this.tooltipNode.offsetHeight;
    const position = this.props.position;

    let left = Math.floor(anchorElWidth / 2 - tooltipElWidth / 2);
    let top = Math.floor(anchorElHeight / 2 - tooltipElHeight / 2);

    switch (position) {
      case "top":
        top = -tooltipElHeight;
        break;
      case "bottom":
        top = anchorElHeight;
        break;
      case "left":
        left = -tooltipElWidth;
        break;
      case "right":
        left = anchorElWidth;
        break;

      default:
        return "top";
    }

    return {
      left,
      top
    };
  };

  updatePosition = () => {
    let position = this.calculatePosition();

    this.tooltipNode.style.left = `${position.left}px`;
    this.tooltipNode.style.top = `${position.top}px`;
  };

  getRootClass = () => {
    const { className, position, show } = this.props;

    return cx(
      styles.tooltip,
      { [styles.show]: show },
      styles[className],
      { [styles["position-top"]]: position === "top" },
      { [styles["position-bottom"]]: position === "bottom" },
      { [styles["position-left"]]: position === "left" },
      { [styles["position-right"]]: position === "right" }
    );
  };

  render() {
    const rootClass = this.getRootClass();

    return (
      <div className={rootClass} ref={node => { this.tooltipNode = node; }}>
        <div className={styles["tooltip-content"]}>{this.props.children}</div>
      </div>
    );
  }
}

export default Tooltip;
