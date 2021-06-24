import React from "react";
import "./Section.css";
class Section extends React.Component {
  render() {
    let nombreArticles = 1;
    return nombreArticles >= 2 ? (
      <div>
        <section>
          <div className="container_section">
            <div className="container-img">
              <img src="./img/tartine.png" alt="" />
            </div>
            <div className="container-article">
              <h2>Mon premier article</h2>
              <p>
                Lorem ipsum dolor sit amer, consectetur adspiscing elut? sed do
                eiusmod tempor incicdidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam? qui nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia desernt mollut anim id est laborum.
              </p>
            </div>
          </div>

          <div className="container_section">
            <div className="container-img">
              <img src="./img/tartine.png" alt="" />
            </div>
            <div className="container-article">
              <h2>Mon premier article</h2>
              <p>
                Lorem ipsum dolor sit amer, consectetur adspiscing elut? sed do
                eiusmod tempor incicdidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam? qui nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia desernt mollut anim id est laborum.
              </p>
            </div>
          </div>
        </section>
      </div>
    ) : (
      <h1>Il n'y a pas d'article</h1>
    );
  }
}

export default Section;
