import React from "react";

class App extends React.Component {
  state = {
    tab: [1, 2, 3, 4, 5],
  };
  removeEl() {
    this.state.tab.pop();
    this.setState({ tab: [...this.state.tab] });
  }
  analyseLnTab(ln) {
    if (ln === 1) {
      document.querySelector(".App").style.backgroundColor = "orange";
    } else if (ln === 0) {
      document.querySelector(".App").style.backgroundColor = "red";
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.removeEl();
      this.analyseLnTab(this.state.tab.length);
    }, 2000);
  }
  render() {
    let lnTab = this.state.tab.length;
    return (
      <div className="App">
        <header className="App-header">
          <p> Voici la longeur de mon tableau: {lnTab}</p>
        </header>
      </div>
    );
  }
}

export default App;
