import React from "react";
import logo from "../../logo.svg";
import Navigation from "./navigation";
import DemoComponent from "../demoComponent";
import DisplayTime from "../displayTime";
class Header extends React.Component {
  currentPage = "acceuils";
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />
          {this.currentPage === "acceuil" ? (
            <DemoComponent />
          ) : (
            <DisplayTime format="jsTime" />
          )}
        </header>
      </div>
    );
  }
}

export default Header;
