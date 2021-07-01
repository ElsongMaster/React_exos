import React, { useRef } from "react";

export default function Exo2() {
  const inputTextRef = useRef(null);
  const pNodeRef = useRef(null);
  return (
    <div>
      <h1>Exo 2</h1>
      <p ref={pNodeRef}> Input Content</p>
      <input
        ref={inputTextRef}
        type="text"
        onKeyUp={(e) =>
          e.key == "Enter"
            ? (pNodeRef.current.textContent = inputTextRef.current.value)
            : ""
        }
      />
    </div>
  );
}
