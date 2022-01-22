import { useState } from "react";
import { addDoc } from "firebase/firestore";

export default function AddPost({ dbRef }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const addPost = async () => {
    await addDoc(dbRef, { title: title, body: body });
    window.location.reload();
  };
  return (
    <>
      <input placeholder="Title" onChange={handleTitleChange} />
      <input placeholder="Body" onChange={handleBodyChange} />
      <button onClick={addPost}>Post</button>
    </>
  );
}
