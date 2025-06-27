import { useState, useEffect } from "react";
import axios from "axios";
import "./user.css";

function DisplayUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // async function handleData() {
    //   try {
    //     const response = await axios.get(
    //       "https://685e6c557b57aebd2af961ab.mockapi.io/api/users"
    //     );
    //     setUsers(response.data);
    //   } catch (err) {
    //     setError("Failed to Load");
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    axios
      .get("https://685e6c557b57aebd2af961ab.mockapi.io/api/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to Load data");
        setLoading(false);
      });
  }, []);

  //   const handleDelete = async (userId) => {
  //     try {
  //       confirm("Are you sure?");
  //       await axios.delete(
  //         `https://685e6c557b57aebd2af961ab.mockapi.io/api/users/${userId}`
  //       );
  //       setUsers(users.filter((user) => user.id !== userId));
  //     } catch (err) {
  //       setError("failed ro delete data");
  //     }
  //   };

  const handleDelete = (userId) => {
    confirm("Are you sure you want to delete?");
    setLoading(true);
    axios
      .delete(`https://685e6c557b57aebd2af961ab.mockapi.io/api/users/${userId}`)
      .then((res) => {
        setUsers(users.filter((user) => user.id !== userId));
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to delete");
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h2>User Details</h2>
      <table border>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button className="btn btn-edit">Edit</button>{" "}
                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DisplayUser;
