import { useState } from "react";
import { createUser } from "../../services/userService";

function CreateUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  //   async function handleSubmit(e) {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post(
  //         "https://crud-user.free.beeceptor.com/api/users",
  //         formData
  //       );
  //       setMessage({ status: true, message: "User Created Successfully" });
  //       console.log(response.data);
  //     } catch (error) {
  //       setMessage({ status: false, message: "Failed to Create User" });
  //       console.log(error);
  //     }
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    createUser(formData)
      .then((response) => {
        setMessage({ status: true, message: "User Created Successfully" });
        console.log(response.data);
      })
      .catch((error) => {
        setMessage({ status: false, message: "Failed to create user" });
        console.log(error.data);
      });
  }
  return (
    <>
      <h3>Create User</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            name="name"
            placeholder="enter name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="Email">
          Email:{" "}
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="text"
            placeholder="enter password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Create User</button>

        {message && (
          <p style={{ color: message.status ? "green" : "red" }}>
            {message.message}
          </p>
        )}
      </form>
    </>
  );
}

export default CreateUser;
