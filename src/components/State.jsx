import { useState } from "react";
import { fruitList } from "./data.js";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>You clicked me {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </>
  );
}

function FruitShow() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  let Index = (index + fruitList.length) % fruitList.length;
  let fruit = fruitList[Index];

  return (
    <section
      style={{
        padding: 10,
        border: "2px solid black",
        margin: 20,
        width: 400,
        textAlign: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Fruit Display</h1>
      <button
        onClick={() => setIndex(index - 1)}
        style={{
          padding: 10,
          border: "2px solid red",
          backgroundColor: "red",
          color: "white",
          margin: 5,
        }}
      >
        Prev
      </button>
      <button
        onClick={() => setIndex(index + 1)}
        style={{
          padding: 10,
          border: "2px solid green",
          backgroundColor: "green",
          color: "white",
          margin: 5,
        }}
      >
        Next
      </button>
      <h4>
        {fruit.name} origined from {fruit.origin}
      </h4>
      <img
        src={fruit.url}
        alt={fruit.alt}
        style={{ width: 200, height: 200 }}
      />
      <br />
      <button
        onClick={() => setShow(!show)}
        style={{
          padding: 5,
          border: "2px solid orange",
          backgroundColor: "orange",
          margin: 5,
        }}
      >
        {show ? "Hide" : "Show"} Details
      </button>
      {show && <p style={{ padding: 15, margin: 5 }}>{fruit.description}</p>}
    </section>
  );
}

export { Counter, FruitShow };
