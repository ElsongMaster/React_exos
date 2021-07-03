import React, { Component } from "react";

export default class APIRequest extends Component {
  state = {
    message: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          message: json.title,
        })
      );
  }
  render() {
    return <div>{this.state.message}</div>;
  }
}
