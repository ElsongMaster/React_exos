import React from "react";

import DisplayTime from "./displayTime";
import DemoComponent from "./demoComponent";
import logo from "./logo.svg";

class Content extends React.Component {
  state = {
    formatTime: "phpTime",
  };

  handleClick = (format) => {
    this.setState({
      formatTime: format,
    });
  };
  render() {
    return (
      <div className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        {this.props.currentPage == "acceuil" && <DemoComponent />}
        {this.props.currentPage == "heure" && (
          <DisplayTime format={this.state.formatTime} />
        )}

        {this.props.currentPage == "Configuration" && (
          <div>
            <button onClick={() => this.handleClick("jsTime")}>
              JavaScript
            </button>
            <button onClick={() => this.handleClick("phpTime")}>PHP</button>
            <button onClick={() => this.handleClick("humanTime")}>
              Humain
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Content;
