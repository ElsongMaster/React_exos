import React from "react";
import "./Section.css";
import Article from "./Article";
class Section extends React.Component {
  render() {
    let nombreArticles = 2;
    return nombreArticles >= 2 ? (
      <div>
        <section>
          <Article propFromApp={this.props.onClickArt} title="tartines" />
          <Article propFromApp={(e) => {}} title="Coding School" />
        </section>
      </div>
    ) : (
      <h1>Il n'y a pas d'article</h1>
    );
  }
}

export default Section;
