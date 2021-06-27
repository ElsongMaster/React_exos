import React from "react";
import logo from "../../logo.svg";
import Navigation from "./navigation";
import DemoComponent from "../demoComponent";
import DisplayTime from "../displayTime";
class Header extends React.Component {
  currentPage = "heure";
  state = {
    formatTime: "phpTime",
  };
  onNavigationParent = (destination) => {
    this.currentPage = destination;
    console.log(this.currentPage);
  };

  handleClick = (format) => {
    console.log(format);
    this.setState({
      formatTime: format,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.currentPage}
          {this.currentPage == "acceuil" && <DemoComponent />}
          {this.currentPage == "heure" && (
            <div>
              <DisplayTime format={this.state.formatTime} />
              <button onClick={() => this.handleClick("jsTime")}>
                JavaScript
              </button>
              <button onClick={() => this.handleClick("phpTime")}>PHP</button>
              <button onClick={() => this.handleClick("humanTime")}>
                Humain
              </button>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default Header;
