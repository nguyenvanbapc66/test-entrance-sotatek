import React, { Component } from "react";
import Task from "./Task";
import Input from "../../components/Input";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleTaskFound: "",
    };
  }

  updateInput = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  updateDetail = (id, titleTask, discription, dueDate, piority) => {
    const newInfoTask = {
      id,
      titleTask,
      discription,
      dueDate,
      piority,
    };

    const list = [...this.props.list];
    const editingList = list.filter((item) => item.id !== id);
    editingList.push(newInfoTask);

    this.props.updateList(editingList);
  };

  deleteDetail = (id) => {
    console.log(id);
    const list = [...this.props.list];
    const editingList = list.filter((item) => item.id !== id);

    this.props.updateList(editingList);
  };

  render() {
    const sortList = this.props.list.sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );
    const taskFound = sortList.filter(
      (item) => item.titleTask.toLowerCase().includes(this.state.titleTaskFound.toLowerCase())
    );

    return (
      <div className="container-todo-list">
        <div className="header">To Do List</div>
        <div className="input-search">
          <Input
            type="text"
            placeholder="Search ..."
            className="title-task"
            value={this.state.titleTaskFound}
            onChange={(e) => this.updateInput("titleTaskFound", e.target.value)}
          />
        </div>
        <div className="list-items">
          {!this.state.titleTaskFound
            ? sortList.map((item) => (
                <div key={item.id}>
                  <Task
                    id={item.id}
                    titleTask={item.titleTask}
                    discription={item.discription}
                    dueDate={item.dueDate}
                    piority={item.piority}
                    updateDetail={this.updateDetail}
                    deleteDetail={this.deleteDetail}
                  />
                </div>
              ))
            : taskFound.map((item) => (
                <div key={item.id}>
                  <Task
                    id={item.id}
                    titleTask={item.titleTask}
                    discription={item.discription}
                    dueDate={item.dueDate}
                    piority={item.piority}
                    updateDetail={this.updateDetail}
                    deleteDetail={this.deleteDetail}
                  />
                </div>
              ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
