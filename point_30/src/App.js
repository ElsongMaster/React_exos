import React from "react";
import "./App.css";
class App extends React.Component {
  state = {
    heureCourante: [
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getSeconds(),
    ],
  };
  clearCode = null;
  componentDidMount() {
    this.clearCode = setInterval(() => {
      this.setState({
        heureCourante: [
          new Date().getHours(),
          new Date().getMinutes(),
          new Date().getSeconds(),
        ],
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clearCode);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {" "}
            Il est: {this.state.heureCourante[0]} h{" "}
            {this.state.heureCourante[1]} min {this.state.heureCourante[2]} sec
          </p>
        </header>
      </div>
    );
  }
}

export default App;
