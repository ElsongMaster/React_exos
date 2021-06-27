import React from "react";

class Article extends React.Component {
  nombreArticle = 2;

  handleClick() {
    this.props.propFromApp(this.nombreArticle);
  }

  render() {
    return (
      <div className="container_section" onClick={() => this.handleClick()}>
        <div className="container-img">
          <img src="./img/tartine.png" alt="" />
        </div>
        <div className="container-article">
          <h2>{this.props.title}</h2>
          <p>
            Lorem ipsum dolor sit amer, consectetur adspiscing elut? sed do
            eiusmod tempor incicdidunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam? qui nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia desernt mollut anim id est laborum.
          </p>
        </div>
      </div>
    );
  }
}

export default Article;
