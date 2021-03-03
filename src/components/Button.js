import React, { Component } from "react";

class Button extends Component {
  render() {
    const buttonStyle = {
      backgroundColor: this.props.color,
    };

    return (
      <button style={buttonStyle} onClick={this.props.onClick}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
