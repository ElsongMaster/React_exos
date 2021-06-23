import React from "react";
import "./navigation.css";
class Navigation extends React.Component {
  navigation = (destination) => {
    console.log("navigation vers " + destination.target.textContent);
  };
  render() {
    return (
      <nav>
        <button onClick={(e) => this.navigation(e)}>Acceuil</button>
        <button onClick={(e) => this.navigation(e)}>Heure</button>
        <button onClick={(e) => this.navigation(e)}>Configuration</button>
      </nav>
    );
  }
}

export default Navigation;
