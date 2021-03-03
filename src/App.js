import React, { Component } from "react";
import "./asset/style-a.css";
import FormNewTask from "./features/TodoList-a/FormNewTask";
import TodoList from "./features/TodoList-a/TodoList";

class AppTodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  updateList = (list) => {
    this.setState({
      list,
    });
  };

  render() {
    return (
      <div className="App">
        <FormNewTask list={this.state.list} updateList={this.updateList} />
        <TodoList list={this.state.list} updateList={this.updateList} />
      </div>
    );
  }
}

export default AppTodoList;
