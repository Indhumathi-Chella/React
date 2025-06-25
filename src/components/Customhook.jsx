import { useState, useEffect } from "react";
import useFetch from "../../public/hooks/useFetch";

function useCounterWithEffect(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    console.log(`Counter changed: ${count}`);
  }, [count]);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounterWithEffect(10);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function UserData() {
  const [search, setSearch] = useState("");
  const {
    data: users,
    error,
    loading,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  if (error) return <p>Error :{error}</p>;
  if (loading) return <p>Loading...</p>;

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h3>User List</h3>
      <input
        type="text"
        value={search}
        style={{width:200}}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.length == 0 ? (
        <p style={{color:'red'}}>NOT Found</p>
      ) : (
        <ol>
          {filtered.map((user) => (
            <li key={user.id}>{user.name} </li>
          ))}
        </ol>
      )}
    </>
  );
}
export { CounterComponent, UserData };
