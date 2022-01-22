import { useState } from "react";
import style from "./index.module.css";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { db } from "../../lib/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function Post({ id, title, body }) {
  return (
    <li className={style["post-card"]} key={id}>
      <h1>{capitalizeFirstLetter(title)}</h1>
      <h2>{capitalizeFirstLetter(body)}</h2>
      <UpdateTitle id={id} />
    </li>
  );
}

export const UpdateTitle = ({ id }) => {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedBody, setUpdatedBody] = useState("");

  const updatePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    const newPost = { title: updatedTitle, body: updatedBody };
    await updateDoc(postDoc, newPost);
    window.location.reload();
    console.log(newPost, "<<<NEW POST");
  };

  const handleUpdatedTitle = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleUpdatedBody = (e) => {
    setUpdatedBody(e.target.value);
  };
  return (
    <>
      <input placeholder="Update Title" onChange={handleUpdatedTitle} />
      <input placeholder="Update Body" onChange={handleUpdatedBody} />
      <button onClick={() => updatePost(id)}>Update</button>
    </>
  );
};
