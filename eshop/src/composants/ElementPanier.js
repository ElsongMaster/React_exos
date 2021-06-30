import React from "react";

class ElementPanier extends React.Component {
  constructor(props) {
    super(props);
    this.RefEltPanier = React.createRef();
  }
  render() {
    return (
      <div ref={this.RefEltPanier} className="eltPanier">
        Produit: {this.props.article.nom} || Unités: 1{" "}
        <button
          onClick={() => {
            this.props.article.stock += 1;
            this.props.stateApp.argent += this.props.article.prix;
            this.props.changeStateApp(
              this.props.stateApp.argent,
              this.props.stateApp.panier,
              this.props.stateApp.Articles
            );
            this.RefEltPanier.current.remove();
          }}
        >
          Rendre
        </button>
      </div>
    );
  }
}

export default ElementPanier;
