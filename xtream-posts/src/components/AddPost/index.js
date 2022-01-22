import { useState } from "react";
import { addDoc } from "firebase/firestore";
import style from "./index.module.css";

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
      <div className={style["create-post-wrapper"]}>
        <div className={style["inputs-wrapper"]}>
          <input placeholder="Title" onChange={handleTitleChange} />
          <input placeholder="Body" onChange={handleBodyChange} />
          <button className={style["post-button"]} onClick={addPost}>
            Post
          </button>
        </div>
      </div>
    </>
  );
}
