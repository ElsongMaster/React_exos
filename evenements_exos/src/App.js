import React from "react";

import Header from "./composants/Header";
import Section from "./composants/Section";
import Footer from "./composants/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;
