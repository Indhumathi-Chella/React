import { useState, useMemo } from "react";

function Sum() {
  const [count, setCount] = useState(0);

  const sum = useMemo(() => {
    let total = 0;
    for (let i = 0; i <= count; i++) {
      total += i;
    }
    return total;
  }, [count]);

  return (
    <div>
      <h2>
        Sum of numbers from 1 to {count} is: {sum}
      </h2>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}

export default Sum;
