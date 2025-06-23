import { useState, useEffect } from "react";

function CounterTitle() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `count:${count}`;
  }, [count]);
  return (
    <>
      <h3>Count Display in Page Title</h3>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
      <button onClick={() => setCount(count + 1)}>Increament</button>
    </>
  );
}

function ProfileName() {
  const [name, SetName] = useState("");
  const [age, SetAge] = useState();
  const [role, SetRole] = useState("");
  return (
    <>
      <label htmlFor="name" style={{ display: "block", margin: 10 }}>
        Name:
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => SetName(e.target.value)}
          style={{ width: 200, height: 40, margin: 10 }}
        />
      </label>
      <label htmlFor="age" style={{ display: "block", margin: 10 }}>
        Age:
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => SetAge(e.target.value)}
          style={{ width: 200, height: 30, margin: 10 }}
        />
      </label>
      <label htmlFor="role" style={{ display: "block", margin: 10 }}>
        Role:
        <select
          name="role"
          id="role"
          value={role}
          onChange={(e) => SetRole(e.target.value)}
          style={{ width: 200, height: 40, margin: 10 }}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </label>

      <div
        style={{
          border: "2px solid black",
          width: 200,
          padding: 10,
          margin: 5,
        }}
      >
        <h3 style={{ textAlign: "center" }}>User's Card</h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Role: {role}</p>
      </div>
    </>
  );
}
export { CounterTitle, ProfileName };
