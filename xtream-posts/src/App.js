import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./lib/firebase";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsCollectionRef = collection(db, "posts");
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((post) => ({ ...post.data(), id: post.id })));
    };
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        const { body, title, id } = post;
        return <Post id={id} title={title} body={body} />;
      })}
    </div>
  );
}

export default App;
