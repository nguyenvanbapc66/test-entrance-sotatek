import React, { Component } from "react";
import Task from "./Task";
import Button from "../../components/Button";
import Input from "../../components/Input";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      isChecked: false,
      isOpenDetail: false,
      titleTaskUpdate: "",
      dueDateUpdate: "",
      discriptionUpdate: "",
      piorityUpdate: "",
      isUpdateDetail: false,
    };
  }

  updateInput = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  clickCheckBoxHandle = () => {
    this.setState((state, props) => ({
      isChecked: !state.isChecked,
    }));
  };

  clickBtnDetailHandle = (todoId) => {
    this.setState((state, props) => ({
      isOpenDetail: !state.isOpenDetail,
    }));
  };

  clickBtnRemoveHandle = () => {};

  btnClickUpdateDetail = () => {
    this.setState({
      isUpdateDetail: true,
    });
  };

  render() {
    return (
      <div className="container-todo-list">
        <div className="todo-list">
          <div className="header">To Do List</div>
          <div className="content">
            {this.props.list.map((item) => (
              <div key={item.id}>
                <div
                  className={this.state.isChecked ? "item task-done" : "item"}
                >
                  <Task
                    titleTask={item.titleTask}
                    discription={item.discription}
                    dueDate={item.dueDate}
                    piority={item.piority}
                    titleTaskUpdate={
                      this.state.titleTaskUpdate
                        ? this.state.titleTaskUpdate
                        : item.titleTask
                    }
                    discriptionUpdate={
                      this.state.discriptionUpdate
                        ? this.state.discriptionUpdate
                        : item.discription
                    }
                    dueDateUpdate={
                      this.state.dueDateUpdate
                        ? this.state.dueDateUpdate
                        : item.dueDate
                    }
                    piorityUpdate={
                      this.state.piorityUpdate
                        ? this.state.piorityUpdate
                        : item.piority
                    }
                    isChecked={this.state.isChecked}
                    onClick={() => this.clickCheckBoxHandle()}
                    isUpdateDetail={this.state.isUpdateDetail}
                  />
                  <div className="btn-edit">
                    <div className="inner">
                      <Button
                        color="#17c0eb"
                        name="Detail"
                        onClick={() => this.clickBtnDetailHandle(item.id)}
                      />
                    </div>
                    <div className="inner">
                      <Button
                        color="#ff3838"
                        name="Remove"
                        onClick={() => this.clickBtnRemoveHandle()}
                      />
                    </div>
                  </div>
                </div>

                {/* form edit Detail */}
                <div
                  className={
                    this.state.isOpenDetail ? "collapse-in" : "collapse"
                  }
                >
                  <div className="container-form-detail">
                    <div className="form-detail-task">
                      <div className="content">
                        <div className="input-wrapper">
                          <Input
                            className="title-task"
                            type="text"
                            placeholder="Add new task ..."
                            value={
                              this.state.titleTaskUpdate
                                ? this.state.titleTaskUpdate
                                : item.titleTask
                            }
                            onChange={(e) =>
                              this.updateInput(
                                "titleTaskUpdate",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="input-wrapper">
                          <div className="title-input">Desription</div>
                          <textarea
                            value={
                              this.state.discriptionUpdate
                                ? this.state.discriptionUpdate
                                : item.discription
                            }
                            onChange={(e) =>
                              this.updateInput(
                                "discriptionUpdate",
                                e.target.value
                              )
                            }
                          ></textarea>
                        </div>
                        <div className="detail">
                          <div className="input-wrapper">
                            <div className="title-input">Due Date</div>
                            <Input
                              type="date"
                              value={
                                this.state.dueDateUpdate
                                  ? this.state.dueDateUpdate
                                  : item.dueDate
                              }
                              onChange={(e) =>
                                this.updateInput(
                                  "dueDateUpdate",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div className="input-wrapper">
                            <div className="title-input">Piority</div>
                            <select
                              value={
                                this.state.piorityUpdate
                                  ? this.state.piorityUpdate
                                  : item.piority
                              }
                              onChange={(e) =>
                                this.updateInput(
                                  "piorityUpdate",
                                  e.target.value
                                )
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
                          name="Update"
                          onClick={() => this.btnClickUpdateDetail()}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
