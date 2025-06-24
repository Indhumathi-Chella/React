import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
});

function ButtonCounter() {
  const [count, setCount] = useState(0);

  const counter = useCallback(() => {
    setCount((c) => c + 1);
  });
  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={counter} label="Click Me!" />
    </div>
  );
}
export default ButtonCounter;
