import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TodoList from "./TodoList";

class FormNewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTitleTask: "",
      newDueDate: "",
      newDiscription: "",
      newPiority: "Normal",
      list: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      newDueDate: this.setDateToday(),
    });
  };

  setDateToday() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    const today = d.toISOString().substr(0, 10);

    return today;
  }

  updateInput = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  btnFormClickHandle = () => {
    if (!this.state.newTitleTask) return;
    let infoForm = {
      id: 1 + Math.random(),
      titleTask: this.state.newTitleTask,
      discription: this.state.newDiscription,
      dueDate: this.state.newDueDate,
      piority: this.state.newPiority,
    };

    let newList = [...this.state.list];
    newList.push(infoForm);
    this.setState({
      newTitleTask: "",
      newDueDate: this.setDateToday(),
      newDiscription: "",
      newPiority: "Normal",
      list: newList,
    });
  };

  render() {
    return (
      <div id="form">
        <div className="container">
          <div className="form-new-task">
            <div className="header">New Task</div>
            <div className="content">
              <div className="input-wrapper">
                <Input
                  className="title-task"
                  type="text"
                  placeholder="Add new task ..."
                  value={this.state.newTitleTask}
                  onChange={(e) =>
                    this.updateInput("newTitleTask", e.target.value)
                  }
                />
              </div>
              <div className="input-wrapper">
                <div className="title-input">Desription</div>
                <textarea
                  value={this.state.newDiscription}
                  onChange={(e) =>
                    this.updateInput("newDiscription", e.target.value)
                  }
                ></textarea>
              </div>
              <div className="detail">
                <div className="input-wrapper">
                  <div className="title-input">Due Date</div>
                  <Input
                    type="date"
                    value={this.state.newDueDate}
                    onChange={(e) =>
                      this.updateInput("newDueDate", e.target.value)
                    }
                  />
                </div>
                <div className="input-wrapper">
                  <div className="title-input">Piority</div>
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
                color="#27ae60"
                name="Add"
                onClick={() => this.btnFormClickHandle()}
              />
            </div>
          </div>
        </div>
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default FormNewTask;
