import React from "react";
import logo from "../../logo.svg";
import Navigation from "./navigation";
import DemoComponent from "../demoComponent";
import DisplayTime from "../displayTime";
class Header extends React.Component {
  currentPage = "heure";
  onNavigationParent = (destination) => {
    this.currentPage = destination;
    console.log(this.currentPage);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation onNavigation={this.onNavigationParent} />
          <img src={logo} className="App-logo" alt="logo" />
          {this.currentPage}
          {this.currentPage == "acceuil" && <DemoComponent />}
          {this.currentPage == "heure" && (
            <div>
              <DisplayTime format="jsTime" />
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default Header;
