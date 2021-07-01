import React from "react";
import Content from "../content/content";
import Navigation from "./navigation";
class Header extends React.Component {
  state = {
    currentPage: "heure",
  };

  onNavigationParent = (destination) => {
    this.setState({
      currentPage: destination,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation onNavigation={this.onNavigationParent} />
        </header>
        <Content currentPage={this.state.currentPage} />
      </div>
    );
  }
}

export default Header;
