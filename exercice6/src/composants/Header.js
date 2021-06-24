import React from "react";

class Header extends React.Component {
  state = {
    counter1: 1,
    counter2: 1,
    counter3: 1,
  };
  handleClickbtn1(e) {
    this.setState((prevState, props) => ({
      counter1: prevState.counter1 + 1,
    }));

    console.log(`btn: ${e.target.textContent}`);
    console.log(` j'ai été cliqué ${this.state.counter1} fois`);
  }

  handleClickbtn2(e) {
    this.setState((prevState, props) => ({
      counter2: prevState.counter2 + 1,
    }));
    console.log(`btn: ${e.target.textContent}`);

    console.log(` j'ai été cliqué ${this.state.counter2} fois`);
  }

  handleClickbtn3(e) {
    this.setState((prevState, props) => ({
      counter3: prevState.counter3 + 1,
    }));
    console.log(`btn: ${e.target.textContent}`);

    console.log(` j'ai été cliqué ${this.state.counter3} fois`);
  }
  render() {
    return (
      <div>
        <nav>
          <button onClick={(e) => this.handleClickbtn1(e)}>Acceuil</button>
          <button onClick={(e) => this.handleClickbtn2(e)}>Heure</button>
          <button onClick={(e) => this.handleClickbtn3(e)}>
            Configuration
          </button>
        </nav>
        <h1>Voici mon nouveau site</h1>
      </div>
    );
  }
}

export default Header;
