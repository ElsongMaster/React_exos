import React from "react";

import Header from "./composants/Header";
import Section from "./composants/Section";
import Footer from "./composants/Footer";

class App extends React.Component {
  nbArticles(nbrArts) {
    console.log(nbrArts);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Section onClickArt={this.nbArticles} />
        <Footer />
      </div>
    );
  }
}

export default App;
