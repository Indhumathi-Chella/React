import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postAdd } from "./postSlice";

function PostDisplay() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title && content) {
      dispatch(postAdd(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <h3>Add Post</h3>
      <input
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Enter title"
      />
      <textarea
        name="content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="Enter the content"
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>

      <h3>Post</h3>
      {posts.length === 0 && <p>No Data Found</p>}
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.title} : {post.content}</li>
        </ul>
      ))}



    </div>
  );
}

export default PostDisplay;
