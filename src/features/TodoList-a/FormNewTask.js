import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

class FormNewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTitleTask: "",
      newDueDate: this.getCurrentDate(),
      newDiscription: "",
      newPiority: "Normal",
    };
  }

  getCurrentDate() {
    const current = new Date();
    // current.setDate(current.getDate() + 1);
    return current.toISOString().substr(0, 10);
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  clickAddFormNewTask() {
    if (!this.state.newTitleTask) return;

    const newTask = {
      id: 1 + Math.random(),
      titleTask: this.state.newTitleTask,
      discription: this.state.newDiscription,
      dueDate: this.state.newDueDate,
      piority: this.state.newPiority,
    };

    const list = [...this.props.list];
    list.push(newTask);

    this.setState({
      newTitleTask: "",
      newDueDate: this.getCurrentDate(),
      newDiscription: "",
      newPiority: "Normal",
    });
    this.props.updateList(list);
  }

  render() {
    return (
      <div className="container">
        <div className="form-new-task">
          <div className="header">New Task</div>
          <div className="content">
            <div className="input-wrapper">
              <Input
                type="text"
                className="title-task"
                placeholder="Add new task ..."
                value={this.state.newTitleTask}
                onChange={(e) =>
                  this.updateInput("newTitleTask", e.target.value)
                }
              />
            </div>
            <div className="input-wrapper">
              <div className="title">Discription</div>
              <textarea
                value={this.state.newDiscription}
                onChange={(e) =>
                  this.updateInput("newDiscription", e.target.value)
                }
              ></textarea>
            </div>
            <div className="input-wrapper detail">
              <div className="inner">
                <div className="title">Due Date</div>
                <Input
                  type="date"
                  value={this.state.newDueDate}
                  onChange={(e) =>
                    this.updateInput("newDueDate", e.target.value)
                  }
                />
              </div>
              <div className="inner">
                <div className="title">Piority</div>
                <select
                  value={this.state.newPiority}
                  onChange={(e) =>
                    this.updateInput("newPiority", e.target.value)
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
              name="Add"
              color="#27ae60"
              onClick={() => this.clickAddFormNewTask()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FormNewTask;
