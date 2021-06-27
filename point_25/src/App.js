import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Personnage from "./personnage";

class App extends React.Component {
  state = {
    perso1: new Personnage("Mad", "Max", 30),
    perso2: new Personnage("Afro", "Samourai", 35),
    perso3: new Personnage("picolo", "majin", 27),
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Je m'appelle {this.state.perso1.prenom} {this.state.perso1.nom} et
            j'ai {this.state.perso1.age} ans
          </p>
          <p>
            Je m'appelle {this.state.perso2.prenom} {this.state.perso2.nom} et
            j'ai {this.state.perso2.age} ans
          </p>
          <p>
            Je m'appelle {this.state.perso3.prenom} {this.state.perso3.nom} et
            j'ai {this.state.perso3.age} ans
          </p>
        </header>
      </div>
    );
  }
}

export default App;
