import React from "react";
import "./Article.css";
class Article extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.detailsArticleRef = React.createRef();
  }
  handleClikBtn(article) {
    this.props.handleClickParent(article);
    this.props.setStateParent(
      article.props.stateParent.argent,
      article.props.stateParent.panier,
      article.props.stateParent.Articles
    );
  }

  displayBtn() {
    let res;
    if (this.props.argent > 0 && this.props.stockArt > 0) {
      res = <button onClick={() => this.handleClikBtn(this)}>Acheter</button>;
    } else if (this.props.stockArt <= 0) {
      res = <p style={{ fontWeight: "bold" }}>Rupture de stock</p>;
    } else {
      res = "";
    }
    return res;
  }

  colorBackground() {
    if (this.props.stockArt > 1 && this.detailsArticleRef.current != null) {
      this.detailsArticleRef.current.style.backgroundColor = "";
      this.detailsArticleRef.current.style.backgroundColor = "";
    } else if (this.props.stockArt === 1) {
      this.detailsArticleRef.current.style.backgroundColor = "orange";
    } else if (this.props.stockArt === 0) {
      this.detailsArticleRef.current.style.backgroundColor = "red";
    }
  }

  render() {
    return (
      <div className="content-card" ref={this.myRef}>
        <img src={this.props.linkImg} alt={""} />
        <div ref={this.detailsArticleRef} className="details-Article">
          <h3 className="nom">{this.props.nomArt}</h3>
          <span className="prix">Prix {this.props.priceArt}€</span>
          <span className="stock">Stock: {this.props.stockArt} unités</span>
          {this.colorBackground()}
          {this.displayBtn()}
        </div>
      </div>
    );
  }
}

export default Article;
