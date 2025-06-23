import { createElement } from "react";

function Greetings({ name }) {
  return createElement(
    "div",
    {
      style: {
        color: "white",
        backgroundColor: "teal",
        padding: "10px",
        margin:"10px",
        borderRadius: "5px",
        fontFamily: "Arial",
        textAlign: "center",
      },
    },
    `Hello,${name}`
  );
}

export default function DisplayJsx() {
  return createElement(Greetings, { name: "indhu" });
}
