import { useState, useRef } from "react";

import Exo1 from "./composants/Exo1";
import Exo2 from "./composants/Exo2";
import Exo3 from "./composants/Exo3";
import Exo4 from "./composants/Exo4";
import Exo5 from "./composants/Exo5";

function App() {
  const [count, setCount] = useState(0);

  const handleCpt = () => {
    const updateCount = count + 1;
    setCount(updateCount);
  };
  return (
    <div className="App">
      <Exo1 countBtn={count} handleBtn={handleCpt} />
      <Exo2 />
      <Exo3 />
      <Exo4 />
      <Exo5 />
    </div>
  );
}

export default App;
