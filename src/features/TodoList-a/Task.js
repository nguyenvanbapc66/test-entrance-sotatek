import React, { Component } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
      isOpenDetail: true,
      titleTaskUpdate: "",
      dueDateUpdate: "",
      discriptionUpdate: "",
      piorityUpdate: "",
    };
  }

  componentDidMount = () => {
    this.setState({
      titleTaskUpdate: this.props.titleTask,
      discriptionUpdate: this.props.discription,
      dueDateUpdate: this.props.dueDate,
      piorityUpdate: this.props.piority,
    });
  };

  checingkBox = () => {
    this.setState((state, props) => ({
      isChecked: !state.isChecked,
    }));
  };

  updateInput = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  clickBtnDetailHandle() {
    this.setState({
      isOpenDetail: !this.state.isOpenDetail,
    });
  }

  clickUpdateDetail = (todoId) => {
    const {
      titleTaskUpdate,
      discriptionUpdate,
      dueDateUpdate,
      piorityUpdate,
    } = this.state;
    this.props.updateDetail(
      todoId,
      titleTaskUpdate,
      discriptionUpdate,
      dueDateUpdate,
      piorityUpdate
    );
  };

  clickBtnRemoveHandle = (todoId) => {
    this.props.deleteDetail(todoId);
  };

  render() {
    const style = {
      height: "100%",
      marginBottom: "50px",
    };
    return (
      <div style={style}>
        <div className={this.state.isChecked ? "task-done" : "task"}>
          <div className="item">
            <div className="inner">
              <input
                className="checkbox"
                type="checkbox"
                defaultChecked={this.state.isChecked}
                onClick={() => this.checingkBox()}
              />
            </div>
            <div className="inner">
              <div>{this.props.titleTask}</div>
            </div>
          </div>

          <div className="btn-edit">
            <div className="inner">
              <Button
                color="#17c0eb"
                name={this.state.isChecked ? "Done" : "Detail"}
                onClick={() => this.clickBtnDetailHandle()}
              />
            </div>
            <div className="inner">
              <Button
                color="#ff3838"
                name="Remove"
                onClick={() => this.clickBtnRemoveHandle(this.props.id)}
              />
            </div>
          </div>
        </div>

        {/* form edit detail */}
        <div className={this.state.isOpenDetail ? "collapse" : "collapse-in"}>
          <div className="container-form-detail">
            <div className="form-new-task">
              <div className="content">
                <div className="input-wrapper">
                  <Input
                    type="text"
                    className="title-task"
                    placeholder="Add new task ..."
                    value={this.state.titleTaskUpdate}
                    onChange={(e) =>
                      this.updateInput("titleTaskUpdate", e.target.value)
                    }
                  />
                </div>
                <div className="input-wrapper">
                  <div className="title">Discription</div>
                  <textarea
                    value={this.state.discriptionUpdate}
                    onChange={(e) =>
                      this.updateInput("discriptionUpdate", e.target.value)
                    }
                  ></textarea>
                </div>
                <div className="input-wrapper detail">
                  <div className="inner">
                    <div className="title">Due Date</div>
                    <Input
                      type="date"
                      value={this.state.dueDateUpdate}
                      onChange={(e) =>
                        this.updateInput("dueDateUpdate", e.target.value)
                      }
                    />
                  </div>
                  <div className="inner">
                    <div className="title">Piority</div>
                    <select
                      value={this.state.piorityUpdate}
                      onChange={(e) =>
                        this.updateInput("piorityUpdate", e.target.value)
                      }
                    >
                      <option>Low</option>
                      <option>Normal</option>
                      <option>High</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="footer">
                <Button
                  name="Update"
                  color="#27ae60"
                  onClick={() => this.clickUpdateDetail(this.props.id)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
