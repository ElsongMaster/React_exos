import React from "react";

class Header extends React.Component {
  state = {
    counter1: 1,
    counter2: 1,
    counter3: 1,
  };
  handleClickbtn1() {
    this.setState((prevState, props) => ({
      counter1: prevState.counter1 + 1,
    }));

    console.log(` j'ai été cliqué ${this.state.counter1} fois`);
  }

  handleClickbtn2() {
    this.setState((prevState, props) => ({
      counter2: prevState.counter2 + 1,
    }));

    console.log(` j'ai été cliqué ${this.state.counter2} fois`);
  }

  handleClickbtn3() {
    this.setState((prevState, props) => ({
      counter3: prevState.counter3 + 1,
    }));

    console.log(` j'ai été cliqué ${this.state.counter3} fois`);
  }
  render() {
    return (
      <div>
        <nav>
          <button onClick={(e) => this.handleClickbtn1()}>Acceuil</button>
          <button onClick={(e) => this.handleClickbtn2()}>Heure</button>
          <button onClick={(e) => this.handleClickbtn3()}>Configuration</button>
        </nav>
        <h1>Voici mon nouveau site</h1>
      </div>
    );
  }
}

export default Header;
