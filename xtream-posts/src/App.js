import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./lib/firebase";
import Post from "./components/Post";
import UnorderedList from "./components/UI/UnorderedList";
import AddPost from "./components/AddPost";

function App() {
  const [posts, setPosts] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((post) => ({ ...post.data(), id: post.id })));
    };
    getPosts();
  }, []);

  return (
    <UnorderedList>
      {posts.map((post) => {
        const { body, title, id } = post;
        return <Post id={id} title={title} body={body} />;
      })}
      <AddPost dbRef={postsCollectionRef} />
    </UnorderedList>
  );
}

export default App;
