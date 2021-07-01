import React, { useRef } from "react";

export default function Exo3() {
  const inputTextRef = useRef(null);
  const pNodeRef = useRef(null);
  return (
    <div>
      <h1>Exo 3</h1>
      <p ref={pNodeRef}> On Copy</p>
      <input
        ref={inputTextRef}
        type="text"
        onCopy={() => alert(inputTextRef.current.value)}
      />
    </div>
  );
}
