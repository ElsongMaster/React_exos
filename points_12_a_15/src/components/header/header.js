import React from "react";
import logo from "../../logo.svg";
import Navigation from "./navigation";
import DemoComponent from "../demoComponent";
import DisplayTime from "../displayTime";
class Header extends React.Component {
  currentPage = "acceuil";
  render() {
    // let pageContent;
    // if (this.currentPage === "accueil") {
    //   pageContent = <DemoComponent />;
    // } else {
    //   pageContent = <DisplayTime />;
    // }
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />
          {this.currentPage === "acceuil" ? <DemoComponent /> : <DisplayTime />}
        </header>
      </div>
    );
  }
}

export default Header;
