import React from "react";

class Perso extends React.Component {
  handleClick() {
    this.props.handClickParent();
  }
  render() {
    return (
      <div>
        <p>
          {" "}
          je m'appele {this.props.personnage.nom} {this.props.personnage.prenom}
          , j'ai {this.props.personnage.age} et j'habite à molem et je suis
          appelé du composant Perso.js{" "}
        </p>
        <button onClick={this.handleClick}>Bouton</button>
      </div>
    );
  }
}
