import React from "react";
import Panier from "./composants/Panier";
import Article from "./composants/Article";
import "./App.css";
class App extends React.Component {
  state = {
    argent: 20,
    panier: [],
    Articles: [
      {
        nom: "Chocolat",
        prix: 2.5,
        stock: 10,
        imgLink: "../img/candy-bar-1735569_640.png",
      },
      {
        nom: "Fanta",
        prix: 1,
        stock: 5,
        imgLink: "../img/aluminum-87987_640.png",
      },
      {
        nom: "Sandwich",
        prix: 2.5,
        stock: 10,
        imgLink: "../img/fast-food-2132863_640.png",
      },
    ],
  };

  changeState = (argent, panier, articles) => {
    this.setState({
      argent: argent,
      panier: panier,
      Articles: articles,
    });
  };

  handleclickArticle(article) {
    article.props.stateParent.argent -=
      article.props.stateParent.Articles[article.props.index].prix;
    article.props.stateParent.panier.push(
      article.props.stateParent.Articles[article.props.index]
    );
    article.props.stateParent.Articles[article.props.index].stock -= 1;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Mon argent: {this.state.argent}€</p>
        </header>
        <div className="container-articles">
          {this.state.Articles.map((art, index) => (
            <Article
              id={`article_${index + 1}`}
              setStateParent={this.changeState}
              stateParent={this.state}
              argent={this.state.argent}
              handleClickParent={this.handleclickArticle}
              nomArt={art.nom}
              priceArt={art.prix}
              stockArt={art.stock}
              linkImg={art.imgLink}
              key={`article_${index + 1}`}
              index={index}
            />
          ))}
        </div>

        <Panier
          stateParent={this.state}
          setStateParent={this.changeState}
          handleClickParent={this.handleclickArticle}
          panier={this.state.panier}
        />
      </div>
    );
  }
}

export default App;
