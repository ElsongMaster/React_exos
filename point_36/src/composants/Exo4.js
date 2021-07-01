import React, { useRef } from "react";

export default function Exo4() {
  const inputTextRef = useRef(null);

  return (
    <div>
      <h1>Exo 4</h1>
      <p> change Bg</p>
      <input
        ref={inputTextRef}
        type="text"
        onFocus={() => (inputTextRef.current.style.backgroundColor = "green")}
        onBlur={() => (inputTextRef.current.style.backgroundColor = "white")}
      />
    </div>
  );
}
