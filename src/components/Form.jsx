import { useState } from "react";
import "./form.css";
export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    comment: "",
    subscribe: true,
  });

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  const [submittedData, setSubmittedData] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData(formData);
    setFormData({
      name: "",
      email: "",
      rating: 5,
      comment: "",
      subscribe: true,
    });
  }
  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="rating">Rating</label>
        <select
          name="rating"
          id="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="comment">Comments</label>
        <textarea
          name="comment"
          id="comment"
          value={formData.comment}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="subscribe">Subcription</label>
        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div
          style={{
            border: "2px solid black",
            width: "fit-content",
            padding: 10,
          }}
        >
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Rating: {submittedData.rating}</p>
          <p>Comment: {submittedData.comment}</p>
          <p>Subscription : {submittedData.comment == true ? "Yes" : "No"}</p>
        </div>
      )}
    </>
  );
}
