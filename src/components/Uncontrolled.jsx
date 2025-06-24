import { useRef } from "react";

function InputValue() {
  const inputRef = useRef("");
  return (
    <>
      <label htmlFor="description">
        Description: <textarea name="description" ref={inputRef}></textarea>
      </label>
      <button onClick={() => alert(inputRef.current.value)}>show</button>
    </>
  );
}

export { InputValue };
