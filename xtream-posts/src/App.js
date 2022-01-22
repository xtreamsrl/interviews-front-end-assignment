import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./lib/firebase";
import Post from "./components/Post";
import UnorderedList from "./components/UI/UnorderedList";
import AddPost from "./components/AddPost";
import Container from "./components/UI/Container";

function App() {
  const [posts, setPosts] = useState([]);

  //Reference to the "posts" collection hosted on Firestore
  const postsCollectionRef = collection(db, "posts");

  //Fetching data from the database
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((post) => ({ ...post.data(), id: post.id })));
    };
    getPosts();
  }, []);

  return (
    <>
      <Container>
        <AddPost dbRef={postsCollectionRef} />
        <UnorderedList>
          {posts.map((post) => {
            const { body, title, id } = post;
            return <Post id={id} title={title} body={body} />;
          })}
        </UnorderedList>
      </Container>
    </>
  );
}

export default App;
