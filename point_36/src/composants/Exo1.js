import React from "react";

export default function Exo1(props) {
  return (
    <div>
      <h1>Exo 1</h1>
      <p>You've clicked {props.countBtn} times</p>
      <button onClick={() => props.handleBtn()}>+1</button>
    </div>
  );
}
