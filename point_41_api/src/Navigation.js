import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
export default class Navigation extends Component {
  state = {
    view: "display",
  };

  handleClick = (newView) => {
    this.setState({
      view: newView,
    });
  };
  render() {
    return (
      <div>
        <div className="navbar">
          <button onClick={() => this.handleClick("display")}>Afficher</button>
          <button onClick={() => this.handleClick("create")}>créer</button>
        </div>
        {this.state.view === "display" && <TodoList />}
        {this.state.view === "create" && <TodoForm />}
      </div>
    );
  }
}
