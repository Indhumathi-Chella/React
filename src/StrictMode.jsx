import React from "react";
import { createRoot } from "react-dom/client";

function Child(props) {
  //   props.name = 'Indhu';

  return <div>Name: {props.name}</div>;
}

function AppName() {
  return <Child name="Indhu" />;
}

export { AppName };
