import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button
        onClick={handleClick}
        style={{
          padding: 20,
          margin: "20px 10px",
          border: "2px solid yellow",
          color: "white",
          backgroundColor: "black",
          fontSize: "18px",
        }}
      >
        Clicked {count} times
      </button>
    </>
  );
}

function TextInput() {
  const [value, setValue] = useState("");
  function handleValue(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <h1>Input Event</h1>
      <input
        type="text"
        onChange={handleValue}
        style={{ margin: 5, padding: 10, border: "2px solid blue", width: 200 }}
      />
      <p>{value == "" ? "" : "Text : " + value}</p>
    </>
  );
}

function CounterControl() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>Counter</h1>
      <div
        style={{
          padding: 30,
          border: "2px solid black",
          width: 30,
          textAlign: "center",
          margin: 10,
        }}
      >
        {count}
      </div>
      <button
        onClick={decrease}
        style={{
          padding: 10,
          margin: 5,
          backgroundColor: "whitesmoke",
          color: "black",
        }}
      >
        prev
      </button>
      <button
        onClick={increase}
        style={{
          padding: 10,
          margin: 5,
          backgroundColor: "whitesmoke",
          color: "black",
        }}
      >
        Next
      </button>
    </>
  );
}
export { MyButton, TextInput, CounterControl };
