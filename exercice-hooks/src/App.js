import React, { useState, useEffect } from "react";
import Personnage from "./composants/Personnage";
import Article from "./composants/Article";
function App() {
  let [dataPerso, setDataPerso] = useState({
    nom: "EL",
    prenom: "MADINHIO",
    age: 28,
    Commune: "Bruxelles",
  });

  let [monTab, setEltTab] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="App">
      <header className="App-header">
        <Personnage dataPersoParent={dataPerso} />
        <Article tabArticle={monTab} />
      </header>
    </div>
  );
}

export default App;
