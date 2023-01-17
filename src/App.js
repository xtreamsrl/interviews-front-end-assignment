import { useEffect, useState } from "react";

import Navigation from "./routes/navigation/navigation.component";
import PostList from "./components/post-list/post-list.component";

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
      <Navigation />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
