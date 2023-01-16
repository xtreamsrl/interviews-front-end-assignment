import { useEffect, useState } from "react";

import Post from "./components/post/post.component";

import { getPosts } from "./hooks/requests";

const App = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Post />
    </div>
  );
};

export default App;
