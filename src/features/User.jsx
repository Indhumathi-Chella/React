import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userAdd } from "./userSlice";

export default function UserDetailDisplay() {
  const [name, setName] = useState("Indhu");
  const [city, setCity] = useState("Chennai");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name && city) {
      setLoading(true);
      dispatch(userAdd(name, city));
      setTimeout(() => {
        setName("");
        setCity("");
        setLoading(false);
        setError("");
      }, 500);
    } else {
      setError("something went wrong");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter name"
        />
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="enter city"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {users.length === 0 && <p>No users found</p>}

      {loading && <p>Loading...</p>}
      {users.map((user) => (
        <div key={user.id} style={userStyle}>
          {user.name} from {user.city}
        </div>
      ))}
    </>
  );
}

const userStyle = {
    padding:10,
    margin:5,
    border:"2px solid black",
    width: 200
}
