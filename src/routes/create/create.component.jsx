import { useState } from "react";

import { createPost } from "../../hooks/requests";

import "./create.styles.scss";

const defaultFormFields = {
  title: "",
  body: "",
};

const Create = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, body } = formFields;
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = await createPost(title, body);
      resetFormFields();
      console.log(newPost);
    } catch (error) {
      console.error("error in creating new post:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h2>Add a New Post</h2>
        <label>Title:</label>
        <input
          onChange={handleChange}
          name="title"
          value={title}
          type="text"
          required
        />
        <label>Post:</label>
        <textarea
          onChange={handleChange}
          name="body"
          value={body}
          required
        ></textarea>

        <button className="button-add">Add Post</button>
      </form>
    </div>
  );
};

export default Create;
