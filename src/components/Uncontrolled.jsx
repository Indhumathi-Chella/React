import { useEffect, useRef, useState } from "react";

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

function useCustomCount(val) {
  const [count, setCount] = useState(val);

  useEffect(() => {
    console.log("updated");
  }, [count]);

  const handleChange = () => setCount((count) => count + 1);

  return { count, handleChange };
}

function CustomCounter() {
  const { count, handleChange } = useCustomCount(0);
  return (
    <>
      <button onClick={handleChange}> click {count} times</button>
    </>
  );
}

export { InputValue, CustomCounter };
