import React from "react";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const Keyboard = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(57px,1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        return <button key={key}>{key}</button>;
      })}
    </div>
  );
};

export default Keyboard;