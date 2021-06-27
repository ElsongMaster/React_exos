import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Personnage from "./personnage";
import Perso from "./composants/Perso";
class App extends React.Component {
  state = {
    perso1: new Personnage("Mad", "Max", 30),
    perso2: new Personnage("Afro", "Samourai", 35),
    perso3: new Personnage("picolo", "majin", 27),
  };

  handelClickApp() {
    console.log("fonction appelé de App");
  }
  changeDataPerso(newPrenom, newNom, newAge) {
    this.setState({
      perso1: new Personnage(newPrenom, newNom, newAge),
      perso2: new Personnage(newPrenom, newNom, newAge),
      perso3: new Personnage(newPrenom, newNom, newAge),
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Perso
            modifData={this.changeDataPerso}
            personnage={this.state.perso1}
            handleClickParent={this.handelClickApp}
          />
          <Perso
            modifData={this.changeDataPerso}
            personnage={this.state.perso2}
            handleClickParent={this.handelClickApp}
          />
          <Perso
            modifData={this.changeDataPerso}
            personnage={this.state.perso3}
            handleClickParent={this.handelClickApp}
          />
        </header>
      </div>
    );
  }
}

export default App;
