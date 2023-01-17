import { useState } from "react";

import "./create.styles.scss";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="create">
      <form>
        <h2>Add a New Post</h2>
        <label>Title:</label>
        <input type="text" required value={title} />
        <label>Post:</label>
        <textarea required value={body}></textarea>

        <button className="button-add">Add Post</button>
      </form>
    </div>
  );
};

export default Create;
