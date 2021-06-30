import React from "react";
import ElementPanier from "./ElementPanier";
class Panier extends React.Component {
  render() {
    return (
      <div>
        <p>Mon panier:</p>
        <div className="Content-panier">
          {/* {console.log(this.props.panier)} */}
          {this.props.panier.map((elem, index) => (
            <ElementPanier
              changeStateApp={this.props.setStateParent}
              stateApp={this.props.stateParent}
              article={elem}
              id={`eltPanier_${index + 1}`}
              key={`eltPanier_${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Panier;
