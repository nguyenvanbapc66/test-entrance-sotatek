import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: this.props.isChecked,
    };
  }

  render() {
    const inputCheckBoxStyle = {
      display: this.props.isChecked ? "none" : "block",
    };

    return (
      <div>
        <div>
          <div className="check-list">
            <div className="inner">
              <input
                className="checkbox"
                type="checkbox"
                defaultChecked={this.state.isChecked}
                style={inputCheckBoxStyle}
                onClick={this.props.onClick}
              />
            </div>
            <div className="inner">
              <div>
                {this.props.isUpdateDetail
                  ? this.props.titleTaskUpdate
                  : this.props.titleTask}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
