import { useState, useTransition } from "react";

function SearchList({ items }) {
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState(items);

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResult(filtered);
    });
  }
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      {result.length === 0 ? "Not found" : " "}

      <ul>
        {result.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function SearchLists({ items }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(items);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  async function handleChange(e) {
    const value = e.target.value;
    setInput(value);
    setIsLoading(true);
    const filtered = await new Promise((resolve) => {
      setTimeout(() => {
        const data = items.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        resolve(data);
      }, 500);
    });

    startTransition(() => {
      setResult(filtered);
      setIsLoading(false);
    });
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {(isPending || isLoading) && <p>Loading...</p>}
      <ul>
        {result.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export { SearchList, SearchLists };
