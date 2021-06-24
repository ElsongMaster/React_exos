import React from "react";
import "./Header.css";
class Header extends React.Component {
  state = {
    counter1: 1,
    counter2: 1,
    counter3: 1,
  };
  handleEventln1() {
    console.log("Accueil");
  }

  handleEventln2() {
    console.log("Galerie");
  }

  handleEventln3() {
    console.log("Contact");
  }
  render() {
    return (
      <div className="container_navBar">
        <nav>
          <a onClick={() => this.handleEventln1()}>link1</a>
          <a onMouseOver={() => this.handleEventln2()}>link2</a>
          <a onDoubleClick={() => this.handleEventln3()}>link3</a>
        </nav>

        <form>
          <label>Search:</label>
          <input type="text" />
          <button>Go</button>
        </form>
      </div>
    );
  }
}

export default Header;
