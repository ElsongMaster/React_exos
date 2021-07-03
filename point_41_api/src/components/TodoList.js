import React, { Component } from "react";
import TableDisplay from "./TableDisplay";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  state = {
    values: [],
  };

  handleClick = () => {
    let url = "https://jsonplaceholder.typicode.com/todos?userId=";
    url += this.inputRef.current.value;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        json.map((element) => {
          element.completed = element.completed ? "Oui" : "Non";
          return element;
        });
        this.setState({
          values: json,
        });
      });
  };
  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.handleClick}>Filter</button>
        <TableDisplay
          content={this.state.values}
          header={["UserID", "TacheID", "Titre", "Complété"]}
          uniqueKey="id"
        />
      </div>
    );
  }
}
