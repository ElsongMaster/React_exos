import React from "react";
import "./navigation.css";
class Navigation extends React.Component {
  navigation = (destination) => {
    this.props.onNavigation(destination);
  };
  render() {
    return (
      <nav>
        <button className="btn-nav" onClick={() => this.navigation("acceuil")}>
          Acceuil
        </button>
        <button className="btn-nav" onClick={() => this.navigation("heure")}>
          Heure
        </button>
        <button
          className="btn-nav"
          onClick={() => this.navigation("Configuration")}
        >
          Configuration
        </button>
      </nav>
    );
  }
}

export default Navigation;
